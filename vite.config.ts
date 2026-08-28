import { defineConfig } from 'vite'
import { react } from '@react-vite-plugin'
import { usePath } from '@shogo-ai/sdk/bin/vite-plugin'
import { options } from 'vite-plugin-tsconfig-paths'

export defineConfig({
  plugins: [react(), usePath(), options()],
  resolve: {
    '@': wpath, },
  })