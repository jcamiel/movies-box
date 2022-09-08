#!/bin/bash
set -eu

wait_for_url () {
    echo "Testing $1"
    max_in_s=$2
    delay_in_s=1
    total_in_s=0
    while [ $total_in_s -le "$max_in_s" ]
    do
        echo "Wait ${total_in_s}s"
        if (echo -e "GET $1\nHTTP/* 200" | hurl > /dev/null 2>&1;) then
            return 0
        fi
        total_in_s=$(( total_in_s +  delay_in_s))
        sleep $delay_in_s
    done
    return 1
}

echo "Starting server..."
nohup node dist/bin/www > dist/output.log 2>&1 &
server_pid="$!"
echo "Starter server pid $server_pid"

echo "Waiting server to be ready..."
wait_for_url 'http://localhost:3000' 60

echo "Running Hurl tests"
hurl --test integration/*.hurl

kill -9 "$server_pid"

