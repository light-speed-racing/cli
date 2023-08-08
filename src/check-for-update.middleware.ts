import check, { Result as UpdateResult } from 'update-check'
import chalk from 'chalk'
import { join } from 'path'

export const checkForUpdate = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pkg = JSON.parse(JSON.stringify(require(join(__dirname, 'package.json')))) ?? false
  const update: UpdateResult | null = await check(pkg)

  if (!update) {
    return
  }

  const message = [
    '',
    '🔥🔥🔥 A new version is available! 🔥🔥🔥',
    '',
    'You are running an outdated version.',
    `You are currently running v${pkg.version}. v${update?.latest} is available`,
    '',
    'To update run:',
    chalk.bold(chalk.underline(`yarn global add ${pkg.name}`)),
    '',
    '🙌 Please Update!',
    ''
  ].join('\n')

  console.log(chalk.yellow(message))
}
