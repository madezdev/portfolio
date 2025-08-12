import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B4mUhkRW.mjs';
import { manifest } from './manifest_DjKezUxe.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/analytics-dashboard.astro.mjs');
const _page2 = () => import('./pages/api/analytics.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/sitemap.xml.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/analytics-dashboard.astro", _page1],
    ["src/pages/api/analytics.ts", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/sitemap.xml.ts", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bbf400a7-b023-4053-af23-2cc6a42230e2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
