import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://danceanddance.vercel.app', // <-- Añades esta línea aquí para el SEO
  output: 'server', // <-- ESTO ES LO IMPORTANTE: cambia SSG por SSR
  adapter: vercel(),
});
