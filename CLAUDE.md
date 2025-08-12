# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern bilingual portfolio website built with Astro, showcasing a Full Stack Developer and UX/UI Designer's skills and services. The project emphasizes modern design, smooth animations, responsive layouts, and complete internationalization support for Spanish and English.

## Development Commands

- `npm run dev` - Start development server (usually at http://localhost:4321)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Architecture & Structure

### Framework & Technologies
- **Astro** - Main framework with static site generation
- **React** - For interactive components with i18n support
- **TypeScript** - Strict mode enabled for type safety
- **Tailwind CSS v4** - For styling with custom gradient utilities
- **Vite** - Build tool and development server
- **nanostores** - State management for language switching
- **@nanostores/react** - React integration for reactive stores
- **Nodemailer** - Email sending functionality for contact form

### Component Architecture
- **Layout**: `src/layouts/Layout.astro` - Main page layout with SEO meta tags and language initialization
- **Navigation**: `src/components/Navigation.tsx` - Fixed header with mobile responsive menu and language toggle
- **Hero Section**: `src/components/Hero.tsx` - Landing section with animated elements and bilingual CTAs
- **About**: `src/components/About.tsx` - Personal introduction with stats and key points (bilingual)
- **Services**: `src/components/Services.tsx` - Service offerings with hover effects (bilingual)
- **Skills**: `src/components/Skills.tsx` - Technical skills with progress bars and tech icons (bilingual)
- **Contact**: `src/components/Contact.tsx` - Contact form and information with client-side validation (bilingual)
- **TeamWork**: `src/components/TeamWork.tsx` - Dedicated section highlighting team collaboration capabilities
- **Footer**: `src/components/Footer.tsx` - Site footer with social links and scroll-to-top functionality (bilingual)
- **LanguageToggle**: `src/components/LanguageToggle.tsx` - Language switcher component with flags
- **CookieConsent**: `src/components/CookieConsent.tsx` - GDPR-compliant cookie consent banner (bilingual)
- **AnalyticsTracker**: `src/components/AnalyticsTracker.tsx` - Tracks page views, interactions, and user behavior

### Internationalization (i18n) Architecture
- **Translations**: `src/i18n/translations.ts` - Complete translation definitions for ES and EN
- **Store**: `src/i18n/store.ts` - Global language state management with persistence
- **Utils**: `src/i18n/utils.ts` - Translation helper functions and hooks
- **Language Detection**: Automatic browser language detection on first visit
- **Persistence**: Language preference saved in localStorage
- **Dynamic Switching**: Real-time language switching without page reload

### Email System Architecture
- **API Endpoint**: `src/pages/api/contact.ts` - Handles form submissions via POST requests
- **Nodemailer Integration**: Gmail SMTP configuration for reliable email delivery
- **Dual Email System**: 
  - Sends detailed message to owner (madezdev@gmail.com)
  - Sends confirmation email to sender
- **Bilingual Templates**: Professional HTML email templates in Spanish and English
- **Error Handling**: Comprehensive error handling with user feedback
- **Environment Configuration**: Secure credentials management via .env file

### Analytics System Architecture
- **Analytics Store**: `src/analytics/store.ts` - Cookie-based analytics tracking with consent management
- **Analytics Types**: `src/analytics/types.ts` - TypeScript interfaces for events, sessions, and reports
- **Analytics Hooks**: `src/analytics/hooks.ts` - React hooks for tracking user interactions
- **Analytics API**: `src/pages/api/analytics.ts` - Server endpoint for storing events and generating reports
- **Analytics Dashboard**: `src/pages/analytics-dashboard.astro` - Weekly report visualization
- **Privacy Compliance**: Full GDPR compliance with cookie consent and data deletion
- **Local Storage**: Client-side event storage with periodic server synchronization

### Design System
- **Color Scheme**: Dark theme using Slate color palette (slate-950, slate-900, slate-800)
- **Gradients**: Blue-to-purple gradients for highlights and CTAs (from-blue-400 to-purple-400)
- **Typography**: Inter font family for clean, modern appearance
- **Animations**: Custom CSS animations for fade-in effects and hover transitions
- **Responsive**: Mobile-first design with Tailwind's responsive breakpoints

### Key Features
- **Bilingual Support**: Complete Spanish/English internationalization
- **Language Toggle**: Seamless language switching with flag indicators
- **Auto-Detection**: Browser language detection on first visit
- **Persistent Preferences**: Language choice saved in localStorage
- **Email Integration**: Functional contact form with Nodemailer backend
- **Dual Email System**: Sends emails to owner and confirmation to sender
- **Email Templates**: Professional HTML templates in both languages
- **Analytics Tracking**: Complete user behavior analytics with cookie consent
- **Weekly Reports**: Automated analytics reports with detailed insights
- **Privacy Compliant**: GDPR-compliant data collection and user consent management
- Smooth scrolling navigation with anchor links
- Animated hero section with background elements
- Interactive service cards with hover effects
- Skill progression bars with visual feedback
- Contact form with loading states and success/error messages
- Mobile hamburger menu with smooth transitions
- Scroll-to-top button with visibility based on scroll position

### Content Localization
- **Spanish (es)**: Primary language, focused on Latin American freelance market
- **English (en)**: Secondary language for international reach
- Professional tone emphasizing team collaboration and scalability
- All UI elements, forms, and content fully translated
- Context-aware translations maintaining professional consistency
- **Team-focused messaging**: Emphasizes collaborative approach for large projects

## Development Guidelines

### Component Patterns
- Use React components (`.tsx`) for all interactive content with i18n support
- All components use `client:load` directive for proper hydration
- Implement state management using nanostores for language switching
- Use `useTranslations` hook for accessing translation functions
- Utilize Tailwind's utility classes for consistent styling
- Follow mobile-first responsive design principles

### Internationalization Patterns
- Import `useStore` and `currentLanguage` in React components
- Use `useTranslations(lang)` hook to get translation function
- Access translations with dot notation: `t('section.key.subkey')`
- Handle complex text formatting with inline JSX elements
- Maintain consistent key structure across all translation files

### Animation & Interactions
- CSS-based animations for better performance
- Hover states for all interactive elements
- Smooth transitions using Tailwind's transition utilities
- Progressive enhancement for JavaScript-dependent features

### Content Updates
When updating portfolio content:
- **Translations**: Update both Spanish and English in `src/i18n/translations.ts`
- **Services**: Modify service descriptions in both languages
- **Skills**: Update skill percentages and technologies in `Skills.tsx`
- **Contact**: Change contact information in `Contact.tsx` and `Footer.tsx`
- **About**: Update personal information and stats in `About.tsx`
- **Consistency**: Ensure all changes are reflected in both language versions

### Adding New Languages
To add support for additional languages:
1. Add new language object to `src/i18n/translations.ts`
2. Update `Language` type in the same file
3. Modify language detection logic in `src/i18n/store.ts`
4. Update `LanguageToggle.tsx` component for new language options
5. Add email templates for the new language in `src/pages/api/contact.ts`
6. Test all components with the new language

### Email Configuration Setup
To configure the email system:
1. Copy `.env.example` to `.env`
2. Set up Gmail App Password:
   - Go to Google Account Security settings
   - Enable 2-Factor Authentication
   - Generate an App Password for "Mail"
   - Add the credentials to `.env`:
     ```
     EMAIL_USER=your-gmail@gmail.com
     EMAIL_PASSWORD=your-16-char-app-password
     ```
3. Test the contact form functionality
4. Monitor email delivery and error logs

### Email Template Customization
Email templates are located in `src/pages/api/contact.ts`:
- **Owner Email**: Receives form data with professional formatting
- **Sender Confirmation**: Sends branded confirmation with next steps
- **Bilingual Support**: Templates automatically switch based on form language
- **HTML Styling**: Inline CSS for maximum email client compatibility

### Analytics Configuration
The analytics system provides comprehensive insights:
- **Data Collection**: Page views, interactions, scroll depth, section views, language preferences
- **User Privacy**: GDPR-compliant consent system with data deletion options
- **Weekly Reports**: Access detailed reports at `/analytics-dashboard`
- **Real-time Tracking**: Events stored locally and synced periodically to server
- **Device Detection**: Automatic device type classification (desktop/tablet/mobile)
- **Referrer Tracking**: Identifies traffic sources and external referrers

### Analytics Usage
To track custom events in components:
```typescript
import { useAnalytics } from '../analytics/hooks';

const { trackClick, trackFormSubmit } = useAnalytics();
trackClick('button-name', 'section-name');
trackFormSubmit('contact-form', true);
```

### Weekly Reports
Visit `/analytics-dashboard` to view:
- Unique visitors and page views
- Most viewed sections
- Language distribution
- Device type breakdown
- Daily traffic patterns
- Top referrer sources
- User interaction patterns