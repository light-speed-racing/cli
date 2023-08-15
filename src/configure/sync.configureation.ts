import { CommandModule } from 'yargs'
import axios from 'axios'
import { writeFileSync } from 'fs'
import { join } from 'path'
import { CONFIG_DIR, GIT_REPO_FOR_SERVER_CONFIG } from '../constants'

type Tree = {
    path: string
    mode: string
    type: 'blob',
    sha: string
    size: number
    url: string
  }

export const SyncConfigCommand = {
  command: 'sync',
  describe: 'Sync the server configuration from github',
  handler: async () => {
    const allFiles = await axios<{ tree: Array<Tree>}>(`https://api.github.com/repos/${GIT_REPO_FOR_SERVER_CONFIG}/git/trees/master?recursive=1`)

    const files = allFiles.data.tree
      .filter(({ path }) => !path.startsWith('.'))
      .map(({ path }) => ({
        name: path,
        url: `https://raw.githubusercontent.com/${GIT_REPO_FOR_SERVER_CONFIG}/master/${path}`
      }))

    const requests = await Promise.all(files.map(file => axios.get(file.url)))

    requests.forEach(async (req, index) => {
      const result = await req.data
      const { name } = files[index]
      writeFileSync(join(CONFIG_DIR, name), JSON.stringify(result, null, 2), { encoding: 'utf-8' })
    })
  }
} as CommandModule
