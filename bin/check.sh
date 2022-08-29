#!/usr/bin/env bash
set -eu
npx prettier --check src/
npx eslint src/