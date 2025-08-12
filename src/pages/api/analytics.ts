import type { APIRoute } from 'astro';
import type { AnalyticsEvent, WeeklyReport } from '../../analytics/types';
import { adminDb } from '../../lib/firebase';

export const prerender = false;

// Store events
export const POST: APIRoute = async ({ request }) => {
  try {
    if (!adminDb) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Database not configured'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { events } = await request.json() as { events: AnalyticsEvent[] };
    
    if (!events || !Array.isArray(events)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid events data'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Store events in Firestore using Admin SDK
    const batch = adminDb.batch();
    
    events.forEach((event) => {
      const docRef = adminDb.collection('analytics').doc();
      batch.set(docRef, {
        ...event,
        createdAt: new Date(event.timestamp),
      });
    });

    await batch.commit();

    return new Response(JSON.stringify({
      success: true,
      message: 'Events stored successfully',
      count: events.length
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Analytics storage error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to store analytics events'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Get analytics report
export const GET: APIRoute = async ({ url }) => {
  try {
    if (!adminDb) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Database not configured'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const params = new URLSearchParams(url.search);
    const reportType = params.get('report');
    const startDate = params.get('start');
    const endDate = params.get('end');

    if (reportType === 'weekly') {
      const report = await generateWeeklyReport(startDate, endDate);
      return new Response(JSON.stringify(report), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Return basic stats if no specific report requested
    const stats = await generateBasicStats();
    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Analytics report error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to generate analytics report'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Generate weekly report
const generateWeeklyReport = async (startDate?: string | null, endDate?: string | null): Promise<WeeklyReport> => {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  const start = startDate ? new Date(startDate) : weekAgo;
  const end = endDate ? new Date(endDate) : now;

  // Query events within date range from Firestore using Admin SDK
  const querySnapshot = await adminDb.collection('analytics')
    .where('createdAt', '>=', start)
    .where('createdAt', '<=', end)
    .orderBy('createdAt', 'desc')
    .get();

  const weekEvents: AnalyticsEvent[] = [];
  
  querySnapshot.forEach((doc: any) => {
    const data = doc.data();
    weekEvents.push({
      ...data,
      timestamp: data.createdAt.toDate().getTime(),
    } as AnalyticsEvent);
  });

  // Get unique users and sessions
  const uniqueUsers = new Set(weekEvents.map(e => e.userId));
  const uniqueSessions = new Set(weekEvents.map(e => e.sessionId));
  const pageViews = weekEvents.filter(e => e.type === 'page_view');
  const interactions = weekEvents.filter(e => e.type !== 'page_view');

  // Calculate session durations
  const sessionDurations = Array.from(uniqueSessions).map(sessionId => {
    const sessionEvents = weekEvents.filter(e => e.sessionId === sessionId);
    if (sessionEvents.length < 2) return 0;
    
    const firstEvent = Math.min(...sessionEvents.map(e => e.timestamp));
    const lastEvent = Math.max(...sessionEvents.map(e => e.timestamp));
    return lastEvent - firstEvent;
  });

  const averageSessionDuration = sessionDurations.length > 0 
    ? sessionDurations.reduce((sum, duration) => sum + duration, 0) / sessionDurations.length
    : 0;

  // Calculate bounce rate (sessions with only one page view)
  const bouncedSessions = Array.from(uniqueSessions).filter(sessionId => {
    const sessionPageViews = pageViews.filter(e => e.sessionId === sessionId);
    return sessionPageViews.length === 1;
  });
  const bounceRate = uniqueSessions.size > 0 ? (bouncedSessions.length / uniqueSessions.size) * 100 : 0;

  // Most viewed sections
  const sectionViews = weekEvents
    .filter(e => e.type === 'section_view' && e.data.section)
    .reduce((acc, event) => {
      const section = event.data.section!;
      acc[section] = (acc[section] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const mostViewedSections = Object.entries(sectionViews)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([section, views]) => ({ section, views }));

  // Language distribution
  const languageStats = weekEvents.reduce((acc, event) => {
    const lang = event.data.language || 'es';
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Referrers
  const referrerStats = weekEvents
    .filter(e => e.data.referrer && e.data.referrer !== '')
    .reduce((acc, event) => {
      const referrer = event.data.referrer!;
      const domain = new URL(referrer).hostname;
      acc[domain] = (acc[domain] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

  const topReferrers = Object.entries(referrerStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([referrer, visits]) => ({ referrer, visits }));

  // Device stats (simplified based on viewport width)
  const deviceStats = weekEvents
    .filter(e => e.data.viewport)
    .reduce((acc, event) => {
      const width = event.data.viewport!.width;
      if (width >= 1024) acc.desktop++;
      else if (width >= 768) acc.tablet++;
      else acc.mobile++;
      return acc;
    }, { desktop: 0, tablet: 0, mobile: 0 });

  // Daily stats
  const dailyStats = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dayStart = new Date(d);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(d);
    dayEnd.setHours(23, 59, 59, 999);

    const dayEvents = weekEvents.filter(e => {
      const eventDate = new Date(e.timestamp);
      return eventDate >= dayStart && eventDate <= dayEnd;
    });

    const dayUsers = new Set(dayEvents.map(e => e.userId));
    const dayPageViews = dayEvents.filter(e => e.type === 'page_view');
    const dayInteractions = dayEvents.filter(e => e.type !== 'page_view');

    dailyStats.push({
      date: d.toISOString().split('T')[0],
      visitors: dayUsers.size,
      pageViews: dayPageViews.length,
      interactions: dayInteractions.length,
    });
  }

  return {
    period: {
      start: start.toISOString().split('T')[0],
      end: end.toISOString().split('T')[0],
    },
    summary: {
      totalVisitors: uniqueUsers.size,
      totalPageViews: pageViews.length,
      totalInteractions: interactions.length,
      averageSessionDuration: Math.round(averageSessionDuration / 1000), // Convert to seconds
      bounceRate: Math.round(bounceRate),
      mostViewedSections,
      languageDistribution: {
        es: languageStats.es || 0,
        en: languageStats.en || 0,
      },
      topReferrers,
      deviceStats,
    },
    dailyStats,
  };
};

// Generate basic stats
const generateBasicStats = async () => {
  const querySnapshot = await adminDb.collection('analytics').get();
  
  const allEvents: AnalyticsEvent[] = [];
  querySnapshot.forEach((doc: any) => {
    const data = doc.data();
    allEvents.push({
      ...data,
      timestamp: data.createdAt.toDate().getTime(),
    } as AnalyticsEvent);
  });

  const totalEvents = allEvents.length;
  const uniqueUsers = new Set(allEvents.map(e => e.userId)).size;
  const uniqueSessions = new Set(allEvents.map(e => e.sessionId)).size;
  const pageViews = allEvents.filter(e => e.type === 'page_view').length;
  const interactions = allEvents.filter(e => e.type !== 'page_view').length;

  return {
    totalEvents,
    uniqueUsers,
    uniqueSessions,
    pageViews,
    interactions,
    lastUpdated: new Date().toISOString(),
  };
};