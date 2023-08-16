import { Bool } from './common.types'

export type EventRules = {
    qualifyStandingType?: 1 | 2
    superpoleMaxCar?: unknown
    pitWindowLengthSec?: number
    isRefuellingAllowedInRace?: number
    isRefuellingTimeFixed?: boolean
    mandatoryPitstopCount?: boolean
    maxTotalDrivingTime?: number
    maxDriversCount?: number
    isMandatoryPitstopRefuellingRequired?: Bool
    isMandatoryPitstopTyreChangeRequired?: Bool
    isMandatoryPitstopSwapDriverRequired?: Bool
    tyreSetCount?: number
}
