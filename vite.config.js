import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/saving-kidneys/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
