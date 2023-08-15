import { CommandModule } from 'yargs'
import { SetTokenCommand } from './set-token.config'
import { SyncConfigCommand } from './sync.configureation'

export const ConfigureCommand = {
  command: 'configure',
  describe: 'Configure the cli',
  builder: yargs => {
    yargs
      .command(SetTokenCommand)
      .command(SyncConfigCommand)
  }
} as CommandModule
