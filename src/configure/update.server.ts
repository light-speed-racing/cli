import { CommandModule } from 'yargs'
import { writeFileSync } from 'fs'
import { join } from 'path'
import { Prompter, using } from '../helpers'
import { CONFIG_DIR } from '../constants'
import { Server, server } from './server-config.manager'

export const UpdateServerCommand = {
  command: 'update-server <slug>',
  describe: '',
  handler: ({ slug }) => using(Prompter(), async prompt => {
    const config = server(slug)

    const name = await prompt('Server name', config.name)
    const hostname = await prompt('Hostname', config.hostname)
    const pathname = await prompt('Pathname', config.pathname)
    const agentIp = await prompt('Agent IP', config.searchParam.ip)
    const agentPort = await prompt('Agent port', config.searchParam.port)
    const agentToken = await prompt('Agent port', config.searchParam.token)
    const agentModKey = await prompt('Mod key', config.searchParam.mod_key)

    const cfg: Server = {
      name,
      hostname,
      pathname,
      searchParam: {
        ip: agentIp,
        port: agentPort,
        token: agentToken,
        mod_key: agentModKey
      }
    }

    writeFileSync(
      join(CONFIG_DIR, `${slug}.json`),
      JSON.stringify({ ...config, ...cfg }, null, 2),
      { encoding: 'utf-8' }
    )

    console.log(`${server.name} has been updated`)
  })
} as CommandModule<Record<string, unknown>, {
    slug: string,
  }>
