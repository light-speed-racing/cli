import { readFileSync } from 'fs'
import { CONFIG_PATH, deserialize, Config } from '../init/config.manager'

export class Env {
  static all () {
    return deserialize(readFileSync(CONFIG_PATH))
  }

  static get (key: keyof Config): string {
    const value = Env.all()[key]

    if (value === undefined) {
      throw new Error(`Please provide env variable for ${key}`)
    }

    return value
  }
}
