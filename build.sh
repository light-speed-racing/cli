#!/bin/bash
yarn esbuild src/main.ts --bundle --outfile=ogp --allow-overwrite --target=node18 --format=cjs --platform=node \
    --external:yargs

