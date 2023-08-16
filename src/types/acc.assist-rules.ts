import { Bool } from './common.types'

export type AssistRules = {
    stabilityControlLevelMax: number
    disableAutosteer: Bool
    disableIdealLine: Bool
    disableAutoPitLimiter: Bool
    disableAutoGear: Bool
    disableAutoClutch: Bool
    disableAutoEngineStart: Bool
    disableAutoWiper: Bool
    disableAutoLights: Bool
}
