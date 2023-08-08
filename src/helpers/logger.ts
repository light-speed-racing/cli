import moment from 'moment'

type LogFn = (message: unknown, ...args: unknown[]) => void;

export interface ILogger {
  debug: LogFn;
  success: LogFn;
  info: LogFn;
  error: LogFn;
}

export class Logger implements ILogger {
  constructor (private readonly context: string) {}

    info = (message?: unknown, ...args: unknown[]) => console.info(this.message(message, args))

    debug = (message?: unknown, ...args: unknown[]) => console.debug(this.message(message, args))

    success = (message?: unknown, ...args: unknown[]) => console.log(this.message(message, args))

    error = (message?: unknown, ...args: unknown[]) => console.error(this.message(message, args))

    private message = (message?: unknown, ...args: unknown[]) => `${moment().format('HH:MM:ss')} [${this.context}]: ${message} ${args}`
}
