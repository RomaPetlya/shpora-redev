import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/shpora-redev/",
=======
  base: '/shpora-redev/',
>>>>>>> fd725f76559272a2d28a6bb71fb896dcad719100
  build: {
    outDir: 'dist'
  }
})
