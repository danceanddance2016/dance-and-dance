import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // <-- ESTO ES LO IMPORTANTE: cambia SSG por SSR
  adapter: vercel(),
});
