import { CommandModule } from 'yargs'
import { Env } from '../helpers'
import { GameManager } from '../helpers/ogp'

export const RestartServer = {
  command: 'restart <port>',
  describe: 'Restart a server',
  builder: (yargs) => {
    yargs
      .positional('port', {
        type: 'number',
        description: 'The port that the server is running on'
      })
      .option('ip', {
        type: 'string',
        description: 'The ip address that the server is running on',
        default: Env.get('OGP_DEFAULT_AGENT_IP')
      })
  },
  handler: async ({ port, ip }) => {
    await new GameManager().restart(port, ip)
  }
} as CommandModule<Record<string, unknown>, {
  port: number,
  ip: string
}>