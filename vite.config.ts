import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/radiant-dev-display/', // Add this line - must match your repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})