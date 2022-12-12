#!/bin/bash

# Rebuild dist
npm run build

# Get user commit message
read -p "Enter commit message: " COMMITMESSAGE

# Add, commit and push the new dist
git add dist
git commit -m "${COMMITMESSAGE}"
git subtree push --prefix dist origin gh-pages