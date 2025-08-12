import { atom } from 'nanostores';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import type { AnalyticsEvent, AnalyticsSession, AnalyticsUser } from './types';

// Analytics configuration
const ANALYTICS_CONFIG = {
  cookieName: 'portfolio_analytics',
  sessionTimeout: 30 * 60 * 1000, // 30 minutes
  batchSize: 10,
  flushInterval: 30000, // 30 seconds
};

// Consent management - Initialize with proper values
const getInitialConsentState = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = Cookies.get('analytics_consent');
  return consent === 'true';
};

const getInitialBannerState = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = Cookies.get('analytics_consent');
  const dismissed = Cookies.get('consent_banner_dismissed');
  // Show banner only if no decision has been made (no consent cookie exists)
  return consent === undefined && dismissed !== 'true';
};

export const analyticsConsent = atom<boolean>(getInitialConsentState());
export const showConsentBanner = atom<boolean>(getInitialBannerState());

// User and session management
let currentUser: AnalyticsUser | null = null;
let currentSession: AnalyticsSession | null = null;
let eventQueue: AnalyticsEvent[] = [];

// Initialize analytics consent from cookies
const initializeConsent = () => {
  if (typeof window !== 'undefined') {
    const consent = Cookies.get('analytics_consent');
    const consentBannerDismissed = Cookies.get('consent_banner_dismissed');
    
    console.log('Initializing consent:', { consent, consentBannerDismissed });
    console.log('Current banner state:', showConsentBanner.get());
    console.log('Current consent state:', analyticsConsent.get());
    
    // If analytics are already accepted, initialize user and session
    if (consent === 'true' && !currentUser) {
      currentUser = initializeUser();
      currentSession = initializeSession(currentUser.id);
      console.log('Analytics already accepted, initialized user and session');
    }
  }
};

// Get or create user ID
const getUserId = (): string => {
  if (typeof window === 'undefined') return 'server-user';
  
  let userId = Cookies.get('portfolio_user_id');
  if (!userId) {
    userId = uuidv4();
    Cookies.set('portfolio_user_id', userId, { expires: 365 });
  }
  return userId;
};

// Get or create session ID
const getSessionId = (): string => {
  if (typeof window === 'undefined') return 'server-session';
  
  let sessionId = sessionStorage.getItem('portfolio_session_id');
  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem('portfolio_session_id', sessionId);
  }
  return sessionId;
};

// Initialize user
const initializeUser = (): AnalyticsUser => {
  const userId = getUserId();
  const existingUser = getStoredUser(userId);
  
  if (existingUser) {
    existingUser.lastVisit = Date.now();
    existingUser.totalSessions += 1;
    storeUser(existingUser);
    return existingUser;
  }
  
  const newUser: AnalyticsUser = {
    id: userId,
    firstVisit: Date.now(),
    lastVisit: Date.now(),
    totalSessions: 1,
    totalPageViews: 0,
    totalInteractions: 0,
    preferredLanguage: navigator.language.startsWith('es') ? 'es' : 'en',
  };
  
  storeUser(newUser);
  return newUser;
};

// Initialize session
const initializeSession = (userId: string): AnalyticsSession => {
  const sessionId = getSessionId();
  
  const session: AnalyticsSession = {
    id: sessionId,
    userId,
    startTime: Date.now(),
    pageViews: 0,
    interactions: 0,
    language: navigator.language.startsWith('es') ? 'es' : 'en',
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
  
  storeSession(session);
  return session;
};

// Storage utilities
const getStoredUser = (userId: string): AnalyticsUser | null => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(`analytics_user_${userId}`);
  return stored ? JSON.parse(stored) : null;
};

const storeUser = (user: AnalyticsUser) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(`analytics_user_${user.id}`, JSON.stringify(user));
};

const storeSession = (session: AnalyticsSession) => {
  if (typeof window === 'undefined') return;
  
  sessionStorage.setItem(`analytics_session_${session.id}`, JSON.stringify(session));
};

const getStoredEvents = (): AnalyticsEvent[] => {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem('analytics_events');
  return stored ? JSON.parse(stored) : [];
};

const storeEvents = (events: AnalyticsEvent[]) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('analytics_events', JSON.stringify(events));
};

