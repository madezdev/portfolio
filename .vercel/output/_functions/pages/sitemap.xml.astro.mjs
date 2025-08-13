export { renderers } from '../renderers.mjs';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://tu-portfolio.vercel.app/</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="https://tu-portfolio.vercel.app/?lang=es" />
    <xhtml:link rel="alternate" hreflang="en" href="https://tu-portfolio.vercel.app/?lang=en" />
  </url>
  <url>
    <loc>https://tu-portfolio.vercel.app/#sobre-mi</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tu-portfolio.vercel.app/#servicios</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tu-portfolio.vercel.app/#habilidades</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://tu-portfolio.vercel.app/#contacto</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`.trim();
const GET = () => {
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400"
      // 24 hours
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=sitemap.xml.astro.mjs.map
