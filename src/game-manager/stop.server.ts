import { CommandModule } from 'yargs'
import { ServerSelect } from '../helpers'
import { GameManager } from '../open-game-panel'

export const StopServer = {
  command: 'stop',
  describe: 'Stop a server',
  handler: async () => {
    const server = await ServerSelect()
    console.info(`Stopping ${server.name}`)
    await new GameManager(server).stop()
  }
} as CommandModule
