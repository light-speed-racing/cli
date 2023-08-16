import { Bool, Track } from './common.types'

export type Event = {
    track: Track
    eventType?: 'E_3h' | 'E_6h' | 'E_9h' | 'E_24h'
    sessions: Array<{
        hourOfDay: number
        dayOfWeekend: 1 | 2 | 3
        timeMultiplier?: number
        sessionType: 'P' | 'Q' | 'P'
        sessionDurationMinutes: number
    }>
    preRaceWaitingTimeSeconds?: number
    sessionOverTimeSeconds?: number
    ambientTemp?: number
    cloudLevel?: number
    rain?: number
    weatherRandomness?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
    postQualySeconds?: number
    postRaceSeconds?: number
    metaData?: string
    simracerWeatherConditions?: Bool
    isFixedConditionQualification?: Bool
}
