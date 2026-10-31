#!/usr/bin/env bash
# Copies an eval fixture into the case workspace (the current directory).
# Usage: install.sh <fixture> [destination]
# Files named *.fixture lose the suffix on copy, so tools that scan this repo
# never mistake a fixture's SKILL.md or package.json for a real one.
set -euo pipefail
src="$(cd "$(dirname "$0")/$1" && pwd)"
dest="${2:-.}"
mkdir -p "$dest"
cp -R "$src/." "$dest/"
find "$dest" -name '*.fixture' -exec sh -c 'mv "$1" "${1%.fixture}"' _ {} \;
