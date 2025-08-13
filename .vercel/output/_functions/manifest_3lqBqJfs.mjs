import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_BlDKbZuv.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BmTJXW_d.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/madez/Documents/Apps/portfolio/","cacheDir":"file:///Users/madez/Documents/Apps/portfolio/node_modules/.astro/","outDir":"file:///Users/madez/Documents/Apps/portfolio/dist/","srcDir":"file:///Users/madez/Documents/Apps/portfolio/src/","publicDir":"file:///Users/madez/Documents/Apps/portfolio/public/","buildClientDir":"file:///Users/madez/Documents/Apps/portfolio/dist/client/","buildServerDir":"file:///Users/madez/Documents/Apps/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;margin:0;padding:20px;background:#0f172a;color:#e2e8f0}.container[data-astro-cid-zw5ppcgk]{max-width:1200px;margin:0 auto}.header[data-astro-cid-zw5ppcgk]{margin-bottom:30px}.stats-grid[data-astro-cid-zw5ppcgk]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:30px}.stat-card[data-astro-cid-zw5ppcgk]{background:#1e293b;padding:20px;border-radius:8px;border:1px solid #334155}.stat-value[data-astro-cid-zw5ppcgk]{font-size:2rem;font-weight:700;color:#3b82f6}.stat-label[data-astro-cid-zw5ppcgk]{color:#94a3b8;margin-top:5px}.chart-container[data-astro-cid-zw5ppcgk]{background:#1e293b;padding:20px;border-radius:8px;border:1px solid #334155;margin-bottom:20px}.table[data-astro-cid-zw5ppcgk]{width:100%;border-collapse:collapse}.table[data-astro-cid-zw5ppcgk] th[data-astro-cid-zw5ppcgk],.table[data-astro-cid-zw5ppcgk] td[data-astro-cid-zw5ppcgk]{text-align:left;padding:12px;border-bottom:1px solid #334155}.table[data-astro-cid-zw5ppcgk] th[data-astro-cid-zw5ppcgk]{color:#cbd5e1;font-weight:600}.loading[data-astro-cid-zw5ppcgk]{text-align:center;color:#94a3b8;padding:40px}.error[data-astro-cid-zw5ppcgk]{color:#ef4444;padding:20px;background:#7f1d1d;border-radius:8px;margin-bottom:20px}.refresh-btn[data-astro-cid-zw5ppcgk]{background:#3b82f6;color:#fff;border:none;padding:10px 20px;border-radius:6px;cursor:pointer;margin-left:10px}.refresh-btn[data-astro-cid-zw5ppcgk]:hover{background:#2563eb}\n"}],"routeData":{"route":"/analytics-dashboard","isIndex":false,"type":"page","pattern":"^\\/analytics-dashboard\\/?$","segments":[[{"content":"analytics-dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics-dashboard.astro","pathname":"/analytics-dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/analytics","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/analytics\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"analytics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/analytics.ts","pathname":"/api/analytics","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.ts","pathname":"/sitemap.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.BUdfz9Y7.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/madez/Documents/Apps/portfolio/src/pages/analytics-dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/madez/Documents/Apps/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/analytics-dashboard@_@astro":"pages/analytics-dashboard.astro.mjs","\u0000@astro-page:src/pages/api/analytics@_@ts":"pages/api/analytics.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@ts":"pages/sitemap.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_3lqBqJfs.mjs","/Users/madez/Documents/Apps/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CtwYKrDg.mjs","/Users/madez/Documents/Apps/portfolio/src/components/Navigation.tsx":"_astro/Navigation.DBZPpyPP.js","/Users/madez/Documents/Apps/portfolio/src/components/Hero.tsx":"_astro/Hero.CDNhgYkh.js","/Users/madez/Documents/Apps/portfolio/src/components/About.tsx":"_astro/About.DMPKnth5.js","/Users/madez/Documents/Apps/portfolio/src/components/Services.tsx":"_astro/Services.Va9V5fGi.js","/Users/madez/Documents/Apps/portfolio/src/components/TeamWork.tsx":"_astro/TeamWork.Da5VD7eE.js","/Users/madez/Documents/Apps/portfolio/src/components/Skills.tsx":"_astro/Skills.HC23Corq.js","/Users/madez/Documents/Apps/portfolio/src/components/Contact.tsx":"_astro/Contact.Cu7p1dWz.js","/Users/madez/Documents/Apps/portfolio/src/components/Footer.tsx":"_astro/Footer.DildaCk5.js","/Users/madez/Documents/Apps/portfolio/src/components/CookieConsent.tsx":"_astro/CookieConsent.e1Q6IMdh.js","/Users/madez/Documents/Apps/portfolio/src/components/AnalyticsTracker.tsx":"_astro/AnalyticsTracker.CCP1Gu1k.js","@astrojs/react/client.js":"_astro/client.DVxemvf8.js","/Users/madez/Documents/Apps/portfolio/src/pages/analytics-dashboard.astro?astro&type=script&index=0&lang.ts":"_astro/analytics-dashboard.astro_astro_type_script_index_0_lang.11r0Ccnz.js","/Users/madez/Documents/Apps/portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.GIJrQssK.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/madez/Documents/Apps/portfolio/src/pages/analytics-dashboard.astro?astro&type=script&index=0&lang.ts","async function a(){const t=document.getElementById(\"loading\"),s=document.getElementById(\"error\"),i=document.getElementById(\"dashboard\");t.style.display=\"block\",s.style.display=\"none\",i.style.display=\"none\";try{const n=await fetch(\"/api/analytics?report=weekly\");if(!n.ok)throw new Error(\"Failed to fetch analytics\");const r=await n.json();c(r),t.style.display=\"none\",i.style.display=\"block\"}catch(n){t.style.display=\"none\",s.style.display=\"block\",s.textContent=\"Error al cargar los datos: \"+n.message}}function c(t){document.getElementById(\"totalVisitors\").textContent=t.summary.totalVisitors,document.getElementById(\"totalPageViews\").textContent=t.summary.totalPageViews,document.getElementById(\"totalInteractions\").textContent=t.summary.totalInteractions,document.getElementById(\"avgSessionDuration\").textContent=t.summary.averageSessionDuration;const s=t.summary.languageDistribution.es+t.summary.languageDistribution.en,i=document.getElementById(\"languageStats\");i.innerHTML=`\n                <div style=\"margin: 10px 0;\">\n                    🇪🇸 Español: ${t.summary.languageDistribution.es} (${s>0?Math.round(t.summary.languageDistribution.es/s*100):0}%)\n                </div>\n                <div style=\"margin: 10px 0;\">\n                    🇺🇸 English: ${t.summary.languageDistribution.en} (${s>0?Math.round(t.summary.languageDistribution.en/s*100):0}%)\n                </div>\n            `;const n=document.getElementById(\"sectionsTable\"),r=t.summary.mostViewedSections.reduce((e,y)=>e+y.views,0);n.innerHTML=t.summary.mostViewedSections.map(e=>`\n                <tr>\n                    <td>${e.section}</td>\n                    <td>${e.views}</td>\n                    <td>${r>0?Math.round(e.views/r*100):0}%</td>\n                </tr>\n            `).join(\"\");const l=document.getElementById(\"dailyTable\");l.innerHTML=t.dailyStats.map(e=>`\n                <tr>\n                    <td>${e.date}</td>\n                    <td>${e.visitors}</td>\n                    <td>${e.pageViews}</td>\n                    <td>${e.interactions}</td>\n                </tr>\n            `).join(\"\");const m=document.getElementById(\"deviceStats\"),o=t.summary.deviceStats.desktop+t.summary.deviceStats.tablet+t.summary.deviceStats.mobile;m.innerHTML=`\n                <div style=\"margin: 10px 0;\">\n                    🖥️ Desktop: ${t.summary.deviceStats.desktop} (${o>0?Math.round(t.summary.deviceStats.desktop/o*100):0}%)\n                </div>\n                <div style=\"margin: 10px 0;\">\n                    📱 Tablet: ${t.summary.deviceStats.tablet} (${o>0?Math.round(t.summary.deviceStats.tablet/o*100):0}%)\n                </div>\n                <div style=\"margin: 10px 0;\">\n                    📞 Mobile: ${t.summary.deviceStats.mobile} (${o>0?Math.round(t.summary.deviceStats.mobile/o*100):0}%)\n                </div>\n            `;const d=document.getElementById(\"referrersTable\");d.innerHTML=t.summary.topReferrers.length>0?t.summary.topReferrers.map(e=>`\n                    <tr>\n                        <td>${e.referrer}</td>\n                        <td>${e.visits}</td>\n                    </tr>\n                `).join(\"\"):'<tr><td colspan=\"2\">No hay datos de referentes</td></tr>'}a();setInterval(a,300*1e3);"]],"assets":["/_astro/index.BUdfz9Y7.css","/404.html","/favicon.svg","/index.html","/manifest.json","/robots.txt","/_astro/About.DMPKnth5.js","/_astro/AnalyticsTracker.CCP1Gu1k.js","/_astro/Contact.Cu7p1dWz.js","/_astro/CookieConsent.e1Q6IMdh.js","/_astro/Footer.DildaCk5.js","/_astro/Hero.CDNhgYkh.js","/_astro/Layout.astro_astro_type_script_index_0_lang.GIJrQssK.js","/_astro/Navigation.DBZPpyPP.js","/_astro/Services.Va9V5fGi.js","/_astro/Skills.HC23Corq.js","/_astro/TeamWork.Da5VD7eE.js","/_astro/client.DVxemvf8.js","/_astro/hooks.CQCuG47S.js","/_astro/index.RH_Wq4ov.js","/_astro/index.oU9ow8B_.js","/_astro/store.BNibPgoY.js","/_astro/store.BxErYl_R.js","/_astro/utils.DnNQ0deB.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"FiQuYy3yMPWgEnxpvXvRm9szNCmJc5Gu53Ae1Vk8jNU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
