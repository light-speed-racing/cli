#!/bin/bash
yarn esbuild src/main.ts --bundle --outfile=lsr --allow-overwrite --target=node16 --format=cjs --platform=node \
    --external:yargs

