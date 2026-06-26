// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH is set to "/<repo>" by the GitHub Pages workflow; defaults to "/"
// for local dev and preview. Force a trailing slash so import.meta.env.BASE_URL
// concatenates cleanly with route paths (e.g. `${base}kata/<slug>/`).
const base = process.env.BASE_PATH || '/';
// https://astro.build/config
export default defineConfig({
  base: base.endsWith('/') ? base : base + '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
