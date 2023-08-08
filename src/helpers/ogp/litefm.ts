import { Logger } from '../logger'
import { OpenGamePanel } from './open-game-panel'

const logger = new Logger('LiteFM')

export class LiteFM extends OpenGamePanel {
    get = async (port: number, ip: string, path: string) => {
      const res = await this.request('litefm/get', { port, ip, relative_path: path })

      if (!res?.message) {
        return logger.info(`The file is empty { status: ${res?.status} }`)
      }

      return JSON.parse(res?.message)
    }
}
