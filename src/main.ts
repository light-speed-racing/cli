#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { GameManager } from './game-manager'

// HACK: disable deprecation warnings.
// Found in source code: https://github.com/cjihrig/node/blob/49902124a9d697e441dbf724aa6b26bd98f75dd0/lib/internal/process/warning.js#L12
(process as never as Record<string, boolean>).noDeprecation = true

yargs(hideBin(process.argv))
  .scriptName('lsr')
  .command(GameManager)
  .completion()
  .parse()
