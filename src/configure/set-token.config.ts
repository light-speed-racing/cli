import { CommandModule } from 'yargs'
import { writeFileSync } from 'fs'
import { join } from 'path'
import { CONFIG_DIR } from '../constants'

export const SetTokenCommand = {
  command: 'set-token <token>',
  describe: 'Set your auth token',
  builder: (yargs) => {
    yargs
      .positional('token', { type: 'string' })
  },
  handler: ({ token }) => {
    writeFileSync(join(CONFIG_DIR, 'token'), token, { encoding: 'utf-8' })

    console.log('Token has been set and you can now use ogp')
  }
} as CommandModule<Record<string, unknown>, {
  token: string,
}>
