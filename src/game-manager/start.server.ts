import { CommandModule } from 'yargs'
import { ServerSelect } from '../helpers'
import { GameManager } from '../open-game-panel'

export const StartServer = {
  command: 'start',
  describe: 'Start a server',
  handler: async () => {
    const server = await ServerSelect()
    console.info(`Starting ${server.name}`)
    await new GameManager(server).start()
  }
} as CommandModule
