import axios, { AxiosInstance } from 'axios'
import chalk from 'chalk'
import { readFileSync } from 'fs'
import { join } from 'path'
import { OGPServerConfig } from '../server'
import { CONFIG_DIR, SCRIPT_NAME } from '../constants'

type Response<Message> = {
  status: string;
  message: Message;
}

export class OpenGamePanel {
    private client: AxiosInstance

    constructor (
      readonly server: OGPServerConfig
    ) {
      const url = new URL(`${server.protocol}://${server.hostname}`)
      url.pathname = server.pathname
      url.port = `${server.port}` || '80'

      this.client = axios.create({
        baseURL: `${url}`,
        params: {
          ...server.agent,
          token: this.getToken()
        }
      })
    }

    private getToken = () => {
      try {
        return readFileSync(join(CONFIG_DIR, 'token'), { encoding: 'utf-8' })
      } catch (error) {
        console.error('Token is missing')
        console.error(`Please call ${chalk.yellow(chalk.bold(`${SCRIPT_NAME} configure set-token`))}`)
        process.exit(1)
      }
    }

    request = async <T = string>(path: string, params?: Record<string, unknown>) => {
      // console.log(`${this.server.pathname}?${path}`, { params })

      const res = await this.client.get<Response<T>>(`${this.server.pathname}?${path}`, { params })
      const { data } = res

      if (Number(data.status) !== 200) {
        console.error(data.message)
        return null
      }

      return data
    }
}
