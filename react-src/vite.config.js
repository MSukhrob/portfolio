import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The built site is written to the repo root so GitHub Pages (main, /root) serves it.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: '..', emptyOutDir: false },
})
