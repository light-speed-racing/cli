import { CommandModule } from 'yargs'
import chalk from 'chalk'
import { unlinkSync } from 'fs'
import { join } from 'path'
import { Prompter, using } from '../helpers'
import { CONFIG_DIR } from '../constants'
import { server, configExists } from './server-config.manager'

export const RemoveServerCommand = {
  command: 'remove-server <slug>',
  describe: 'Delete the copnfiguration for a server',
  builder: (yargs) => {
    yargs
      .positional('slug', { type: 'string' })
  },
  handler: ({ slug, yes }) => using(Prompter(), async (prompt) => {
    if (!configExists(slug)) {
      console.log(`${chalk.yellow(chalk.bold(slug))} has not been configured`)
      process.exit(1)
    }

    const cfg = server(slug)

    const confirm = await prompt(
      `Are you sure you want to delete the configuration for ${chalk.red(chalk.bold(cfg.name))}`,
      [
        'Yes',
        chalk.bold('No')
      ].join('/')
    )
    if (!['yes', 'Yes'].includes(confirm)) {
      process.exit(0)
    }

    unlinkSync(join(CONFIG_DIR, `${slug}.json`))

    console.log(`${server.name} has been removed`)
  })
} as CommandModule<Record<string, unknown>, {
    slug: string,
  }>
