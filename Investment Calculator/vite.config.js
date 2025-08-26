import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ensures assets resolve correctly on Vercel
  build: {
    outDir: 'dist', // Vercel looks for 'dist'
  },
  server: {
    port: 3000,
    open: true,
  },
})
