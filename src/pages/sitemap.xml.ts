import type { APIRoute } from 'astro';
import Papa from 'papaparse';
import csvRaw from '../data/Dance&Dance.csv?raw';

// Función slugify idéntica a la de tus plantillas
function slugify(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/ñ/g, "n")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const GET: APIRoute = async ({ site }) => {
  // URL base de tu web (se configura automáticamente desde astro.config.mjs)
  const siteUrl = site ? site.href.replace(/\/$/, '') : 'https://tudominio.com';

  // 1. Parsear el CSV
  const parsedData = Papa.parse(csvRaw, { header: true, skipEmptyLines: true });
  const rawAlbums = parsedData.data as any[];

  // 2. Filtrar álbumes publicados y limpiar duplicados por título
  const valid = rawAlbums.filter(a => a && a.Title && a.Status === "PUBLISHED");
  const uniqueAlbums = valid.filter((a, i, s) => i === s.findIndex((t) => t.Title === a.Title));

  // 3. Definir las rutas estáticas principales de tu web
  const staticPages = [
    '',
    '/all-albums',
    '/compilations',
    '/playlists',
    '/artist-compilations'
  ];

  // 4. Generar las URLs dinámicas de los discos según su categoría
  const albumUrls = uniqueAlbums.map(album => {
    const slug = slugify(album.Title);
    let prefix = '';
    
    if (album.Categoría === 'Compilation') prefix = '/compilations';
    else if (album.Categoría === 'Playlist') prefix = '/playlists';
    else if (album.Categoría === 'Artist') prefix = '/artist-compilations';

    return `${prefix}/${slug}`;
  });

  // 5. Unir todo en una lista única de URLs
  const allUrls = [...staticPages, ...albumUrls];

  // 6. Construir la estructura del XML
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      url => `
  <url>
    <loc>${siteUrl}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemapXML, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};