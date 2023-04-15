import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://basement-ujk.github.io/quiz-app",
  plugins: [react()],
})
