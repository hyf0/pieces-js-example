import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePlugin } from '@pieces-js/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePlugin(), react(), ],
})
