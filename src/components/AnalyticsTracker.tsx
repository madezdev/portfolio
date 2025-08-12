import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { trackEvent, analyticsConsent } from '../analytics/store';
import { currentLanguage } from '../i18n/store';

export default function AnalyticsTracker() {
  const hasConsent = useStore(analyticsConsent);
  const lang = useStore(currentLanguage);

  useEffect(() => {
    if (!hasConsent) return;

    // Track initial page view
    trackEvent('page_view', {
      language: lang,
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Track milestone scroll depths
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          trackEvent('scroll', {
            scrollDepth: scrollPercent,
            language: lang,
          });
        }
      }
    };

    // Track section views using Intersection Observer
    const observedSections = new Set<string>();
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            if (sectionId && !observedSections.has(sectionId)) {
              observedSections.add(sectionId);
              trackEvent('section_view', {
                section: sectionId,
                language: lang,
              });
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    // Track time spent on page
    const startTime = Date.now();
    let isActive = true;

    // Track when user becomes inactive
    const trackInactivity = () => {
      isActive = false;
    };

    const trackActivity = () => {
      isActive = true;
    };

    // Event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    window.addEventListener('blur', trackInactivity);
    window.addEventListener('focus', trackActivity);
    window.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        trackInactivity();
      } else {
        trackActivity();
      }
    });

    // Observe sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => sectionObserver.observe(section));

    // Track session duration on page unload
    const trackSessionEnd = () => {
      const duration = Date.now() - startTime;
      trackEvent('page_view', {
        duration,
        language: lang,
      });
    };

    window.addEventListener('beforeunload', trackSessionEnd);

    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('blur', trackInactivity);
      window.removeEventListener('focus', trackActivity);
      window.removeEventListener('beforeunload', trackSessionEnd);
      sectionObserver.disconnect();
    };
  }, [hasConsent, lang]);

  // Track language changes
  useEffect(() => {
    if (hasConsent) {
      trackEvent('language_change', {
        language: lang,
      });
    }
  }, [lang, hasConsent]);

  return null; // This component doesn't render anything
}