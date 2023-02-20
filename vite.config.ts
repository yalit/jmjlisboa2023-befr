import { defineConfig } from 'vite'
import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from './postcss.config.cjs';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        quoi: resolve(__dirname, 'cestquoi.html'),
        proposal: resolve(__dirname, 'proposal.html'),
        c4y: resolve(__dirname, 'c4y.html'),
        faq: resolve(__dirname, 'faq.html'),
      },
    },
  },
  base: './',
  plugins: [svelte()],
  css:{
    postcss
  }
})
