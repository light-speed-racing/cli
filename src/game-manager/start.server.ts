import { CommandModule } from 'yargs'
import { GameManager } from '../helpers/ogp'
import { server } from '../configure/server-config.manager'

export const StartServer = {
  command: 'start <slug>',
  describe: 'Start a server',
  builder: (yargs) => {
    yargs
      .positional('slug', {
        type: 'string',
        description: 'The slug of the server'
      })
  },
  handler: async ({ slug }) => {
    await new GameManager(server(slug)).start()
  }
} as CommandModule<Record<string, unknown>, {
  slug: string
}>
