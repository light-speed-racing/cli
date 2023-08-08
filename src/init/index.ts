import { CommandModule } from 'yargs'
import { Prompter, using } from '../helpers'
import { patchConfig } from './config.manager'

export const InitCommnad = {
  command: 'init',
  describe: 'Configure the cli',
  handler: () => using(Prompter(), async prompt => {
    const answers = {
      OGP_API_URL: await prompt('Api URL', 'http://194.13.81.100'),
      OGP_DEFAULT_AGENT_IP: await prompt('Api URL', '194.13.81.100'),
      OGP_TOKEN: await prompt('OGP Token')
    }

    patchConfig(answers)
  })
} as CommandModule
