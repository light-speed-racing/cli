import { OGPServerConfig } from '../server'
import { OpenGamePanel } from './open-game-panel'

export class GameManager extends OpenGamePanel {
  constructor (readonly server: OGPServerConfig) {
    super(server)
  }

    start = async () => await this.request('gamemanager/start', { ...this.server.agent })

      stop = async () => {
        return await this.request('gamemanager/stop', { ...this.server.agent })
      }

      restart = async () => {
        return await this.request('gamemanager/restart', { ...this.server.agent })
      }
}
