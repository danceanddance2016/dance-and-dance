// @ts-check
import { defineConfig } from 'astro/config';

import opacedevvisualEditor from '@opacedev/astro-visual-editor';

// https://astro.build/config
export default defineConfig({
  integrations: [opacedevvisualEditor()]
});