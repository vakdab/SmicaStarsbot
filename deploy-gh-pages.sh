#!/usr/bin/env bash
# Builds the static export and publishes it to the gh-pages branch,
# which is what GitHub Pages serves at https://vakdab.github.io/SmicaStarsbot/
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_PATH="/SmicaStarsbot"
BUILD_DIR="$REPO_ROOT/out"
WORK_DIR="$REPO_ROOT/.gh-pages-build"
BRANCH="gh-pages"

cd "$REPO_ROOT"
NEXT_PUBLIC_BASE_PATH="$BASE_PATH" npm run build

# fresh working copy of the build output
mkdir -p "$WORK_DIR"
find "$WORK_DIR" -mindepth 1 -delete
cp -R "$BUILD_DIR"/. "$WORK_DIR"/
touch "$WORK_DIR/.nojekyll"

cd "$WORK_DIR"
git init -q -b "$BRANCH"
git add -A
git -c user.name="vakdab" -c user.email="deploy@vakdab.local" commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"

REMOTE_URL="$(git -C "$REPO_ROOT" config --get remote.origin.url)"
git push -f "$REMOTE_URL" "$BRANCH:$BRANCH"

echo "Published to $BRANCH. GitHub Pages will refresh in a few seconds."
