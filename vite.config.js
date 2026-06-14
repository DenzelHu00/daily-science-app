import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so the build works on any static host
  // (GitHub Pages project sites, Netlify, S3 subfolders, etc.)
  base: './',
})
