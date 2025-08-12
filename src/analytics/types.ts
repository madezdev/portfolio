export interface AnalyticsEvent {
  id: string;
  sessionId: string;
  userId: string;
  timestamp: number;
  type: 'page_view' | 'click' | 'form_submit' | 'scroll' | 'language_change' | 'section_view';
  data: {
    page?: string;
    section?: string;
    element?: string;
    language?: 'es' | 'en';
    formType?: string;
    scrollDepth?: number;
    duration?: number;
    referrer?: string;
    userAgent?: string;
    viewport?: {
      width: number;
      height: number;
    };
  };
}

export interface AnalyticsSession {
  id: string;
  userId: string;
  startTime: number;
  endTime?: number;
  pageViews: number;
  interactions: number;
  language: 'es' | 'en';
  referrer?: string;
  userAgent: string;
  viewport: {
    width: number;
    height: number;
  };
}

export interface AnalyticsUser {
  id: string;
  firstVisit: number;
  lastVisit: number;
  totalSessions: number;
  totalPageViews: number;
  totalInteractions: number;
  preferredLanguage: 'es' | 'en';
  country?: string;
}

export interface WeeklyReport {
  period: {
    start: string;
    end: string;
  };
  summary: {
    totalVisitors: number;
    totalPageViews: number;
    totalInteractions: number;
    averageSessionDuration: number;
    bounceRate: number;
    mostViewedSections: Array<{
      section: string;
      views: number;
    }>;
    languageDistribution: {
      es: number;
      en: number;
    };
    topReferrers: Array<{
      referrer: string;
      visits: number;
    }>;
    deviceStats: {
      desktop: number;
      tablet: number;
      mobile: number;
    };
  };
  dailyStats: Array<{
    date: string;
    visitors: number;
    pageViews: number;
    interactions: number;
  }>;
}