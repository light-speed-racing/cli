import { CommandModule } from 'yargs'
import prompts from 'prompts'
import { ServerSelect } from '../helpers'
import { LiteFM } from '../open-game-panel'

export const ReadFile = {
  command: 'read',
  describe: 'Read the content of a configuration file',
  builder: yargs => {
    yargs.option('directory', {
      alias: 'd',
      default: 'cfg',
      describe: 'The directory'
    })
  },
  handler: async ({ directory }) => {
    const server = await ServerSelect()
    const files = await new LiteFM(server).list(directory)

    const { index } = await prompts({
      type: 'select',
      name: 'index',
      message: 'Select the file you would like to read',
      choices: files.map(({ filename }) => ({ title: filename }))
    })

    const response = await new LiteFM(server)
      .read(`${directory}/${files.at(index).filename}`)

    console.log(response)
  }
} as CommandModule<Record<string, unknown>, {
  directory: string,
}>
