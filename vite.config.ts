import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {obfuscator} from 'rollup-obfuscator';
// @ts-expect-error xxx
import {readableCssModules} from 'vite-plugin-readable-css-modules';
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    readableCssModules(),
    obfuscator({
      compact: true,
      target: 'browser',
      transform: 'base64',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        theme_color: '#242424',
      },
    }),
  ],
  build: {
    sourcemap: false,
    outDir: 'build',
  },
  base: '/kk/',
})
