import { CommandModule } from 'yargs'
import { ServerSelect } from '../helpers'
import { GameManager } from '../open-game-panel'

export const RestartServer = {
  command: 'restart',
  describe: 'Restart a server',
  handler: async () => {
    const server = await ServerSelect()

    console.info(`Restarting ${server.name}`)
    await new GameManager(server).restart()
  }
} as CommandModule
