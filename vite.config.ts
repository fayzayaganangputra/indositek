import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/indositek/', // 👈 Wajib, biar asset gak error di GitHub Pages
})
