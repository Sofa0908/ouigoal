#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch (GitHub Pages source).
# Uses the personal GitHub account via gh-personal config (.envrc sets this too).
set -euo pipefail

cd "$(dirname "$0")/.."
export GH_CONFIG_DIR="${GH_CONFIG_DIR:-$HOME/.config/gh-personal}"

npm run build
cd dist
touch .nojekyll
git init -b gh-pages --quiet
git add -A
git -c user.name="$(git -C .. config user.name)" \
    -c user.email="$(git -C .. config user.email)" \
    commit -m "deploy $(date +%Y-%m-%d)" --quiet
git -c credential.helper= -c credential.helper='!gh auth git-credential' \
    push -f https://github.com/Sofa0908/ouigoal.git gh-pages
cd ..
rm -rf dist/.git
echo "Deployed: https://sofa0908.github.io/ouigoal/"
