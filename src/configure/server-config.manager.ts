import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import { CONFIG_DIR } from '../constants'

export type Server = {
  protocol: string
  name: string
  hostname: string
  port?: string
  pathname: string
  searchParam: {
    token: string
    ip: string
    port: string
    mod_key: string
  }
}

export const configExists = (serverName: string) => existsSync(join(CONFIG_DIR, `${serverName}.json`))

export const server = (slug: string): Server => {
  const content = readFileSync(join(CONFIG_DIR, `${slug}.json`), { encoding: 'utf-8' })

  if (!content) {
    return {} as Server
  }

  return JSON.parse(content) as Server
}
