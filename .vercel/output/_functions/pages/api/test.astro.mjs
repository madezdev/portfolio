export { renderers } from '../../renderers.mjs';

const GET = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "API is working!",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    return new Response(
      JSON.stringify({
        success: true,
        message: "POST received successfully",
        receivedData: data,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=test.astro.mjs.map