// Track event
export const trackEvent = (type: AnalyticsEvent['type'], data: AnalyticsEvent['data'] = {}) => {
  if (!analyticsConsent.get() || typeof window === 'undefined') return;
  
  if (!currentUser) {
    currentUser = initializeUser();
  }
  
  if (!currentSession) {
    currentSession = initializeSession(currentUser.id);
  }
  
  const event: AnalyticsEvent = {
    id: uuidv4(),
    sessionId: currentSession.id,
    userId: currentUser.id,
    timestamp: Date.now(),
    type,
    data: {
      ...data,
      page: window.location.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    },
  };
  
  eventQueue.push(event);
  
  // Update session and user stats
  if (type === 'page_view') {
    currentSession.pageViews++;
    currentUser.totalPageViews++;
  } else {
    currentSession.interactions++;
    currentUser.totalInteractions++;
  }
  
  storeUser(currentUser);
  storeSession(currentSession);
  
  // Flush if batch size reached
  if (eventQueue.length >= ANALYTICS_CONFIG.batchSize) {
    flushEvents();
  }
};

// Flush events to storage/server
const flushEvents = () => {
  if (eventQueue.length === 0) return;
  
  const existingEvents = getStoredEvents();
  const allEvents = [...existingEvents, ...eventQueue];
  
  storeEvents(allEvents);
  eventQueue = [];
  
  // Optional: Send to server
  sendEventsToServer(allEvents.slice(-ANALYTICS_CONFIG.batchSize));
};

// Send events to server (optional)
const sendEventsToServer = async (events: AnalyticsEvent[]) => {
  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ events }),
    });
  } catch (error) {
    console.warn('Failed to send analytics events to server:', error);
  }
};

// Consent management functions
export const acceptAnalytics = () => {
  console.log('Analytics accepted');
  analyticsConsent.set(true);
  showConsentBanner.set(false);
  Cookies.set('analytics_consent', 'true', { expires: 365 });
  Cookies.set('consent_banner_dismissed', 'true', { expires: 365 });
  
  // Initialize analytics after consent
  if (typeof window !== 'undefined') {
    currentUser = initializeUser();
    currentSession = initializeSession(currentUser.id);
    
    // Track page view
    trackEvent('page_view');
  }
};

export const declineAnalytics = () => {
  console.log('Analytics declined');
  analyticsConsent.set(false);
  showConsentBanner.set(false);
  Cookies.set('analytics_consent', 'false', { expires: 365 });
  Cookies.set('consent_banner_dismissed', 'true', { expires: 365 });
  
  // Clear existing data
  if (typeof window !== 'undefined') {
    localStorage.removeItem('analytics_events');
    const userId = getUserId();
    localStorage.removeItem(`analytics_user_${userId}`);
    sessionStorage.removeItem('portfolio_session_id');
  }
};

// Initialize on module load
if (typeof window !== 'undefined') {
  // Initialize immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeConsent);
  } else {
    initializeConsent();
  }
  
  // Auto-flush events periodically
  setInterval(flushEvents, ANALYTICS_CONFIG.flushInterval);
  
  // Flush events on page unload
  window.addEventListener('beforeunload', flushEvents);
  
  // End session on tab close
  window.addEventListener('beforeunload', () => {
    if (currentSession) {
      currentSession.endTime = Date.now();
      storeSession(currentSession);
    }
  });
}

// Clear all analytics data (for testing)
export const clearAllAnalyticsData = () => {
  if (typeof window !== 'undefined') {
    // Clear cookies
    Cookies.remove('analytics_consent');
    Cookies.remove('consent_banner_dismissed');
    Cookies.remove('portfolio_user_id');
    
    // Clear localStorage
    localStorage.removeItem('analytics_events');
    const userId = getUserId();
    localStorage.removeItem(`analytics_user_${userId}`);
    
    // Clear sessionStorage
    sessionStorage.removeItem('portfolio_session_id');
    
    // Reset state
    analyticsConsent.set(false);
    showConsentBanner.set(true);
    currentUser = null;
    currentSession = null;
    eventQueue = [];
    
    console.log('All analytics data cleared');
  }
};

// Utility functions for components
export const getAnalyticsData = () => {
  if (typeof window === 'undefined') return null;
  
  return {
    events: getStoredEvents(),
    user: currentUser,
    session: currentSession,
  };
};