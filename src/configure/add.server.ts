import { CommandModule } from 'yargs'
import slugify from '@sindresorhus/slugify'
import chalk from 'chalk'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { Prompter, using } from '../helpers'
import { CONFIG_DIR } from '../constants'
import { configExists, Server } from './server-config.manager'

export const AddServerCommand = {
  command: 'add-server',
  describe: 'Add configuration for a one of the servers that is already added in OGP.',
  builder: (yargs) => {
    yargs
      .option('name', {
        type: 'string',
        description: 'The name of the server'
      })
      .option('url', {
        type: 'string',
        description: 'URL for the server. This can be found in OGP by pressing the `Show API Action`'
      })
      .option('slug', {
        type: 'string',
        description: 'A sluggable version of the server name'
      })
  },
  handler: ({ name, url, slug }) => using(Prompter(), async prompt => {
    const u = new URL(url) ?? new URL(await prompt('Server url'))

    const cfg: Server = {
      name: name ?? await prompt('Name'),
      protocol: u.protocol,
      hostname: u.hostname,
      port: u.port,
      pathname: u.pathname,
      searchParam: {
        ip: u.searchParams.get('ip'),
        port: u.searchParams.get('port'),
        token: u.searchParams.get('token'),
        mod_key: u.searchParams.get('mod_key')
      }
    }

    const filename = slug ?? await prompt('Slug', slugify(cfg.name, { lowercase: true, preserveTrailingDash: true }))

    if (configExists(filename)) {
      console.log(`${chalk.yellow(cfg.name)} has already been configured.`)
      process.exit(1)
    }

    if (!existsSync(CONFIG_DIR)) {
      mkdirSync(CONFIG_DIR)
    }

    writeFileSync(
      join(CONFIG_DIR, `${filename}.json`),
      JSON.stringify(cfg, null, 2),
      { encoding: 'utf-8' }
    )

    console.log(`You are now able to control ${cfg.name} with the CLI`)
  })
} as CommandModule<Record<string, unknown>, {
    name?: string,
    slug?: string,
    url?: string,
  }>
