import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: "/http_basic_react_exemple",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
