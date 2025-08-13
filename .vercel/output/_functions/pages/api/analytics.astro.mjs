export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  return new Response(JSON.stringify({
    success: true,
    message: "Analytics handled client-side only"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const GET = async ({ url }) => {
  return new Response(JSON.stringify({
    success: false,
    message: "Analytics reports not available - using client-side analytics only"
  }), {
    status: 501,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
