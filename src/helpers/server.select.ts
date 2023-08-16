import prompts from 'prompts'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { CONFIG_DIR } from '../constants'

export const ServerSelect = async () => {
  const choices = readdirSync(CONFIG_DIR)
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      title: JSON.parse(readFileSync(join(CONFIG_DIR, file), { encoding: 'utf-8' })).name,
      path: join(CONFIG_DIR, file)
    }))

  const { selected } = await prompts({
    type: 'select',
    name: 'selected',
    message: 'Select the servers you would like to manage',
    choices
  })

  const content = readFileSync(choices[selected].path, { encoding: 'utf-8' })

  return JSON.parse(content)
}
