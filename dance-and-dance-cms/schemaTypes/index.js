// index.js - Molde EXACTO emparejado con las columnas de tu CSV de Wix

const albumType = {
  name: 'album',
  title: 'Álbum / Disco',
  type: 'document',
  fields: [
    {
      name: 'title', // Columna: "Title"
      title: 'Título del Álbum',
      type: 'string',
    },
    {
      name: 'slug', // Obligatorio en Sanity para crear tus nuevas URLs automáticas
      title: 'Slug (URL automática)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'fechaMostrar', // Columna: "Fecha Mostrar"
      title: 'Fecha Mostrar',
      type: 'string',
    },
    {
      name: 'description', // Columna: "Description"
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'image', // Columna: "Image" (Guarda la URL de la portada en Wix)
      title: 'URL de la Portada',
      type: 'string',
    },
    {
      name: 'imageAltText', // Columna: "Image Alt Text"
      title: 'Texto Alternativo de la Imagen (SEO)',
      type: 'string',
    },
    {
      name: 'genero', // Columna: "Género"
      title: 'Género',
      type: 'string',
    },
    {
      name: 'categoria', // Columna: "Categoría"
      title: 'Categoría',
      type: 'string',
    },
    {
      name: 'ano', // Columna: "Año"
      title: 'Año',
      type: 'string',
    },
    {
      name: 'fecha', // Columna: "Fecha"
      title: 'Fecha',
      type: 'string',
    },
    // 👇 ENLACES A PLATAFORMAS MUSICALES
    {
      name: 'linkSpotify', // Columna: "Link Spotify"
      title: 'Link Spotify',
      type: 'url',
    },
    {
      name: 'linkSpotifyCopia', // Columna: "Link Spotify copia"
      title: 'Link Spotify Copia',
      type: 'url',
    },
    {
      name: 'linkDeezer', // Columna: "Link Deezer"
      title: 'Link Deezer',
      type: 'url',
    },
    {
      name: 'linkYouTubeMusic', // Columna: "Link YouTube Music"
      title: 'Link YouTube Music',
      type: 'url',
    },
    {
      name: 'linkYouTubeVideo', // Columna: "Link YouTube Video"
      title: 'Link YouTube Video',
      type: 'url',
    },
    {
      name: 'linkSoundcloud', // Columna: "Link Soundcloud"
      title: 'Link Soundcloud',
      type: 'url',
    },
    // 👇 TU CONTENIDO PRINCIPAL Y TRACKLIST
    {
      name: 'tracklist', // Columna: "Tracklist" (Contiene las canciones en HTML)
      title: 'Tracklist (HTML)',
      type: 'text',
    },
    // 👇 TU BOTÓN DE RETORNO DE WIX
    {
      name: 'urL_Retorno', // Columna: "URL_Retorno"
      title: 'URL Retorno',
      type: 'string',
    },
    // 👇 SECCIONES AUXILIARES INTERNAS DE TU WIX (Por si tu CSV tiene datos ahí)
    { name: 'latestDoubleDash', title: 'Latest--', type: 'string' },
    { name: 'danceDanceItem', title: 'Dance&Dance (Item)', type: 'string' },
    { name: 'compilationDoubleDash', title: 'Compilation--', type: 'string' },
    { name: 'playlistDoubleDash', title: 'Playlist--', type: 'string' },
    { name: 'allDisco', title: 'All Disco', type: 'string' },
    { name: 'artistCompilationDoubleDash', title: 'Artist Compilation--', type: 'string' },
    { name: 'copia2DePlaylist1', title: 'Copia 2 de Playlist1', type: 'string' },
    { name: 'playlist', title: 'Playlist', type: 'string' },
    { name: 'compilation', title: 'Compilation', type: 'string' },
    { name: 'artistCompilation', title: 'Artist Compilation', type: 'string' },
    { name: 'latestMinus', title: 'Latest-', type: 'string' },
    { name: 'latest', title: 'Latest', type: 'string' },
    { name: 'plantillaCategoriasItem', title: 'Plantilla Categorias (Item)', type: 'string' },
    { name: 'copiaDePlantillaDiscos', title: 'Copia de Plantilla Discos', type: 'string' },
    { name: 'danceDanceList', title: 'Dance&Dance (List)', type: 'string' },
  ],
}

export const schemaTypes = [albumType]
