import { homedir } from 'os'
import { join } from 'path'

export const SCRIPT_NAME = 'ogp'
export const CONFIG_DIR = join(homedir(), '.open-game-panel')
