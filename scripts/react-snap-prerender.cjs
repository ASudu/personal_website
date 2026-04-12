const fs = require('fs')
const path = require('path')
const { run } = require('react-snap')

const packageJson = require(path.join(__dirname, '..', 'package.json'))

const uniq = (arr) => Array.from(new Set(arr))

async function main() {
  const options = { ...(packageJson.reactSnap || {}) }

  if (process.env.VERCEL) {
    const chromium = require('@sparticuz/chromium')
    const executablePath = await chromium.executablePath()

    options.puppeteerExecutablePath = executablePath
    options.puppeteerArgs = uniq([
      ...(options.puppeteerArgs || []),
      ...(chromium.args || []),
    ])
    options.headless = true
  }

  await run(options, { fs })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
