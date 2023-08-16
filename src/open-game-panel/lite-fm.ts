import { OGPServerConfig } from '../server'
import { OpenGamePanel } from './open-game-panel'

type OGPFile = {
  group: string,
  size: number,
  filename: string
  user: string
}

type FileList = {
  files: Record<number, OGPFile>,
  directories: Record<number, OGPFile>
}

export class LiteFM extends OpenGamePanel {
  constructor (readonly server: OGPServerConfig) {
    super(server)
  }

    list = async (relative_path: string, filetype = '.json') => {
      const response = await this.request('litefm/list', { ...this.server.agent, relative_path })
      const { files } = JSON.parse(JSON.stringify(response.message)) as FileList

      return Object.values(files).filter(f => f.filename.endsWith(filetype))
    }

    read = async (relative_path: string) => {
      const response = await this.request('litefm/get', { ...this.server.agent, relative_path })

      return JSON.parse(JSON.stringify(response.message))
    }
}
