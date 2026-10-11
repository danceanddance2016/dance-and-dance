import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dance-and-dance-cms',

  projectId: 'jvzifb8z', // Tu ID de proyecto
  dataset: 'production',

  // 👇 Dejamos solo la herramienta básica de estructura, quitando el CSV Import
  plugins: [
    structureTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
