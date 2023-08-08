import { OpenGamePanel } from './open-game-panel'

export class GameManager extends OpenGamePanel {
    start = async (port: number, ip: string) => {
      return await this.request('gamemanager/start', { port, ip })
    }

      stop = async (port: number, ip: string) => {
        return await this.request('gamemanager/stop', { port, ip })
      }

      restart = async (port: number, ip: string) => {
        return await this.request('gamemanager/restart', { port, ip })
      }
}
