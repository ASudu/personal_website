// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')
const puppeteer = require('puppeteer')

class ModernPuppeteerRenderer {
  private browser: any
  private readonly renderAfterSelector?: string

  constructor(options: { renderAfterElementExists?: string } = {}) {
    this.browser = null
    this.renderAfterSelector = options.renderAfterElementExists
  }

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    })
  }

  async renderRoutes(routes: string[], prerenderer: any) {
    const { server } = prerenderer.getOptions()
    const host = `http://127.0.0.1:${server.port}`
    const renderedRoutes = []

    for (const route of routes) {
      const page = await this.browser.newPage()

      await page.goto(`${host}${route}`, {
        waitUntil: 'networkidle0',
      })

      if (this.renderAfterSelector) {
        await page.waitForSelector(this.renderAfterSelector, { timeout: 15000 })
      }

      const html = await page.content()
      renderedRoutes.push({
        route,
        originalRoute: route,
        html,
      })

      await page.close()
    }

    return renderedRoutes
  }

  async destroy() {
    if (this.browser) {
      await this.browser.close()
      this.browser = null
    }
  }
}

const prerenderRenderer = new ModernPuppeteerRenderer({
  renderAfterElementExists: '.page-content.active',
})

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: ['/', '/blog', '/fun-corner', '/projects', '/experience', '/thank-you'],
      renderer: prerenderRenderer,
    }),
  ],
  server: {
    port: 5173, // or your preferred port
  },
})