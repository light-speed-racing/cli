import { CommandModule } from 'yargs'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { CONFIG_DIR } from '../constants'

export const ListAllServersCommand = {
  command: 'list-servers',
  describe: 'List all server configurations',
  handler: () => {
    const basePath = join(CONFIG_DIR)

    const files = readdirSync(basePath).filter(filename => filename.endsWith('.json'))

    const rows = files.map(path => {
      const content = readFileSync(join(basePath, path), { encoding: 'utf-8' })
      const json = JSON.parse(content)

      return {
        name: json.name,
        slug: path.replace('.json', ''),
        ip: json.searchParam.ip,
        port: Number(json.searchParam.port)
      }
    })

    console.table(rows)
  }
} as CommandModule
