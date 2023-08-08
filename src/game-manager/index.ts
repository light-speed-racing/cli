import { CommandModule } from 'yargs'
import { RestartServer } from './restart.server'
import { StartServer } from './start.server'
import { StopServer } from './stop.server'

export const GameManager = {
  command: 'game-manager',
  describe: 'Manage the game servers on OGP',
  builder: yargs => {
    yargs
      .command(StartServer)
      .command(StopServer)
      .command(RestartServer)
  }
// eslint-disable-next-line @typescript-eslint/ban-types
} as CommandModule<Record<string, unknown>, {}>
