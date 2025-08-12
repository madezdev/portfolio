export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { events } = await request.json();
    if (!events || !Array.isArray(events)) {
      return new Response(JSON.stringify({
        success: false,
        message: "Invalid events data"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("📊 Analytics events received:", events.length);
    events.forEach((event) => {
      console.log(`[${event.type}] ${event.data?.section || "general"}:`, event.data);
    });
    return new Response(JSON.stringify({
      success: true,
      message: "Events logged successfully",
      count: events.length
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Analytics storage error:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Failed to store analytics events"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const GET = async ({ url }) => {
  try {
    const params = new URLSearchParams(url.search);
    const reportType = params.get("report");
    if (reportType === "weekly") {
      const report = {
        period: {
          start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0],
          end: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        },
        summary: {
          totalVisitors: 42,
          totalPageViews: 189,
          totalInteractions: 67,
          averageSessionDuration: 245,
          bounceRate: 35,
          mostViewedSections: [
            { section: "hero", views: 95 },
            { section: "about", views: 78 },
            { section: "services", views: 67 },
            { section: "skills", views: 56 },
            { section: "contact", views: 45 }
          ],
          languageDistribution: {
            es: 65,
            en: 35
          },
          topReferrers: [
            { referrer: "google.com", visits: 30 },
            { referrer: "linkedin.com", visits: 15 },
            { referrer: "github.com", visits: 10 }
          ],
          deviceStats: {
            desktop: 60,
            tablet: 5,
            mobile: 35
          }
        },
        dailyStats: [
          { date: "2025-01-06", visitors: 8, pageViews: 28, interactions: 12 },
          { date: "2025-01-07", visitors: 9, pageViews: 35, interactions: 15 },
          { date: "2025-01-08", visitors: 12, pageViews: 42, interactions: 18 },
          { date: "2025-01-09", visitors: 10, pageViews: 38, interactions: 14 },
          { date: "2025-01-10", visitors: 11, pageViews: 41, interactions: 16 },
          { date: "2025-01-11", visitors: 9, pageViews: 39, interactions: 13 },
          { date: "2025-01-12", visitors: 7, pageViews: 33, interactions: 11 }
        ]
      };
      return new Response(JSON.stringify(report), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const stats = {
      totalEvents: 256,
      uniqueUsers: 42,
      uniqueSessions: 58,
      pageViews: 189,
      interactions: 67,
      lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
    };
    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Analytics report error:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Failed to generate analytics report"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
