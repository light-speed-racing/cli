import { AssistRules } from './acc.assist-rules'
import { Bop } from './acc.bop'
import { Configuration } from './acc.configuration'
import { Entrylist } from './acc.entrylist'
import { Event } from './acc.event'
import { EventRules } from './acc.event-rules'
import { Settings } from './acc.settings'

export type ConfigurationFiles = {
    configuration: Configuration
    assistRules: AssistRules
    settings: Settings
    entrylist: Entrylist
    event: Event
    eventRules: EventRules
    bop: Bop
}
