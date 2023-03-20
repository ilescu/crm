import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  server: {
    port: 4000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'images/[name].[ext]',
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    devSourcemap: false,
  },
})
