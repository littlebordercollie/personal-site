#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "$0")" && pwd)"
archive="$project_root/ops/personal-site-dist.tar.gz"

cd "$project_root"
npm run build
tar \
    --exclude='./evidence/dedao-education-salon-group-photo-2026.jpg' \
    -czf "$archive" \
    -C "$project_root/dist" \
    .

if command -v shasum >/dev/null 2>&1; then
    checksum="$(shasum -a 256 "$archive" | awk '{print $1}')"
else
    checksum="$(sha256sum "$archive" | awk '{print $1}')"
fi

printf 'Release package ready.\nArchive: %s\nSHA-256: %s\n' "$archive" "$checksum"
