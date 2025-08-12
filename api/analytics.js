export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { events } = req.body;
      
      if (!events || !Array.isArray(events)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid events data'
        });
      }

      // Log events to Vercel console for now
      // In production, you can integrate with analytics services like:
      // - Vercel Analytics
      // - Google Analytics 4
      // - Mixpanel
      // - Plausible
      console.log('📊 Analytics events received:', events.length);
      events.forEach((event) => {
        console.log(`[${event.type}] ${event.data?.section || 'general'}:`, event.data);
      });

      return res.status(200).json({
        success: true,
        message: 'Events logged successfully',
        count: events.length
      });

    } catch (error) {
      console.error('Analytics storage error:', error);
      
      return res.status(500).json({
        success: false,
        message: 'Failed to store analytics events'
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const { report } = req.query;

      if (report === 'weekly') {
        // Mock weekly report data
        const reportData = {
          period: {
            start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            end: new Date().toISOString().split('T')[0],
          },
          summary: {
            totalVisitors: 42,
            totalPageViews: 189,
            totalInteractions: 67,
            averageSessionDuration: 245,
            bounceRate: 35,
            mostViewedSections: [
              { section: 'hero', views: 95 },
              { section: 'about', views: 78 },
              { section: 'services', views: 67 },
              { section: 'skills', views: 56 },
              { section: 'contact', views: 45 }
            ],
            languageDistribution: {
              es: 65,
              en: 35
            },
            topReferrers: [
              { referrer: 'google.com', visits: 30 },
              { referrer: 'linkedin.com', visits: 15 },
              { referrer: 'github.com', visits: 10 }
            ],
            deviceStats: {
              desktop: 60,
              tablet: 5,
              mobile: 35
            }
          },
          dailyStats: [
            { date: '2025-01-06', visitors: 8, pageViews: 28, interactions: 12 },
            { date: '2025-01-07', visitors: 9, pageViews: 35, interactions: 15 },
            { date: '2025-01-08', visitors: 12, pageViews: 42, interactions: 18 },
            { date: '2025-01-09', visitors: 10, pageViews: 38, interactions: 14 },
            { date: '2025-01-10', visitors: 11, pageViews: 41, interactions: 16 },
            { date: '2025-01-11', visitors: 9, pageViews: 39, interactions: 13 },
            { date: '2025-01-12', visitors: 7, pageViews: 33, interactions: 11 }
          ]
        };

        return res.status(200).json(reportData);
      }

      // Return basic stats
      const stats = {
        totalEvents: 256,
        uniqueUsers: 42,
        uniqueSessions: 58,
        pageViews: 189,
        interactions: 67,
        lastUpdated: new Date().toISOString()
      };

      return res.status(200).json(stats);

    } catch (error) {
      console.error('Analytics report error:', error);
      
      return res.status(500).json({
        success: false,
        message: 'Failed to generate analytics report'
      });
    }
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}