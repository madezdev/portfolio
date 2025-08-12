import { useCallback } from 'react';
import { useStore } from '@nanostores/react';
import { trackEvent, analyticsConsent } from './store';
import { currentLanguage } from '../i18n/store';

export const useAnalytics = () => {
  const hasConsent = useStore(analyticsConsent);
  const lang = useStore(currentLanguage);

  const track = useCallback((type: Parameters<typeof trackEvent>[0], data?: Parameters<typeof trackEvent>[1]) => {
    if (hasConsent) {
      trackEvent(type, { ...data, language: lang });
    }
  }, [hasConsent, lang]);

  // Specific tracking functions
  const trackClick = useCallback((element: string, section?: string) => {
    track('click', { element, section });
  }, [track]);

  const trackFormSubmit = useCallback((formType: string, success: boolean = true) => {
    track('form_submit', { formType, success });
  }, [track]);

  const trackSectionView = useCallback((section: string) => {
    track('section_view', { section });
  }, [track]);

  const trackPageView = useCallback((page?: string) => {
    track('page_view', { page });
  }, [track]);

  return {
    track,
    trackClick,
    trackFormSubmit,
    trackSectionView,
    trackPageView,
    hasConsent,
  };
};