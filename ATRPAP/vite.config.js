import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const mode = process.env.VITE_MODE || 'public'

const configs = {
  public: {
    root: 'src/sites/public',
    build: {
      outDir: '../../dist/public',
      emptyOutDir: true,
    },
    server: {
      port: 3000,
    },
  },
  cms: {
    root: 'src/sites/cms',
    build: {
      outDir: '../../dist/cms',
      emptyOutDir: true,
    },
    server: {
      port: 3001,
    },
  },
}

const config = configs[mode] || configs.public

export default defineConfig({
  plugins: [react()],
  root: config.root,
  build: config.build,
  server: config.server,
})
