#!/bin/sh

echo "Check for duplicate URL.\n"

if [ "$#" -ne 1 ]; then
    echo '[!] Please set the URL as the first argument.\n'
    echo 'EXAMPLE:'
    echo '  ./check_url.sh https://example.com'
    exit 1
fi

grep -rni $1 ./src/content/websites/