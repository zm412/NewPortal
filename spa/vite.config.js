import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
  },
  base: '/spa_static/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
