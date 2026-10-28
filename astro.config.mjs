// @ts-check
import { defineConfig } from 'astro/config';
import opacedevvisualEditor from '@opacedev/astro-visual-editor';
import vercel from '@astrojs/vercel'; // 1. Importa el adaptador de Vercel

// https://astro.build/config
export default defineConfig({
  site: 'https://danceanddance.vercel.app', // 👈 Tu URL de Vercel configurada
  output: 'server', // 2. Activa el modo dinámico SSR
  adapter: vercel(), // 3. Configura el adaptador
  integrations: [opacedevvisualEditor()]
});
