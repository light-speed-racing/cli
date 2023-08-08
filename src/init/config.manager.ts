import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { homedir } from 'os'
import { join } from 'path'

/* eslint-disable @typescript-eslint/naming-convention */
export type Config = {
    OGP_API_URL: string
    OGP_DEFAULT_AGENT_IP: string
    OGP_TOKEN: string
}
/* eslint-enable @typescript-eslint/naming-convention */

export const CONFIG_DIR = join(homedir(), '.light-speed-racing')
export const CONFIG_PATH = join(CONFIG_DIR, 'config')

export const deserialize = (raw: Buffer): Record<string, string> => {
  return raw.toString()
    .split('\n')
    .map(x => x.trim())
    .filter(Boolean)
    .reduce((acc, line) => {
      const [key, value] = line.split('=')

      return {
        ...acc,
        [key]: value
      }
    }, {})
}

export const serialize = (json: Record<string, unknown>) => Object.entries(json)
  .map(([key, value]) => `${key}=${value}`).join('\n')

export const config = () => {
  mkdirSync(CONFIG_DIR, { recursive: true })

  return deserialize(readFileSync(CONFIG_PATH))
}

export const patchConfig = (cfg: Record<string, string | number>) => {
  const oldConfig = config()

  const newConfig = Object.entries({ ...oldConfig, ...cfg }).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value
  }), {})

  writeFileSync(CONFIG_PATH, serialize(newConfig))
}
