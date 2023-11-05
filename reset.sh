#!/bin/bash

git add .
git stash "reset.sh"
git reset $1
git stash pop
git add .
git commit -m "reset.sh"
git push -f