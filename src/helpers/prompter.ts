import chalk from 'chalk'
import Mutestream from 'mute-stream'
import { createInterface } from 'readline'
import { Disposable } from './disposable'

export const Prompter = (muted = false) => {
  const output = new Mutestream()
  const rl = createInterface({
    input: process.stdin,
    output,
    terminal: true
  })

  output.pipe(process.stdout)

  return Disposable(
    async (question: string, defaultTo?: string) => {
      let answer = '' as string | undefined

      const query = defaultTo
        ? `${question}\n${chalk.gray(`(${defaultTo} [ENTER to use default value])`)}\n`
        : `${question}:`

      while (!answer) {
        const question = new Promise<string>(resolve => rl.question(query, resolve))

        if (muted) {
          output.mute()
        }

        answer = await question || defaultTo

        if (muted) {
          console.log() // enter was not sent by input when muted
          output.unmute()
        }
      }
      return answer
    },
    () => rl.close()
  )
}
