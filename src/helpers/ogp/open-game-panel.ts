import axios, { AxiosInstance } from 'axios'
import { Server } from '../../configure/server-config.manager'

type Respoonse<Message> = {
  status: string;
  message: Message;
}

export class OpenGamePanel {
    private client: AxiosInstance

    constructor (
      readonly server: Server
    ) {
      const url = new URL(`${server.protocol}//${server.hostname}`)
      url.pathname = server.pathname
      url.port = server.port

      this.client = axios.create({
        baseURL: `${url}`,
        params: {
          ...server.searchParam
        }
      })
    }

    request = async <T = string>(path: string, params?: Record<string, unknown>) => {
      const { data } = await this.client.get<Respoonse<T>>(`${this.server.pathname}?${path}`, { params })

      if (Number(data.status) !== 200) {
        console.error(data.message)
        return null
      }
      return data
    }
}
