#!/bin/bash
# coding:utf8

# params
OS=$(uname -s)
date_today=$(date +"%Y-%m-%d")
now_time=$(date +"%H:%M:%S")



if [ -e "murmur/${date_today}.md" ]; then
  # exists
  echo "exists ${now_time}"
else
  # not exist
  echo "  * [${date_today}](murmur/${date_today}.md)" >> _sidebar.md
fi

echo "**----${date_today} ${now_time}----**" >> "murmur/${date_today}.md"
echo '' >> "murmur/${date_today}.md"
echo "$@" >> "murmur/${date_today}.md"
echo -e '\n' >> "murmur/${date_today}.md"

# commit to github
if [ -z "$1" ]; then    
  git add .
  git commit -m "say a little"
  git push
fi
