#!/bin/bash

git reset $1
git add .
git commit -m "say a lot"
git push -f