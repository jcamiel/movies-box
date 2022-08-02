#!/usr/bin/env bash
set -eu

export DEBUG=movies-box:*
node dist/bin/www
