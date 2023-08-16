import { Track } from './common.types'

export type Bop = {
    entries?: Array<{
        track: Track
        carModel: number
        ballastKg?: number
        restrictor?: number
    }>
}
