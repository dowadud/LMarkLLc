#!/usr/bin/env bash
# Run in Terminal.app (not inside Cursor) if git init fails with "Operation not permitted".
#
# IMPORTANT: Do NOT use github.com → "Add file" → "Upload files" for this project.
# The web uploader limits batches (~100 files) and is not for Node/Next.js repos.
# This script uses `git push`, which only sends tracked source (node_modules stays local).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

ORIGIN_URL="${1:-https://github.com/dowadud/LMarkLLc.git}"

echo "==> Using Git push (not the GitHub web file uploader)."

if [[ ! -d .git ]]; then
  git init
fi

# Never commit dependency or build output (huge; also causes push/upload failures).
git rm -r --cached node_modules 2>/dev/null || true
git rm -r --cached .next 2>/dev/null || true

git add -A
if git diff --cached --quiet; then
  echo "Nothing new to commit (working tree clean or no changes)."
else
  git commit -m "feat: initial TCS label equipment marketing site"
fi

git branch -M main

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$ORIGIN_URL"
  echo "Updated origin → $ORIGIN_URL"
else
  git remote add origin "$ORIGIN_URL"
  echo "Added origin → $ORIGIN_URL"
fi

echo "Pushing to GitHub (you may be prompted to sign in)..."
git push -u origin main

echo "Done. Remote: $ORIGIN_URL"
