#!/usr/bin/env bash
set -euo pipefail

echo "==> Checking GitHub CLI authentication..."

if ! command -v gh >/dev/null 2>&1; then
  echo "ERROR: GitHub CLI (gh) is not installed."
  echo "Install: https://cli.github.com/"
  exit 1
fi

if gh auth status >/dev/null 2>&1; then
  echo "==> gh auth OK"
  gh auth status
  exit 0
fi

echo "ERROR: gh is not authenticated in this shell."
echo
echo "git push can still work without gh auth — they use different credentials."
echo
echo "Fix (choose one):"
echo "  1. Interactive login:  gh auth login"
echo "  2. Token env var:      export GH_TOKEN=<token-with-repo-scope>"
echo "     Windows (persistent): set GH_TOKEN in User Environment Variables"
echo "     Cursor terminal:     terminal.integrated.env.windows in settings.json"
echo
echo "After fixing, verify with: gh auth status"
echo "Docs: docs/GITHUB_AGENT_SETUP.md"
exit 1
