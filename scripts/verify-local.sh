#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Running lint..."
npm run lint

echo "==> Running tests..."
npm test

echo "==> Running build..."
npm run build

echo "==> All checks passed."
