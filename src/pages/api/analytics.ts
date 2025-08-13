import type { APIRoute } from 'astro';
import type { AnalyticsEvent, WeeklyReport } from '../../analytics/types';
// Firebase Admin removed - analytics stored client-side only

export const prerender = false;

// Store events - disabled (using client-side Firebase Analytics only)
export const POST: APIRoute = async ({ request }) => {
  return new Response(JSON.stringify({
    success: true,
    message: 'Analytics handled client-side only'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

// Get analytics report - disabled (using client-side Firebase Analytics only)
export const GET: APIRoute = async ({ url }) => {
  return new Response(JSON.stringify({
    success: false,
    message: 'Analytics reports not available - using client-side analytics only'
  }), {
    status: 501,
    headers: { 'Content-Type': 'application/json' }
  });
};

// Analytics functions removed - using client-side Firebase Analytics only