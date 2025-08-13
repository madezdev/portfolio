import { e as createComponent, k as renderHead, l as renderScript, r as renderTemplate } from '../chunks/astro/server_BlDKbZuv.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                               */
export { renderers } from '../renderers.mjs';

const $$AnalyticsDashboard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-zw5ppcgk> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Analytics Dashboard - Portfolio Martin</title>${renderHead()}</head> <body data-astro-cid-zw5ppcgk> <div class="container" data-astro-cid-zw5ppcgk> <div class="header" data-astro-cid-zw5ppcgk> <h1 data-astro-cid-zw5ppcgk>📊 Analytics Dashboard</h1> <p data-astro-cid-zw5ppcgk>Informe de interacciones del portfolio</p> <button class="refresh-btn" onclick="loadAnalytics()" data-astro-cid-zw5ppcgk>🔄 Actualizar</button> </div> <div id="loading" class="loading" data-astro-cid-zw5ppcgk>
Cargando datos de analytics...
</div> <div id="error" class="error" style="display: none;" data-astro-cid-zw5ppcgk></div> <div id="dashboard" style="display: none;" data-astro-cid-zw5ppcgk> <!-- Basic Stats --> <div class="stats-grid" data-astro-cid-zw5ppcgk> <div class="stat-card" data-astro-cid-zw5ppcgk> <div class="stat-value" id="totalVisitors" data-astro-cid-zw5ppcgk>-</div> <div class="stat-label" data-astro-cid-zw5ppcgk>Visitantes Únicos (7 días)</div> </div> <div class="stat-card" data-astro-cid-zw5ppcgk> <div class="stat-value" id="totalPageViews" data-astro-cid-zw5ppcgk>-</div> <div class="stat-label" data-astro-cid-zw5ppcgk>Vistas de Página</div> </div> <div class="stat-card" data-astro-cid-zw5ppcgk> <div class="stat-value" id="totalInteractions" data-astro-cid-zw5ppcgk>-</div> <div class="stat-label" data-astro-cid-zw5ppcgk>Interacciones</div> </div> <div class="stat-card" data-astro-cid-zw5ppcgk> <div class="stat-value" id="avgSessionDuration" data-astro-cid-zw5ppcgk>-</div> <div class="stat-label" data-astro-cid-zw5ppcgk>Duración Promedio (seg)</div> </div> </div> <!-- Language Distribution --> <div class="chart-container" data-astro-cid-zw5ppcgk> <h3 data-astro-cid-zw5ppcgk>📊 Distribución de Idiomas</h3> <div id="languageStats" data-astro-cid-zw5ppcgk></div> </div> <!-- Most Viewed Sections --> <div class="chart-container" data-astro-cid-zw5ppcgk> <h3 data-astro-cid-zw5ppcgk>👀 Secciones Más Visitadas</h3> <table class="table" data-astro-cid-zw5ppcgk> <thead data-astro-cid-zw5ppcgk> <tr data-astro-cid-zw5ppcgk> <th data-astro-cid-zw5ppcgk>Sección</th> <th data-astro-cid-zw5ppcgk>Visualizaciones</th> <th data-astro-cid-zw5ppcgk>%</th> </tr> </thead> <tbody id="sectionsTable" data-astro-cid-zw5ppcgk></tbody> </table> </div> <!-- Daily Stats --> <div class="chart-container" data-astro-cid-zw5ppcgk> <h3 data-astro-cid-zw5ppcgk>📈 Estadísticas Diarias</h3> <table class="table" data-astro-cid-zw5ppcgk> <thead data-astro-cid-zw5ppcgk> <tr data-astro-cid-zw5ppcgk> <th data-astro-cid-zw5ppcgk>Fecha</th> <th data-astro-cid-zw5ppcgk>Visitantes</th> <th data-astro-cid-zw5ppcgk>Vistas</th> <th data-astro-cid-zw5ppcgk>Interacciones</th> </tr> </thead> <tbody id="dailyTable" data-astro-cid-zw5ppcgk></tbody> </table> </div> <!-- Device Stats --> <div class="chart-container" data-astro-cid-zw5ppcgk> <h3 data-astro-cid-zw5ppcgk>📱 Estadísticas de Dispositivos</h3> <div id="deviceStats" data-astro-cid-zw5ppcgk></div> </div> <!-- Top Referrers --> <div class="chart-container" data-astro-cid-zw5ppcgk> <h3 data-astro-cid-zw5ppcgk>🔗 Principales Referentes</h3> <table class="table" data-astro-cid-zw5ppcgk> <thead data-astro-cid-zw5ppcgk> <tr data-astro-cid-zw5ppcgk> <th data-astro-cid-zw5ppcgk>Referente</th> <th data-astro-cid-zw5ppcgk>Visitas</th> </tr> </thead> <tbody id="referrersTable" data-astro-cid-zw5ppcgk></tbody> </table> </div> </div> </div> ${renderScript($$result, "/Users/madez/Documents/Apps/portfolio/src/pages/analytics-dashboard.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/madez/Documents/Apps/portfolio/src/pages/analytics-dashboard.astro", void 0);

const $$file = "/Users/madez/Documents/Apps/portfolio/src/pages/analytics-dashboard.astro";
const $$url = "/analytics-dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AnalyticsDashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
