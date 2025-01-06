import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {obfuscator} from 'rollup-obfuscator';
// @ts-ignore
import {readableCssModules} from 'vite-plugin-readable-css-modules';

export default defineConfig({
  plugins: [
    react(),
    readableCssModules(),
    obfuscator({
      compact: true,
      target: 'browser',
      transform: 'base64',
    }),
  ],
  build: {
    sourcemap: false,
  },
})
