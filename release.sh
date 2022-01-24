#!/bin/sh

if [ -z "$(which aws)" ]; then
    echo "🚨 aws CLI not installed"
    exit 1
fi

if [ -z "$(git status --porcelain)" ]; then
    git checkout main
    git pull
    yarn release
else
    git status --porcelain
    echo "🔼 Working directory not clean"
    exit 1
fi
