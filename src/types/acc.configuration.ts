import { Bool } from './common.types'

export type Configuration = {
    tcpPort: number
    udpPort: number
    registerToLobby: Bool
    maxConnections: number
    lanDiscovery: Bool
}
