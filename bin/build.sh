#!/usr/bin/env bash
set -eu

npm install
npm run clean
npm run build
