import { Bool } from './common.types'

export type Settings = {
    serverName: string
    adminPassword: string
    carGroup: 'GT3' | 'GT4' | 'FreeForAll' | 'GTC'
    trackMedalsRequirement?: 0 | 1 | 2 | 3
    safetyRatingRequirement?: -1 | number
    racecraftRatingRequirement?: -1 | number
    password?: string
    spectatorPassword?: number
    maxCarClots: number
    dumpLeaderboards?: Bool
    dumpEntryList?: unknown
    isRaceLocked?: Bool
    shortFormationLap?: Bool
    formationLapType?: 0 | 1 | 3 | 4 | 5
    doDriverSwapBroadcast?: unknown
    randomizeTrackWhenEmpty?: Bool
    centralEntryListPath?: string
    allowAutoDQ?: Bool
    ignorePrematureDisconnects?: Bool
    configVersion: number
}
