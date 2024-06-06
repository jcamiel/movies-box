#!/bin/bash
set -eu

echo "Starting server..."
nohup node dist/bin/www > dist/output.log 2>&1 &
server_pid="$!"
echo "Starter server pid $server_pid"



echo "Waiting server to be ready..."
echo -e "GET http://localhost:3000\nHTTP 200" | \
  hurl \
  --retry 60 \
  --retry-interval 1000 \
  --no-output


echo "Running Hurl tests"
hurl --test --parallel integration/*.hurl

kill -9 "$server_pid"

