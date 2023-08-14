import { CommandModule } from 'yargs'
import { AddServerCommand } from './add.server'
import { ListAllServersCommand } from './list.server'
import { RemoveServerCommand } from './remove.server'
import { UpdateServerCommand } from './update.server'

export const ConfigureCommand = {
  command: 'configure',
  describe: 'Configure the cli',
  builder: yargs => {
    yargs
      .command(AddServerCommand)
      .command(ListAllServersCommand)
      .command(RemoveServerCommand)
      .command(UpdateServerCommand)
  }
} as CommandModule
