/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosInstance } from 'axios'
import { Env } from '../Env'
import { Logger } from '../logger'

type Respoonse<Message> = {
  status: string;
  message: Message;
}

const logger = new Logger('OpenGamePanel')
export abstract class OpenGamePanel {
    private client: AxiosInstance

    constructor (
      private readonly baseUrl = Env.get('OGP_API_URL'),
      private readonly token = Env.get('OGP_TOKEN')
    ) {
      this.client = axios.create({
        baseURL: `${baseUrl}`,
        params: {
          token,
          mod_key: 'default'
        }
      })
    }

    request = async <T = string>(path: string, params?: Record<string, unknown>) => {
      const { data } = await this.client.get<Respoonse<T>>(`ogp_api.php?${path}`, { params })

      if (Number(data.status) !== 200) {
        logger.error(data.message)
        return null
      }
      return data
    }
}
