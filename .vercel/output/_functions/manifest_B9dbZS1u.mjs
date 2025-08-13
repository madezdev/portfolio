import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_sCFFrYxE.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BNo_RIdA.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/madez/Documents/Apps/portfolio/","cacheDir":"file:///Users/madez/Documents/Apps/portfolio/node_modules/.astro/","outDir":"file:///Users/madez/Documents/Apps/portfolio/dist/","srcDir":"file:///Users/madez/Documents/Apps/portfolio/src/","publicDir":"file:///Users/madez/Documents/Apps/portfolio/public/","buildClientDir":"file:///Users/madez/Documents/Apps/portfolio/dist/client/","buildServerDir":"file:///Users/madez/Documents/Apps/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/test","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/test\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test.ts","pathname":"/api/test","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/sitemap.xml","isIndex":false,"type":"endpoint","pattern":"^\\/sitemap\\.xml\\/?$","segments":[[{"content":"sitemap.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sitemap.xml.ts","pathname":"/sitemap.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.madez.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/madez/Documents/Apps/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/api/test@_@ts":"pages/api/test.astro.mjs","\u0000@astro-page:src/pages/sitemap.xml@_@ts":"pages/sitemap.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B9dbZS1u.mjs","/Users/madez/Documents/Apps/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DMCfVlai.mjs","/Users/madez/Documents/Apps/portfolio/src/components/Navigation.tsx":"_astro/Navigation.Cle1uWzY.js","/Users/madez/Documents/Apps/portfolio/src/components/Hero.tsx":"_astro/Hero.BsB7-Bhw.js","/Users/madez/Documents/Apps/portfolio/src/components/About.tsx":"_astro/About.Brep1p9o.js","/Users/madez/Documents/Apps/portfolio/src/components/Services.tsx":"_astro/Services.DhDdM0zK.js","/Users/madez/Documents/Apps/portfolio/src/components/TeamWork.tsx":"_astro/TeamWork.Ex_DIaEP.js","/Users/madez/Documents/Apps/portfolio/src/components/Skills.tsx":"_astro/Skills.BXskD5dB.js","/Users/madez/Documents/Apps/portfolio/src/components/Contact.tsx":"_astro/Contact.CGgxxB0j.js","/Users/madez/Documents/Apps/portfolio/src/components/Footer.tsx":"_astro/Footer.YxIYsl2I.js","@astrojs/react/client.js":"_astro/client.D2WMwoKK.js","/Users/madez/Documents/Apps/portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.9WzdYH9d.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.dQvlNUsE.css","/chunks/astro_DEQiumLX.mjs.map","/chunks/astro/server_sCFFrYxE.mjs.map","/chunks/generic_DwuqZlsG.mjs.map","/manifest_B9dbZS1u.mjs.map","/chunks/_@astrojs-ssr-adapter_CwCU4FB-.mjs.map","/chunks/astro-designed-error-pages_BNo_RIdA.mjs.map","/chunks/index_CVC0tT_4.mjs.map","/chunks/sharp_DMCfVlai.mjs.map","/_noop-middleware.mjs.map","/_noop-actions.mjs.map","/pages/api/contact.astro.mjs.map","/pages/api/test.astro.mjs.map","/pages/sitemap.xml.astro.mjs.map","/pages/index.astro.mjs.map","/entry.mjs.map","/renderers.mjs.map","/pages/_image.astro.mjs.map","/_@astrojs-ssr-adapter.mjs.map","/favicon.svg","/manifest.json","/robots.txt","/_astro/About.Brep1p9o.js","/_astro/About.Brep1p9o.js.map","/_astro/Contact.CGgxxB0j.js","/_astro/Contact.CGgxxB0j.js.map","/_astro/Footer.YxIYsl2I.js","/_astro/Footer.YxIYsl2I.js.map","/_astro/Hero.BsB7-Bhw.js","/_astro/Hero.BsB7-Bhw.js.map","/_astro/Layout.astro_astro_type_script_index_0_lang.9WzdYH9d.js","/_astro/Layout.astro_astro_type_script_index_0_lang.9WzdYH9d.js.map","/_astro/Navigation.Cle1uWzY.js","/_astro/Navigation.Cle1uWzY.js.map","/_astro/Services.DhDdM0zK.js","/_astro/Services.DhDdM0zK.js.map","/_astro/Skills.BXskD5dB.js","/_astro/Skills.BXskD5dB.js.map","/_astro/TeamWork.Ex_DIaEP.js","/_astro/TeamWork.Ex_DIaEP.js.map","/_astro/client.D2WMwoKK.js","/_astro/client.D2WMwoKK.js.map","/_astro/index.RH_Wq4ov.js","/_astro/index.RH_Wq4ov.js.map","/_astro/store.BhlS2G8b.js","/_astro/store.BhlS2G8b.js.map","/_astro/utils.brVpvMic.js","/_astro/utils.brVpvMic.js.map","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"LWN69+sC+F4b3yH2r/H2Lgo8920zorfD0KTbM5nE54U="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
//# sourceMappingURL=manifest_B9dbZS1u.mjs.map
