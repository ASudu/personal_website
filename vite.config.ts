// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')
const PuppeteerRenderer = vitePrerender.PuppeteerRenderer

const prerenderRenderer = new PuppeteerRenderer({ headless: true })

if (typeof prerenderRenderer.destroy !== 'function') {
  prerenderRenderer.destroy = () => Promise.resolve()
}

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