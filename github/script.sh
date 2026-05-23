#!/usr/bin/env bash
set -euo pipefail

echo "Starting dependency update across repository..."

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

ROOT="$(pwd)"
BRANCH_NAME=""

# Find all package.json files excluding node_modules
mapfile -t PKGS < <(find . -name package.json -not -path "*/node_modules/*" -print)

if [ ${#PKGS[@]} -eq 0 ]; then
  echo "No package.json files found; nothing to do."
  exit 0
fi

for pkg in "${PKGS[@]}"; do
  DIR=$(dirname "$pkg")
  echo "Processing project: $DIR"
  pushd "$DIR" >/dev/null

  # Update all dependencies to latest package versions in package.json (no prompts)
  npx -y npm-check-updates -u || true

  # Install updated deps; allow legacy peer deps in case of older projects
  npm install --legacy-peer-deps || npm install || true

  # Try to fix known vulnerabilities
  npm audit fix --force || true

  popd >/dev/null
done

# If there are changes, create a branch, commit and push
if [ -n "$(git status --porcelain)" ]; then
  BRANCH_NAME="auto/deps-updates-$(date +%Y%m%d%H%M%S)"
  git checkout -b "$BRANCH_NAME"
  git add -A
  git commit -m "chore(deps): automated dependency updates across projects"
  git push --set-upstream origin "$BRANCH_NAME"
  echo "$BRANCH_NAME" > .github/scripts/BRANCH_NAME
  echo "Pushed updates to branch: $BRANCH_NAME"
else
  echo "No dependency changes detected."
fi

echo "Done."