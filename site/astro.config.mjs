// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH is set to "/<repo>" by the GitHub Pages workflow; defaults to "/"
// for local dev and preview.
// https://astro.build/config
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
