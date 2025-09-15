import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // penting biar path asset relatif (tidak blank putih di hosting)
  build: {
    outDir: 'dist',
  },
})
