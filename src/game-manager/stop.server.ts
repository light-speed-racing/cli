import { CommandModule } from 'yargs'
import { GameManager } from '../helpers/ogp'
import { server } from '../configure/server-config.manager'

export const StopServer = {
  command: 'stop <slug>',
  describe: 'Stop a server',
  builder: (yargs) => {
    yargs
      .positional('slug', {
        type: 'string',
        description: 'The slug of the server'
      })
  },
  handler: async ({ slug }) => {
    await new GameManager(server(slug)).stop()
  }
} as CommandModule<Record<string, unknown>, {
  slug: string
}>
