import * as fs from 'fs';
import * as path from 'path';

const domain = 'https://www.manosdecapa.es';

// Define todas las rutas estáticas del sitio
const routes = [
  '',
  '/servicios/',
  '/proceso/',
  '/testimonios/',
  '/ubicacion/',
  '/aviso-legal/',
  '/politica-cookies/',
  '/politica-privacidad/',
];

function generateSitemap(): void {
  const sitemapEntries = routes.map((route) => {
    const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const priority = route === '' ? '1.0' : '0.8';

    return `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;

  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

  // Crear carpeta public si no existe
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }

  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generado en: ${outputPath}`);
}

generateSitemap();
