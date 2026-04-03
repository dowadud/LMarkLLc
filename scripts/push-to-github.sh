#!/usr/bin/env bash
# Push this project to GitHub using normal .git, or a bare repo under ~/.cache if Desktop blocks .git/hooks.
#
# IMPORTANT: Do NOT use github.com → "Add file" → "Upload files" for this project.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

ORIGIN_URL="${1:-https://github.com/dowadud/LMarkLLc.git}"
COMMIT_MSG="${2:-chore: sync project}"

# Bare repo path (created when Cursor/macOS blocks `git init` on Desktop)
BARE_GIT="${BARE_GIT:-$HOME/.cache/LMarkLLc.git}"

if [[ -d "$REPO_ROOT/.git" ]]; then
  git() { command git "$@"; }
else
  if [[ ! -d "$BARE_GIT" ]]; then
    echo "No .git in project and no bare repo at $BARE_GIT"
    echo "Create one with: git init --bare \"$BARE_GIT\""
    echo "Then: git --git-dir=\"$BARE_GIT\" --work-tree=\"$REPO_ROOT\" remote add origin $ORIGIN_URL"
    exit 1
  fi
  echo "==> Using bare git dir: $BARE_GIT (work tree: $REPO_ROOT)"
  git() { command git --git-dir="$BARE_GIT" --work-tree="$REPO_ROOT" "$@"; }
fi

echo "==> Git push (not the GitHub web file uploader)."

git rm -r --cached node_modules 2>/dev/null || true
git rm -r --cached .next 2>/dev/null || true

git add -A
if git diff --cached --quiet; then
  echo "Nothing new to commit."
else
  git commit -m "$COMMIT_MSG"
fi

git branch -M main 2>/dev/null || true

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$ORIGIN_URL"
else
  git remote add origin "$ORIGIN_URL"
fi

echo "Pushing to $ORIGIN_URL ..."
git push -u origin main

echo "Done."
