import { CommandModule } from 'yargs'
import { ReadFile } from './read.file'
import { ListFiles } from './list.files'

export const FileManager = {
  command: 'file-manager',
  describe: 'Manage the files on OGP',
  builder: yargs => {
    yargs
      .command(ListFiles)
      .command(ReadFile)
  }
} as CommandModule
