import { Server } from '../../configure/server-config.manager'
import { OpenGamePanel } from './open-game-panel'

export class GameManager extends OpenGamePanel {
  constructor (readonly server: Server) {
    super(server)
  }

    start = async () => {
      return await this.request('gamemanager/start', { ...this.server.searchParam })
    }

      stop = async () => {
        return await this.request('gamemanager/stop', { ...this.server.searchParam })
      }

      restart = async () => {
        return await this.request('gamemanager/restart', { ...this.server.searchParam })
      }
}
