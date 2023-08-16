import { CommandModule } from 'yargs'
import { ServerSelect } from '../helpers'
import { LiteFM } from '../open-game-panel'

export const ListFiles = {
  command: 'list',
  describe: 'List all files in a directory',
  builder: yargs => {
    yargs.option('directory', {
      alias: 'd',
      default: 'cfg',
      describe: 'The directory',
      type: 'string'
    })
  },
  handler: async ({ directory }) => {
    const server = await ServerSelect()
    const response = await new LiteFM(server).list(directory)

    const files = response.map(({ filename, size }) => ({
      filename,
      path: `${directory}/${filename}`,
      size: `${size} b`
    }))

    console.table(files)
  }
} as CommandModule<Record<string, unknown>, {
  directory: string,
}>
