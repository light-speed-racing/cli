/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios')
const { compile } = require('json-schema-to-typescript')
const { writeFileSync } = require('fs')
const { join } = require('path')

const main = async () => {
  const { data } = await axios.get('https://raw.githubusercontent.com/light-speed-racing/ogp-server-config/master/.schema.json')
  const server = await compile(data, 'OGPServerConfig')

  writeFileSync(join(__dirname, '..', 'src', 'server.ts'), server, { encoding: 'utf-8' })
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
