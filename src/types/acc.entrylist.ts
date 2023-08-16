import { Bool, DriverCategory } from './common.types'

export type Entrylist = {
    entries: Array<{
        drivers: Array<{
            playerID: string
            driverCategory: DriverCategory
            shortName: string
            firsttName: string
            lasttName: string
        }>
        raceNumber: number
        forcedCarModel: -1 | number
        overrideDriverInfo: Bool
        isServerAdmin: Bool
        ballastKg?: number
        restrictor?: number
        defaultGridPosition?: number
    }>
    forceEntryList: Bool
}
