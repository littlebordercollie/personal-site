#!/usr/bin/env bash
set -euo pipefail

archive="${1:-/tmp/personal-site-dist.tar.gz}"
site_root="/var/www/personal-site"

if [[ ! -f "$archive" ]]; then
  echo "Deployment archive not found: $archive" >&2
  exit 1
fi

if ! command -v nginx >/dev/null 2>&1; then
  if command -v apt-get >/dev/null 2>&1; then
    apt-get update
    DEBIAN_FRONTEND=noninteractive apt-get install -y nginx
  elif command -v dnf >/dev/null 2>&1; then
    dnf install -y nginx
  elif command -v yum >/dev/null 2>&1; then
    yum install -y nginx
  else
    echo "No supported package manager found for nginx installation." >&2
    exit 1
  fi
fi

install -d -m 0755 "$site_root"
find "$site_root" -mindepth 1 -maxdepth 1 -exec rm -rf -- {} +
tar -xzf "$archive" -C "$site_root"
chown -R root:root "$site_root"
find "$site_root" -type d -exec chmod 0755 {} +
find "$site_root" -type f -exec chmod 0644 {} +

install -m 0644 /tmp/nginx-personal-site.conf /etc/nginx/conf.d/personal-site.conf
nginx -t
systemctl enable nginx
systemctl restart nginx

echo "Personal site deployed to $site_root"
