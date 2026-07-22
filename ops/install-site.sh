#!/usr/bin/env bash
set -euo pipefail

archive="${1:-/tmp/personal-site-dist.tar.gz}"
expected_sha256="${2:-}"
release_id="${3:-$(date -u +%Y%m%dT%H%M%SZ)}"
nginx_candidate="${4:-/tmp/nginx-personal-site.conf}"

site_base="/var/www/personal-site"
releases_dir="$site_base/releases"
current_link="$site_base/current"
nginx_target="/etc/nginx/conf.d/personal-site.conf"
lock_file="/var/lock/personal-site-deploy.lock"

if [[ -z "$expected_sha256" || ! "$expected_sha256" =~ ^[a-f0-9]{64}$ ]]; then
    echo "A lowercase SHA-256 checksum is required." >&2
    exit 1
fi

if [[ ! "$release_id" =~ ^[A-Za-z0-9._-]+$ ]]; then
    echo "Unsafe release id: $release_id" >&2
    exit 1
fi

for required in "$archive" "$nginx_candidate"; do
    if [[ ! -f "$required" ]]; then
        echo "Required deployment file not found: $required" >&2
        exit 1
    fi
done

for command_name in nginx curl tar sha256sum flock systemctl; do
    if ! command -v "$command_name" >/dev/null 2>&1; then
        echo "Required command is missing: $command_name" >&2
        exit 1
    fi
done

nginx_version="$(nginx -v 2>&1 | sed -E 's#.*nginx/([0-9.]+).*#\1#')"
minimum_nginx="1.30.4"
if [[ "$(printf '%s\n%s\n' "$minimum_nginx" "$nginx_version" | sort -V | head -n 1)" != "$minimum_nginx" ]]; then
    echo "nginx $nginx_version is below the required security floor $minimum_nginx." >&2
    exit 1
fi

exec 9>"$lock_file"
if ! flock -n 9; then
    echo "Another personal-site deployment is already running." >&2
    exit 1
fi

actual_sha256="$(sha256sum "$archive" | awk '{print $1}')"
if [[ "$actual_sha256" != "$expected_sha256" ]]; then
    echo "Archive checksum mismatch." >&2
    echo "Expected: $expected_sha256" >&2
    echo "Actual:   $actual_sha256" >&2
    exit 1
fi

if tar -tzf "$archive" | grep -Eq '(^/|(^|/)\.\.(/|$))'; then
    echo "Archive contains an unsafe absolute or parent path." >&2
    exit 1
fi

if tar -tvzf "$archive" | awk 'substr($1,1,1) ~ /[lhbcp]/ { bad=1 } END { exit !bad }'; then
    echo "Archive contains a link or special file." >&2
    exit 1
fi

install -d -m 0755 "$site_base" "$releases_dir" /var/www/acme
release_dir="$releases_dir/$release_id"
if [[ -e "$release_dir" ]]; then
    echo "Release already exists: $release_dir" >&2
    exit 1
fi

staging_dir="$(mktemp -d "$releases_dir/.staging.XXXXXX")"
next_link=""
nginx_backup=""

cleanup() {
    if [[ -n "$next_link" && "$next_link" == "$site_base/.current.next."* && -L "$next_link" ]]; then
        rm -f -- "$next_link"
    fi
    if [[ -n "$staging_dir" && "$staging_dir" == "$releases_dir/.staging."* && -d "$staging_dir" ]]; then
        rm -rf -- "$staging_dir"
    fi
    if [[ -n "$nginx_backup" && -f "$nginx_backup" ]]; then
        rm -f -- "$nginx_backup"
    fi
}
trap cleanup EXIT

tar --no-same-owner --no-same-permissions -xzf "$archive" -C "$staging_dir"

for required_output in index.html 404.html robots.txt sitemap.xml og.png beian-icon.png; do
    if [[ ! -f "$staging_dir/$required_output" ]]; then
        echo "Release is missing $required_output" >&2
        exit 1
    fi
done

if [[ ! -d "$staging_dir/assets" ]]; then
    echo "Release is missing the assets directory." >&2
    exit 1
fi

chown -R root:root "$staging_dir"
find "$staging_dir" -type d -exec chmod 0755 {} +
find "$staging_dir" -type f -exec chmod 0644 {} +
mv "$staging_dir" "$release_dir"
staging_dir=""

if [[ -f "$nginx_target" ]]; then
    nginx_backup="$(mktemp /tmp/personal-site-nginx.XXXXXX)"
    cp -p "$nginx_target" "$nginx_backup"
fi

install -m 0644 "$nginx_candidate" "$nginx_target"
if ! nginx -t; then
    if [[ -n "$nginx_backup" ]]; then
        install -m 0644 "$nginx_backup" "$nginx_target"
    else
        rm -f -- "$nginx_target"
    fi
    nginx -t || true
    exit 1
fi

previous_release=""
if [[ -L "$current_link" ]]; then
    previous_release="$(readlink -f "$current_link")"
fi

next_link="$site_base/.current.next.$$"
ln -s "$release_dir" "$next_link"
mv -Tf "$next_link" "$current_link"
next_link=""

systemctl enable nginx >/dev/null
systemctl reload nginx

smoke_failed=0
if ! curl --fail --silent --show-error --resolve ailiuxu.com:443:127.0.0.1 \
    https://ailiuxu.com/ | grep -q '<title>刘旭｜把 AI、数据和流程用进真实工作</title>'; then
    echo "Homepage smoke test failed." >&2
    smoke_failed=1
fi

not_found_status="$(curl --silent --output /dev/null --write-out '%{http_code}' \
    --resolve ailiuxu.com:443:127.0.0.1 https://ailiuxu.com/__deployment-smoke-404__)"
if [[ "$not_found_status" != "404" ]]; then
    echo "404 smoke test returned $not_found_status." >&2
    smoke_failed=1
fi

alias_result="$(curl --silent --output /dev/null --write-out '%{http_code} %{redirect_url}' \
    --resolve liuxu.wiki:443:127.0.0.1 https://liuxu.wiki/__deployment-smoke__)"
if [[ "$alias_result" != "301 https://ailiuxu.com/__deployment-smoke__" ]]; then
    echo "Alias redirect smoke test returned: $alias_result" >&2
    smoke_failed=1
fi

if [[ "$smoke_failed" -ne 0 ]]; then
    if [[ -n "$previous_release" && -d "$previous_release" ]]; then
        rollback_link="$site_base/.current.rollback.$$"
        ln -s "$previous_release" "$rollback_link"
        mv -Tf "$rollback_link" "$current_link"
    fi
    if [[ -n "$nginx_backup" ]]; then
        install -m 0644 "$nginx_backup" "$nginx_target"
    fi
    nginx -t && systemctl reload nginx
    exit 1
fi

printf 'Personal site deployed successfully.\nRelease: %s\nSHA-256: %s\n' "$release_dir" "$actual_sha256"
