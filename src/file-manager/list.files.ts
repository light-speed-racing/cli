import { CommandModule } from 'yargs'
import { ServerSelect } from '../helpers'
import { LiteFM } from '../open-game-panel'

export const ListFiles = {
  command: 'list',
  describe: 'List all files in the `cfg` directory on for the selected server',
  handler: async () => {
    const server = await ServerSelect()
    const response = (await new LiteFM(server).list('cfg'))

    const files = response.map(({ filename, size }) => ({
      filename,
      path: `cfg/${filename}`,
      size: `${size} b`
    }))

    console.table(files)
  }
} as CommandModule
