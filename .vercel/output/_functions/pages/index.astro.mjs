import { e as createComponent, f as createAstro, r as renderTemplate, l as renderScript, n as renderSlot, k as renderHead, m as maybeRenderHead, h as addAttribute, o as renderComponent } from '../chunks/astro/server_BlDKbZuv.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useState, useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';
import { v4 } from 'uuid';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Martin - Desarrollador Full Stack & Dise\xF1ador UX/UI. Desarrollo aplicaciones web modernas con React, Node.js y dise\xF1o UX/UI centrado en el usuario.",
    image = "/og-image.jpg",
    url = Astro2.url.pathname,
    lang = "es",
    keywords = ["desarrollador full stack", "dise\xF1ador UX/UI", "React", "Node.js", "desarrollo web", "freelancer"],
    type = "website",
    author = "Martin Ezequiel"
  } = Astro2.props;
  const canonicalUrl = new URL(url, Astro2.site || Astro2.url.origin);
  const imageUrl = new URL(image, Astro2.site || Astro2.url.origin);
  return renderTemplate(_a || (_a = __template(["<html", ' class="scroll-smooth" data-astro-cid-sckkx6r4> <head><!-- Basic Meta Tags --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Icons --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> --><!-- <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> --><!-- <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> --><link rel="manifest" href="/manifest.json"><!-- Open Graph Meta Tags --><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:site_name" content="Martin - Portfolio"><meta property="og:locale"', '><!-- Twitter Card Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:creator" content="@martindev"><!-- Additional SEO Meta Tags --><meta name="theme-color" content="#0f172a"><meta name="msapplication-TileColor" content="#0f172a"><meta name="format-detection" content="telephone=no"><title>', `</title><!-- Preconnect for Performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://firebase.googleapis.com"><link rel="preconnect" href="https://firestore.googleapis.com"><!-- Preload critical resources --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">`, '<noscript><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></noscript><!-- Preload critical images --><!-- <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" media="(min-width: 768px)"> --><!-- <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg"> --><!-- JSON-LD Structured Data --><script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "Person",\n				"name": "Martin Ezequiel",\n				"jobTitle": "Full Stack Developer & UX/UI Designer",\n				"description": "Desarrollador Full Stack especializado en React, Node.js y dise\xF1o UX/UI",\n				"url": "https://tu-dominio.web.app",\n				"sameAs": [\n					"https://linkedin.com/in/tu-perfil",\n					"https://github.com/tu-usuario",\n					"https://twitter.com/tu-usuario"\n				],\n				"knowsAbout": [\n					"React",\n					"Node.js",\n					"TypeScript",\n					"UX/UI Design",\n					"Full Stack Development",\n					"Web Development"\n				],\n				"offers": {\n					"@type": "Offer",\n					"itemOffered": {\n						"@type": "Service",\n						"name": "Desarrollo Web Full Stack",\n						"description": "Desarrollo de aplicaciones web modernas con React y Node.js"\n					}\n				}\n			}\n		<\/script>', '</head> <body class="bg-slate-950 text-white font-sans antialiased" data-astro-cid-sckkx6r4> ', " ", " </body> </html> "])), addAttribute(lang, "lang"), addAttribute(description, "content"), addAttribute(keywords.join(", "), "content"), addAttribute(author, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalUrl.href, "href"), addAttribute(type, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl.href, "content"), addAttribute(canonicalUrl.href, "content"), addAttribute(lang === "es" ? "es_ES" : "en_US", "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl.href, "content"), title, maybeRenderHead(), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "/Users/madez/Documents/Apps/portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/madez/Documents/Apps/portfolio/src/layouts/Layout.astro", void 0);

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("portfolio-language");
    if (stored === "en" || stored === "es") {
      return stored;
    }
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("en") ? "en" : "es";
  }
  return "es";
};
const currentLanguage = atom(getInitialLanguage());
currentLanguage.subscribe((lang) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("portfolio-language", lang);
    document.documentElement.lang = lang;
  }
});
const toggleLanguage = () => {
  const current = currentLanguage.get();
  currentLanguage.set(current === "es" ? "en" : "es");
};

const translations = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      skills: "Habilidades",
      contact: "Contacto"
    },
    // Hero Section
    hero: {
      greeting: "👋 ¡Hola! Soy Martin",
      title: {
        line1: "Desarrollador",
        line2: "Full Stack",
        line3: "& Diseñador UX/UI"
      },
      subtitle: "Junto a mi equipo, creamos experiencias digitales modernas y funcionales utilizando React y Node.js",
      cta: {
        primary: "📬 Trabajemos juntos",
        secondary: "Conoce más sobre mí"
      }
    },
    // About Section  
    about: {
      title: "Sobre mí",
      description1: "Soy un apasionado desarrollador Full Stack con experiencia en la creación de interfaces web atractivas y funcionales utilizando React y Node.js. Mi enfoque no se limita solo al código, también soy un diseñador UX/UI que se preocupa por crear experiencias digitales intuitivas y atractivas.",
      description2: "Junto a mi equipo, desarrollamos aplicaciones web y sitios web modernos, rápidos y seguros con tecnologías como React y Node.js. Creamos soluciones personalizadas, responsivas y optimizadas para ofrecer experiencias fluidas y atractivas. Combinamos diseño UX/UI con funcionalidad, integrando características dinámicas, alto rendimiento y SEO, para que tu proyecto digital esté listo para crecer y destacar en el mercado.",
      points: {
        development: {
          title: "Desarrollo Moderno",
          desc: "Aplicaciones web con las últimas tecnologías"
        },
        design: {
          title: "Diseño UX/UI",
          desc: "Interfaces centradas en el usuario"
        },
        performance: {
          title: "Performance",
          desc: "Optimización para máxima velocidad"
        },
        collaboration: {
          title: "Trabajo en Equipo",
          desc: "Colaboración escalable para proyectos grandes"
        }
      },
      stats: {
        experience: "Años de experiencia",
        projects: "Proyectos completados",
        availability: "Disponibilidad"
      }
    },
    // Services Section
    services: {
      title: "Mis Servicios",
      subtitle: "Junto a mi equipo, ofrecemos soluciones completas de desarrollo y diseño para llevar tus ideas digitales al siguiente nivel. Para proyectos grandes, colaboramos con otros desarrolladores especializados para acelerar los procesos.",
      items: {
        frontend: {
          title: "Desarrollo Frontend",
          description: "Desarrollamos aplicaciones web modernas y receptivas utilizando React, garantizando una experiencia de usuario suave y eficiente.",
          features: {
            0: "Aplicaciones React modernas",
            1: "Componentes reutilizables",
            2: "Diseño responsive",
            3: "Optimización de performance"
          }
        },
        backend: {
          title: "Desarrollo Backend",
          description: "Desarrollo de backend ligero y escalable utilizando Node.js para complementar las aplicaciones frontend.",
          features: {
            0: "APIs RESTful con Node.js",
            1: "Bases de datos optimizadas",
            2: "Autenticación y seguridad",
            3: "Arquitectura escalable"
          }
        },
        design: {
          title: "Diseño UX/UI",
          description: "Diseño interfaces atractivas y fáciles de usar que satisfacen las necesidades de los usuarios y los objetivos del negocio.",
          features: {
            0: "Investigación de usuarios",
            1: "Wireframes y prototipos",
            2: "Interfaces intuitivas",
            3: "Design systems"
          }
        },
        mobile: {
          title: "Desarrollo Móvil",
          description: "Aplicaciones móviles nativas y híbridas para iOS y Android con experiencias de usuario excepcionales.",
          features: {
            0: "React Native",
            1: "iOS & Android",
            2: "Push notifications",
            3: "App store deployment"
          }
        },
        saas: {
          title: "Desarrollo SaaS",
          description: "Plataformas SaaS completas con sistemas de suscripción, dashboard de administración y escalabilidad.",
          features: {
            0: "Multi-tenancy",
            1: "Sistemas de pago",
            2: "Analytics dashboard",
            3: "Cloud deployment"
          }
        },
        custom: {
          title: "Software Personalizado",
          description: "Soluciones de software a medida que se adaptan perfectamente a las necesidades específicas de tu negocio.",
          features: {
            0: "Análisis de requisitos",
            1: "Arquitectura personalizada",
            2: "Integración de sistemas",
            3: "Soporte continuo"
          }
        }
      }
    },
    // Skills Section
    skills: {
      title: "Habilidades Clave",
      subtitle: "Tecnologías y herramientas que domino para crear soluciones digitales excepcionales",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        design: "Design & Tools"
      }
    },
    // Contact Section
    contact: {
      title: "Trabajemos Juntos",
      subtitle: "¿Tienes un proyecto en mente? ¡Estoy disponible para colaborar en proyectos emocionantes y llevar tus ideas digitales a la vida! Para proyectos grandes, trabajo con un equipo especializado.",
      getInTouch: "Ponte en contacto",
      description: "Junto a mi equipo, somos comunicadores abiertos y colaboradores comprometidos, listos para enfrentar desafíos y llevar tus conceptos digitales al siguiente nivel. Contamos con desarrolladores especializados para acelerar los tiempos de entrega.",
      methods: {
        email: "Email",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      availability: {
        status: "Disponible para proyectos",
        description: "Actualmente acepto nuevos proyectos freelance. Tiempo de respuesta promedio: 24 horas."
      },
      form: {
        title: "Envíame un mensaje",
        fields: {
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Email",
          emailPlaceholder: "tu@email.com",
          subject: "Asunto",
          subjectPlaceholder: "Selecciona un tema",
          budget: "Presupuesto estimado",
          budgetPlaceholder: "Selecciona un rango",
          message: "Mensaje",
          messagePlaceholder: "Cuéntame sobre tu proyecto..."
        },
        subjects: {
          frontend: "Desarrollo Frontend",
          fullstack: "Proyecto Full Stack",
          design: "Diseño UX/UI",
          mobile: "Aplicación Móvil",
          saas: "Desarrollo SaaS",
          other: "Otro"
        },
        budgets: {
          under1k: "Menos de $1,000",
          "1k5k": "$1,000 - $5,000",
          "5k10k": "$5,000 - $10,000",
          "10kplus": "Más de $10,000",
          discuss: "Prefiero discutirlo"
        },
        submit: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado correctamente! Te responderé pronto."
      }
    },
    // Footer
    footer: {
      description: "Desarrollador Full Stack y Diseñador UX/UI apasionado por crear experiencias digitales excepcionales que combinan funcionalidad y estética.",
      navigation: "Navegación",
      services: "Servicios",
      servicesList: {
        0: "Desarrollo Frontend",
        1: "Desarrollo Backend",
        2: "Diseño UX/UI",
        3: "Aplicaciones Móviles",
        4: "Desarrollo SaaS"
      },
      copyright: "© 2024 Martin. Todos los derechos reservados.",
      availableForProjects: "Disponible para proyectos",
      madeWith: "Hecho con ❤️ y Astro"
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      skills: "Skills",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      greeting: "👋 Hi! I'm Martin",
      title: {
        line1: "Full Stack",
        line2: "Developer",
        line3: "& UX/UI Designer"
      },
      subtitle: "Together with my team, we create modern and functional digital experiences using React and Node.js",
      cta: {
        primary: "📬 Let's work together",
        secondary: "Learn more about me"
      }
    },
    // About Section
    about: {
      title: "About me",
      description1: "I'm a passionate Full Stack developer with experience creating attractive and functional web interfaces using React and Node.js. My approach is not limited to code alone, I'm also a UX/UI designer who cares about creating intuitive and appealing digital experiences.",
      description2: "Together with my team, we develop modern, fast and secure web applications and websites using technologies like React and Node.js. We create personalized, responsive and optimized solutions to offer fluid and attractive experiences. We combine UX/UI design with functionality, integrating dynamic features, high performance and SEO, so your digital project is ready to grow and stand out in the market.",
      points: {
        development: {
          title: "Modern Development",
          desc: "Web applications with latest technologies"
        },
        design: {
          title: "UX/UI Design",
          desc: "User-centered interfaces"
        },
        performance: {
          title: "Performance",
          desc: "Optimization for maximum speed"
        },
        collaboration: {
          title: "Team Work",
          desc: "Scalable collaboration for large projects"
        }
      },
      stats: {
        experience: "Years of experience",
        projects: "Completed projects",
        availability: "Availability"
      }
    },
    // Services Section
    services: {
      title: "My Services",
      subtitle: "Together with my team, we offer complete development and design solutions to take your digital ideas to the next level. For large projects, we collaborate with other specialized developers to accelerate processes.",
      items: {
        frontend: {
          title: "Frontend Development",
          description: "We develop modern and responsive web applications using React, ensuring a smooth and efficient user experience.",
          features: {
            0: "Modern React applications",
            1: "Reusable components",
            2: "Responsive design",
            3: "Performance optimization"
          }
        },
        backend: {
          title: "Backend Development",
          description: "Lightweight and scalable backend development using Node.js to complement frontend applications.",
          features: {
            0: "RESTful APIs with Node.js",
            1: "Optimized databases",
            2: "Authentication and security",
            3: "Scalable architecture"
          }
        },
        design: {
          title: "UX/UI Design",
          description: "I design attractive and user-friendly interfaces that meet user needs while fulfilling business objectives.",
          features: {
            0: "User research",
            1: "Wireframes and prototypes",
            2: "Intuitive interfaces",
            3: "Design systems"
          }
        },
        mobile: {
          title: "Mobile Development",
          description: "Native and hybrid mobile applications for iOS and Android with exceptional user experiences.",
          features: {
            0: "React Native",
            1: "iOS & Android",
            2: "Push notifications",
            3: "App store deployment"
          }
        },
        saas: {
          title: "SaaS Development",
          description: "Complete SaaS platforms with subscription systems, admin dashboards and scalability.",
          features: {
            0: "Multi-tenancy",
            1: "Payment systems",
            2: "Analytics dashboard",
            3: "Cloud deployment"
          }
        },
        custom: {
          title: "Custom Software",
          description: "Tailored software solutions that perfectly adapt to your business specific needs.",
          features: {
            0: "Requirements analysis",
            1: "Custom architecture",
            2: "System integration",
            3: "Ongoing support"
          }
        }
      }
    },
    // Skills Section
    skills: {
      title: "Key Skills",
      subtitle: "Technologies and tools I master to create exceptional digital solutions",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        design: "Design & Tools"
      }
    },
    // Contact Section
    contact: {
      title: "Let's Work Together",
      subtitle: "Do you have a project in mind? I'm available to collaborate on exciting projects and bring your digital ideas to life! For large projects, I work with a specialized team.",
      getInTouch: "Get in touch",
      description: "Together with my team, we are open communicators and committed collaborators, ready to face challenges and take your digital concepts to the next level. We have specialized developers to accelerate delivery times.",
      methods: {
        email: "Email",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      availability: {
        status: "Available for projects",
        description: "Currently accepting new freelance projects. Average response time: 24 hours."
      },
      form: {
        title: "Send me a message",
        fields: {
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "your@email.com",
          subject: "Subject",
          subjectPlaceholder: "Select a topic",
          budget: "Estimated budget",
          budgetPlaceholder: "Select a range",
          message: "Message",
          messagePlaceholder: "Tell me about your project..."
        },
        subjects: {
          frontend: "Frontend Development",
          fullstack: "Full Stack Project",
          design: "UX/UI Design",
          mobile: "Mobile Application",
          saas: "SaaS Development",
          other: "Other"
        },
        budgets: {
          under1k: "Under $1,000",
          "1k5k": "$1,000 - $5,000",
          "5k10k": "$5,000 - $10,000",
          "10kplus": "Over $10,000",
          discuss: "Prefer to discuss"
        },
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent successfully! I'll respond soon."
      }
    },
    // Footer
    footer: {
      description: "Full Stack Developer and UX/UI Designer passionate about creating exceptional digital experiences that combine functionality and aesthetics.",
      navigation: "Navigation",
      services: "Services",
      servicesList: {
        0: "Frontend Development",
        1: "Backend Development",
        2: "UX/UI Design",
        3: "Mobile Applications",
        4: "SaaS Development"
      },
      copyright: "© 2024 Martin. All rights reserved.",
      availableForProjects: "Available for projects",
      madeWith: "Made with ❤️ and Astro"
    }
  }
};

function t(key, lang) {
  const language = lang || currentLanguage.get();
  const keys = key.split(".");
  let value = translations[language];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}
function useTranslations(lang) {
  const language = lang || currentLanguage.get();
  return {
    t: (key) => t(key, language),
    lang: language
  };
}

function LanguageToggle() {
  const lang = useStore(currentLanguage);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: toggleLanguage,
      className: "flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg transition-all duration-300 group",
      "aria-label": `Switch to ${lang === "es" ? "English" : "Spanish"}`,
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg group-hover:scale-110 transition-transform", children: lang === "es" ? "🇺🇸" : "🇪🇸" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-300 group-hover:text-white transition-colors", children: lang === "es" ? "EN" : "ES" })
      ]
    }
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lang = useStore(currentLanguage);
  const { t } = useTranslations(lang);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("a", { href: "#home", className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Martin" }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline space-x-8", children: [
          /* @__PURE__ */ jsx("a", { href: "#home", className: "text-gray-300 hover:text-white transition-colors duration-300", children: t("nav.home") }),
          /* @__PURE__ */ jsx("a", { href: "#about", className: "text-gray-300 hover:text-white transition-colors duration-300", children: t("nav.about") }),
          /* @__PURE__ */ jsx("a", { href: "#services", className: "text-gray-300 hover:text-white transition-colors duration-300", children: t("nav.services") }),
          /* @__PURE__ */ jsx("a", { href: "#skills", className: "text-gray-300 hover:text-white transition-colors duration-300", children: t("nav.skills") }),
          /* @__PURE__ */ jsx("a", { href: "#contact", className: "text-gray-300 hover:text-white transition-colors duration-300", children: t("nav.contact") })
        ] }),
        /* @__PURE__ */ jsx(LanguageToggle, {})
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx(LanguageToggle, {}),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: toggleMenu,
            className: "text-gray-400 hover:text-white focus:outline-none focus:text-white",
            children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" }) })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `md:hidden ${isMenuOpen ? "block" : "hidden"}`, children: /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#home",
          onClick: closeMenu,
          className: "block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300",
          children: t("nav.home")
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#about",
          onClick: closeMenu,
          className: "block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300",
          children: t("nav.about")
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#services",
          onClick: closeMenu,
          className: "block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300",
          children: t("nav.services")
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#skills",
          onClick: closeMenu,
          className: "block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300",
          children: t("nav.skills")
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#contact",
          onClick: closeMenu,
          className: "block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300",
          children: t("nav.contact")
        }
      )
    ] }) })
  ] });
}

const ANALYTICS_CONFIG = {
  // 30 minutes
  batchSize: 10,
  flushInterval: 3e4
  // 30 seconds
};
const getInitialConsentState = () => {
  if (typeof window === "undefined") return false;
  const consent = Cookies.get("analytics_consent");
  return consent === "true";
};
const getInitialBannerState = () => {
  if (typeof window === "undefined") return false;
  const consent = Cookies.get("analytics_consent");
  const dismissed = Cookies.get("consent_banner_dismissed");
  return consent === void 0 && dismissed !== "true";
};
const analyticsConsent = atom(getInitialConsentState());
const showConsentBanner = atom(getInitialBannerState());
let currentUser = null;
let currentSession = null;
let eventQueue = [];
const initializeConsent = () => {
  if (typeof window !== "undefined") {
    const consent = Cookies.get("analytics_consent");
    const consentBannerDismissed = Cookies.get("consent_banner_dismissed");
    console.log("Initializing consent:", { consent, consentBannerDismissed });
    console.log("Current banner state:", showConsentBanner.get());
    console.log("Current consent state:", analyticsConsent.get());
    if (consent === "true" && !currentUser) {
      currentUser = initializeUser();
      currentSession = initializeSession(currentUser.id);
      console.log("Analytics already accepted, initialized user and session");
    }
  }
};
const getUserId = () => {
  if (typeof window === "undefined") return "server-user";
  let userId = Cookies.get("portfolio_user_id");
  if (!userId) {
    userId = v4();
    Cookies.set("portfolio_user_id", userId, { expires: 365 });
  }
  return userId;
};
const getSessionId = () => {
  if (typeof window === "undefined") return "server-session";
  let sessionId = sessionStorage.getItem("portfolio_session_id");
  if (!sessionId) {
    sessionId = v4();
    sessionStorage.setItem("portfolio_session_id", sessionId);
  }
  return sessionId;
};
const initializeUser = () => {
  const userId = getUserId();
  const existingUser = getStoredUser(userId);
  if (existingUser) {
    existingUser.lastVisit = Date.now();
    existingUser.totalSessions += 1;
    storeUser(existingUser);
    return existingUser;
  }
  const newUser = {
    id: userId,
    firstVisit: Date.now(),
    lastVisit: Date.now(),
    totalSessions: 1,
    totalPageViews: 0,
    totalInteractions: 0,
    preferredLanguage: navigator.language.startsWith("es") ? "es" : "en"
  };
  storeUser(newUser);
  return newUser;
};
const initializeSession = (userId) => {
  const sessionId = getSessionId();
  const session = {
    id: sessionId,
    userId,
    startTime: Date.now(),
    pageViews: 0,
    interactions: 0,
    language: navigator.language.startsWith("es") ? "es" : "en",
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  };
  storeSession(session);
  return session;
};
const getStoredUser = (userId) => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(`analytics_user_${userId}`);
  return stored ? JSON.parse(stored) : null;
};
const storeUser = (user) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(`analytics_user_${user.id}`, JSON.stringify(user));
};
const storeSession = (session) => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(`analytics_session_${session.id}`, JSON.stringify(session));
};
const getStoredEvents = () => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("analytics_events");
  return stored ? JSON.parse(stored) : [];
};
const storeEvents = (events) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("analytics_events", JSON.stringify(events));
};
const trackEvent = (type, data = {}) => {
  if (!analyticsConsent.get() || typeof window === "undefined") return;
  if (!currentUser) {
    currentUser = initializeUser();
  }
  if (!currentSession) {
    currentSession = initializeSession(currentUser.id);
  }
  const event = {
    id: v4(),
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
        height: window.innerHeight
      }
    }
  };
  eventQueue.push(event);
  if (type === "page_view") {
    currentSession.pageViews++;
    currentUser.totalPageViews++;
  } else {
    currentSession.interactions++;
    currentUser.totalInteractions++;
  }
  storeUser(currentUser);
  storeSession(currentSession);
  if (eventQueue.length >= ANALYTICS_CONFIG.batchSize) {
    flushEvents();
  }
};
const flushEvents = () => {
  if (eventQueue.length === 0) return;
  const existingEvents = getStoredEvents();
  const allEvents = [...existingEvents, ...eventQueue];
  storeEvents(allEvents);
  eventQueue = [];
  sendEventsToServer(allEvents.slice(-10));
};
const sendEventsToServer = async (events) => {
  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ events })
    });
  } catch (error) {
    console.warn("Failed to send analytics events to server:", error);
  }
};
const acceptAnalytics = () => {
  console.log("Analytics accepted");
  analyticsConsent.set(true);
  showConsentBanner.set(false);
  Cookies.set("analytics_consent", "true", { expires: 365 });
  Cookies.set("consent_banner_dismissed", "true", { expires: 365 });
  if (typeof window !== "undefined") {
    currentUser = initializeUser();
    currentSession = initializeSession(currentUser.id);
    trackEvent("page_view");
  }
};
const declineAnalytics = () => {
  console.log("Analytics declined");
  analyticsConsent.set(false);
  showConsentBanner.set(false);
  Cookies.set("analytics_consent", "false", { expires: 365 });
  Cookies.set("consent_banner_dismissed", "true", { expires: 365 });
  if (typeof window !== "undefined") {
    localStorage.removeItem("analytics_events");
    const userId = getUserId();
    localStorage.removeItem(`analytics_user_${userId}`);
    sessionStorage.removeItem("portfolio_session_id");
  }
};
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeConsent);
  } else {
    initializeConsent();
  }
  setInterval(flushEvents, ANALYTICS_CONFIG.flushInterval);
  window.addEventListener("beforeunload", flushEvents);
  window.addEventListener("beforeunload", () => {
    if (currentSession) {
      currentSession.endTime = Date.now();
      storeSession(currentSession);
    }
  });
}

const useAnalytics = () => {
  const hasConsent = useStore(analyticsConsent);
  const lang = useStore(currentLanguage);
  const track = useCallback((type, data) => {
    if (hasConsent) {
      trackEvent(type, { ...data, language: lang });
    }
  }, [hasConsent, lang]);
  const trackClick = useCallback((element, section) => {
    track("click", { element, section });
  }, [track]);
  const trackFormSubmit = useCallback((formType, success = true) => {
    track("form_submit", { formType, success });
  }, [track]);
  const trackSectionView = useCallback((section) => {
    track("section_view", { section });
  }, [track]);
  const trackPageView = useCallback((page) => {
    track("page_view", { page });
  }, [track]);
  return {
    track,
    trackClick,
    trackFormSubmit,
    trackSectionView,
    trackPageView,
    hasConsent
  };
};

function Hero() {
  const lang = useStore(currentLanguage);
  const { t } = useTranslations(lang);
  const { trackClick } = useAnalytics();
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "min-h-screen flex items-center justify-center relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/20" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -right-8 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-fade-in-up", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6", children: t("hero.greeting") }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up delay-200", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-white", children: t("hero.title.line1") }),
        /* @__PURE__ */ jsx("span", { className: "block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent", children: t("hero.title.line2") }),
        /* @__PURE__ */ jsx("span", { className: "block text-white", children: t("hero.title.line3") })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400", children: (() => {
        const subtitle = t("hero.subtitle");
        const parts = subtitle.split(/\b(React|Node\.js)\b/);
        return parts.map((part, index) => {
          if (part === "React") {
            return /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-semibold", children: "React" }, index);
          } else if (part === "Node.js") {
            return /* @__PURE__ */ jsx("span", { className: "text-green-400 font-semibold", children: "Node.js" }, index);
          } else {
            return /* @__PURE__ */ jsx("span", { children: part }, index);
          }
        });
      })() }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            onClick: () => trackClick("cta-primary", "hero"),
            className: "group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25",
            children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
              t("hero.cta.primary"),
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#about",
            onClick: () => trackClick("cta-secondary", "hero"),
            className: "px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-300",
            children: t("hero.cta.secondary")
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce delay-1000", children: /* @__PURE__ */ jsx("a", { href: "#about", className: "text-gray-400 hover:text-white transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }) }) })
    ] }) })
  ] });
}

function About() {
  const lang = useStore(currentLanguage);
  const { t } = useTranslations(lang);
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-20 bg-slate-900/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
        t("about.title").split(" ").slice(0, -1).join(" "),
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: t("about.title").split(" ").slice(-1)[0] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 leading-relaxed", children: (() => {
            const description = t("about.description1");
            const parts = description.split(/\b(Full Stack|UX\/UI)\b/);
            return parts.map((part, index) => {
              if (part === "Full Stack") {
                return /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-semibold", children: "Full Stack" }, index);
              } else if (part === "UX/UI") {
                return /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-semibold", children: "UX/UI" }, index);
              } else {
                return /* @__PURE__ */ jsx("span", { children: part }, index);
              }
            });
          })() }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300 leading-relaxed", children: t("about.description2") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mt-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-blue-400 text-lg", children: "💻" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold", children: t("about.points.development.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: t("about.points.development.desc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-purple-400 text-lg", children: "🎨" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold", children: t("about.points.design.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: t("about.points.design.desc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-green-400 text-lg", children: "🚀" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold", children: t("about.points.performance.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: t("about.points.performance.desc") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-orange-400 text-lg", children: "🤝" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold", children: t("about.points.collaboration.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: t("about.points.collaboration.desc") })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8", children: [
          /* @__PURE__ */ jsx("div", { className: "w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-6xl mb-6", children: "👨‍💻" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: "3+" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: t("about.stats.experience") })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: "50+" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: t("about.stats.projects") })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: "24/7" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: t("about.stats.availability") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" })
      ] })
    ] })
  ] }) });
}

function Services() {
  const lang = useStore(currentLanguage);
  const { t } = useTranslations(lang);
  const services = [
    {
      key: "frontend",
      icon: "🌐",
      color: "blue",
      hoverColor: "blue-500/50"
    },
    {
      key: "backend",
      icon: "⚙️",
      color: "green",
      hoverColor: "green-500/50"
    },
    {
      key: "design",
      icon: "🎨",
      color: "purple",
      hoverColor: "purple-500/50"
    },
    {
      key: "mobile",
      icon: "📱",
      color: "orange",
      hoverColor: "orange-500/50"
    },
    {
      key: "saas",
      icon: "☁️",
      color: "indigo",
      hoverColor: "indigo-500/50"
    },
    {
      key: "custom",
      icon: "🛠️",
      color: "pink",
      hoverColor: "pink-500/50"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "services", className: "py-20 bg-slate-950", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
        t("services.title").split(" ").slice(0, -1).join(" "),
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: t("services.title").split(" ").slice(-1)[0] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: t("services.subtitle") }),
      /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-${service.hoverColor} transition-all duration-300 hover:transform hover:scale-105`,
        children: [
          /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br from-${service.color}-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300` }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: `w-16 h-16 bg-${service.color}-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${service.color}-500/30 transition-colors`, children: /* @__PURE__ */ jsx("span", { className: "text-3xl", children: service.icon }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: t(`services.items.${service.key}.title`) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: t(`services.items.${service.key}.description`) }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: Array.from({ length: 4 }, (_, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-400", children: [
              /* @__PURE__ */ jsx("span", { className: `text-${service.color}-400 mr-2`, children: "→" }),
              t(`services.items.${service.key}.features.${i}`)
            ] }, i)) })
          ] })
        ]
      },
      service.key
    )) })
  ] }) });
}

function TeamWork() {
  const lang = useStore(currentLanguage);
  useTranslations(lang);
  const teamWorkContent = {
    es: {
      title: "¿Proyecto Grande?",
      subtitle: "Trabajo en Equipo",
      description: "Para proyectos de mayor envergadura, colaboro con un equipo de desarrolladores especializados. Esto nos permite acelerar los tiempos de entrega y asegurar la calidad en cada aspecto del desarrollo.",
      features: [
        "Equipos escalables según el proyecto",
        "Desarrolladores especializados por área",
        "Metodologías ágiles de desarrollo",
        "Comunicación constante y transparente",
        "Tiempos de entrega optimizados"
      ]
    },
    en: {
      title: "Large Project?",
      subtitle: "Team Work",
      description: "For larger projects, I collaborate with a team of specialized developers. This allows us to accelerate delivery times and ensure quality in every aspect of development.",
      features: [
        "Scalable teams based on project needs",
        "Developers specialized by area",
        "Agile development methodologies",
        "Constant and transparent communication",
        "Optimized delivery times"
      ]
    }
  };
  const content = teamWorkContent[lang];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-blue-950/20 to-purple-950/20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6", children: content.title }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: content.subtitle }) }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed", children: content.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: content.features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl border border-slate-800/50 hover:bg-slate-900/50 transition-all duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm font-bold", children: index + 1 }) }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-medium", children: feature })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto", children: "👨‍💻" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Frontend" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto", children: "⚙️" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Backend" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto", children: "🎨" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "UX/UI" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6 text-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "50%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: lang === "es" ? "Más rápido" : "Faster" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "3x" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: lang === "es" ? "Más capacidad" : "More capacity" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" })
      ] })
    ] })
  ] }) });
}

function Skills() {
  const lang = useStore(currentLanguage);
  const { t } = useTranslations(lang);
  const skillCategories = [
    {
      key: "frontend",
      icon: "⚛️",
      color: "blue",
      skills: [
        { name: "React", percentage: 95 },
        { name: "TypeScript", percentage: 90 },
        { name: "Next.js", percentage: 88 },
        { name: "Tailwind CSS", percentage: 95 }
      ]
    },
    {
      key: "backend",
      icon: "🟢",
      color: "green",
      skills: [
        { name: "Node.js", percentage: 92 },
        { name: "Express.js", percentage: 90 },
        { name: "MongoDB", percentage: 85 },
        { name: "PostgreSQL", percentage: 88 }
      ]
    },
    {
      key: "design",
      icon: "🎨",
      color: "purple",
      skills: [
        { name: "Figma", percentage: 93 },
        { name: "Adobe XD", percentage: 87 },
        { name: "Git & GitHub", percentage: 95 },
        { name: "Docker", percentage: 82 }
      ]
    }
  ];
  const technologies = [
    { icon: "⚛️", name: "React" },
    { icon: "🟢", name: "Node.js" },
    { icon: "📘", name: "TypeScript" },
    { icon: "🔷", name: "Tailwind" },
    { icon: "🎨", name: "Figma" },
    { icon: "📱", name: "React Native" },
    { icon: "🐳", name: "Docker" },
    { icon: "🔄", name: "Git" }
  ];
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-20 bg-slate-900/30", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
        t("skills.title").split(" ").slice(0, -1).join(" "),
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: t("skills.title").split(" ").slice(-1)[0] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: t("skills.subtitle") }),
      /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8 mb-16", children: skillCategories.map((category) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-${category.color}-500/20 rounded-xl flex items-center justify-center mr-4`, children: /* @__PURE__ */ jsx("span", { className: "text-2xl", children: category.icon }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: t(`skills.categories.${category.key}`) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: category.skills.map((skill) => /* @__PURE__ */ jsxs("div", { className: "skill-item", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: skill.name }),
          /* @__PURE__ */ jsxs("span", { className: `text-${category.color}-400 text-sm`, children: [
            skill.percentage,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-700 rounded-full h-2", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 h-2 rounded-full`,
            style: { width: `${skill.percentage}%` }
          }
        ) })
      ] }, skill.name)) })
    ] }, category.key)) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6", children: technologies.map((tech) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-colors group", children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl mb-2 group-hover:scale-110 transition-transform", children: tech.icon }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: tech.name })
    ] }, tech.name)) })
  ] }) });
}

function Contact() {
  const lang = useStore(currentLanguage);
  const { t } = useTranslations(lang);
  const { trackClick, trackFormSubmit } = useAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    const form = e.target;
    const formData = new FormData(form);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      language: lang
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitting(false);
        setShowSuccess(true);
        form.reset();
        trackFormSubmit("contact", true);
        setTimeout(() => setShowSuccess(false), 5e3);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      setIsSubmitting(false);
      setShowError(true);
      setErrorMessage(
        lang === "es" ? "Error al enviar el mensaje. Por favor intenta de nuevo." : "Error sending message. Please try again."
      );
      trackFormSubmit("contact", false);
      setTimeout(() => setShowError(false), 5e3);
    }
  };
  const contactMethods = [
    { key: "email", icon: "📧", color: "blue", href: "mailto:madezdev@gmail.com", value: "madezdev@gmail.com" },
    { key: "whatsapp", icon: "💬", color: "green", href: "https://wa.me/5491133266874", value: "+54 9 (11) 3326-6874" },
    { key: "linkedin", icon: "💼", color: "blue", href: "https://linkedin.com/in/madezdev", value: "/in/madezdev" },
    { key: "github", icon: "🐙", color: "purple", href: "https://github.com/madezdev", value: "/madezdev" }
  ];
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 bg-slate-950", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
        t("contact.title").split(" ").slice(0, -1).join(" "),
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: t("contact.title").split(" ").slice(-1)[0] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: t("contact.subtitle") }),
      /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: t("contact.getInTouch") }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-8", children: t("contact.description") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: contactMethods.map((method) => /* @__PURE__ */ jsx(
          "a",
          {
            href: method.href,
            target: "_blank",
            onClick: () => trackClick(`contact-${method.key}`, "contact"),
            className: `text-gray-400 hover:text-${method.color}-400 transition-colors`,
            children: /* @__PURE__ */ jsxs("div", { className: `flex items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-${method.color}-500/50 transition-colors group`, children: [
              /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-${method.color}-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-${method.color}-500/30 transition-colors`, children: /* @__PURE__ */ jsx("span", { className: `text-${method.color}-400 text-xl`, children: method.icon }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold", children: t(`contact.methods.${method.key}`) }),
                method.value
              ] })
            ] })
          },
          method.key
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3" }),
            /* @__PURE__ */ jsx("span", { className: "text-green-400 font-semibold", children: t("contact.availability.status") })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: t("contact.availability.description") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: t("contact.form.title") }),
        /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-300 mb-2", children: t("contact.form.fields.name") }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  name: "name",
                  required: true,
                  className: "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                  placeholder: t("contact.form.fields.namePlaceholder")
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-300 mb-2", children: t("contact.form.fields.email") }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  className: "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                  placeholder: t("contact.form.fields.emailPlaceholder")
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-300 mb-2", children: t("contact.form.fields.subject") }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "subject",
                name: "subject",
                required: true,
                className: "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: t("contact.form.fields.subjectPlaceholder") }),
                  /* @__PURE__ */ jsx("option", { value: "frontend", children: t("contact.form.subjects.frontend") }),
                  /* @__PURE__ */ jsx("option", { value: "fullstack", children: t("contact.form.subjects.fullstack") }),
                  /* @__PURE__ */ jsx("option", { value: "design", children: t("contact.form.subjects.design") }),
                  /* @__PURE__ */ jsx("option", { value: "mobile", children: t("contact.form.subjects.mobile") }),
                  /* @__PURE__ */ jsx("option", { value: "saas", children: t("contact.form.subjects.saas") }),
                  /* @__PURE__ */ jsx("option", { value: "other", children: t("contact.form.subjects.other") })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "budget", className: "block text-sm font-medium text-gray-300 mb-2", children: t("contact.form.fields.budget") }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "budget",
                name: "budget",
                className: "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: t("contact.form.fields.budgetPlaceholder") }),
                  /* @__PURE__ */ jsx("option", { value: "under-1k", children: t("contact.form.budgets.under1k") }),
                  /* @__PURE__ */ jsx("option", { value: "1k-5k", children: t("contact.form.budgets.1k5k") }),
                  /* @__PURE__ */ jsx("option", { value: "5k-10k", children: t("contact.form.budgets.5k10k") }),
                  /* @__PURE__ */ jsx("option", { value: "10k-plus", children: t("contact.form.budgets.10kplus") }),
                  /* @__PURE__ */ jsx("option", { value: "discuss", children: t("contact.form.budgets.discuss") })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-300 mb-2", children: t("contact.form.fields.message") }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                rows: 5,
                required: true,
                className: "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none",
                placeholder: t("contact.form.fields.messagePlaceholder")
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed",
              children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { children: isSubmitting ? t("contact.form.sending") : t("contact.form.submit") }),
                isSubmitting ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 animate-spin", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) })
              ] })
            }
          )
        ] }),
        showSuccess && /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-green-400", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 13l4 4L19 7" }) }),
          t("contact.form.success")
        ] }) }),
        showError && /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-red-400", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
          errorMessage
        ] }) })
      ] })
    ] })
  ] }) });
}

function Footer() {
  const lang = useStore(currentLanguage);
  const { t } = useTranslations(lang);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const socialLinks = [
    { href: "https://linkedin.com/in/martin-dev", icon: "💼", color: "blue" },
    { href: "https://github.com/martin-dev", icon: "🐙", color: "purple" },
    { href: "https://twitter.com/martin_dev", icon: "🐦", color: "blue" },
    { href: "mailto:madezdev@gmail.com", icon: "📧", color: "red" }
  ];
  const navLinks = [
    { href: "#home", key: "nav.home" },
    { href: "#about", key: "nav.about" },
    { href: "#services", key: "nav.services" },
    { href: "#skills", key: "nav.skills" },
    { href: "#contact", key: "nav.contact" }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("footer", { className: "bg-slate-950 border-t border-slate-800", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center mb-4", children: /* @__PURE__ */ jsx("a", { href: "#home", className: "text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Martin" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6 max-w-md", children: t("footer.description") }),
          /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: socialLinks.map((link, index) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              className: `w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-${link.color}-400 hover:bg-slate-700 transition-all duration-300 group`,
              children: /* @__PURE__ */ jsx("span", { className: "text-lg group-hover:scale-110 transition-transform", children: link.icon })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-4", children: t("footer.navigation") }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, className: "text-gray-400 hover:text-white transition-colors", children: t(link.key) }) }, link.href)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-4", children: t("footer.services") }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: ["frontend", "backend", "design", "mobile", "saas"].map((service, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: t(`footer.servicesList.${index}`) }) }, service)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-slate-800 mt-12 pt-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-sm mb-4 md:mb-0", children: t("footer.copyright") }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 text-sm text-gray-400", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" }),
            t("footer.availableForProjects")
          ] }),
          /* @__PURE__ */ jsx("span", { children: "•" }),
          /* @__PURE__ */ jsx("div", { children: t("footer.madeWith") })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: scrollToTop,
        className: `fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 ${showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`,
        children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 10l7-7m0 0l7 7m-7-7v18" }) })
      }
    )
  ] }) });
}

function CookieConsent() {
  const showBanner = useStore(showConsentBanner);
  const lang = useStore(currentLanguage);
  useTranslations(lang);
  const [showDetails, setShowDetails] = useState(false);
  console.log("CookieConsent render - showBanner:", showBanner);
  const cookieContent = {
    es: {
      title: "🍪 Uso de Cookies",
      description: "Utilizamos cookies para analizar el tráfico del sitio y mejorar tu experiencia. Los datos son completamente anónimos y nos ayudan a crear contenido más relevante.",
      whatWeTrack: "¿Qué rastreamos?",
      trackingItems: [
        "Páginas visitadas y tiempo de permanencia",
        "Interacciones con elementos (clics, scroll)",
        "Idioma preferido",
        "Tipo de dispositivo y resolución",
        "País de origen (aproximado)"
      ],
      privacy: "Tu privacidad es importante para nosotros. No recopilamos información personal identificable.",
      accept: "Aceptar cookies",
      decline: "Rechazar",
      showDetails: "Ver detalles",
      hideDetails: "Ocultar detalles"
    },
    en: {
      title: "🍪 Cookie Usage",
      description: "We use cookies to analyze site traffic and improve your experience. The data is completely anonymous and helps us create more relevant content.",
      whatWeTrack: "What do we track?",
      trackingItems: [
        "Pages visited and time spent",
        "Interactions with elements (clicks, scroll)",
        "Preferred language",
        "Device type and resolution",
        "Country of origin (approximate)"
      ],
      privacy: "Your privacy is important to us. We do not collect personally identifiable information.",
      accept: "Accept cookies",
      decline: "Decline",
      showDetails: "Show details",
      hideDetails: "Hide details"
    }
  };
  const content = cookieContent[lang];
  if (!showBanner) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl", children: /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: content.title }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4 leading-relaxed", children: content.description }),
    showDetails && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-white font-medium mb-3", children: content.whatWeTrack }),
      /* @__PURE__ */ jsx("ul", { className: "text-sm text-gray-400 space-y-1", children: content.trackingItems.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-blue-400 mt-1", children: "•" }),
        /* @__PURE__ */ jsx("span", { children: item })
      ] }, index)) }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-3 italic", children: content.privacy })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-start sm:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              console.log("Accept button clicked");
              acceptAnalytics();
              console.log("After acceptAnalytics - showBanner:", showConsentBanner.get());
            },
            className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200",
            children: content.accept
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              console.log("Decline button clicked");
              declineAnalytics();
              console.log("After declineAnalytics - showBanner:", showConsentBanner.get());
            },
            className: "px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors duration-200",
            children: content.decline
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowDetails(!showDetails),
          className: "text-gray-400 hover:text-blue-400 text-xs underline transition-colors duration-200",
          children: showDetails ? content.hideDetails : content.showDetails
        }
      )
    ] })
  ] }) }) }) }) });
}

function AnalyticsTracker() {
  const hasConsent = useStore(analyticsConsent);
  const lang = useStore(currentLanguage);
  useEffect(() => {
    if (!hasConsent) return;
    trackEvent("page_view", {
      language: lang
    });
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round(scrollTop / docHeight * 100);
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          trackEvent("scroll", {
            scrollDepth: scrollPercent,
            language: lang
          });
        }
      }
    };
    const observedSections = /* @__PURE__ */ new Set();
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            if (sectionId && !observedSections.has(sectionId)) {
              observedSections.add(sectionId);
              trackEvent("section_view", {
                section: sectionId,
                language: lang
              });
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px"
      }
    );
    const startTime = Date.now();
    const trackInactivity = () => {
    };
    const trackActivity = () => {
    };
    window.addEventListener("scroll", trackScrollDepth, { passive: true });
    window.addEventListener("blur", trackInactivity);
    window.addEventListener("focus", trackActivity);
    window.addEventListener("visibilitychange", () => {
    });
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => sectionObserver.observe(section));
    const trackSessionEnd = () => {
      const duration = Date.now() - startTime;
      trackEvent("page_view", {
        duration,
        language: lang
      });
    };
    window.addEventListener("beforeunload", trackSessionEnd);
    return () => {
      window.removeEventListener("scroll", trackScrollDepth);
      window.removeEventListener("blur", trackInactivity);
      window.removeEventListener("focus", trackActivity);
      window.removeEventListener("beforeunload", trackSessionEnd);
      sectionObserver.disconnect();
    };
  }, [hasConsent, lang]);
  useEffect(() => {
    if (hasConsent) {
      trackEvent("language_change", {
        language: lang
      });
    }
  }, [lang, hasConsent]);
  return null;
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Martin - Desarrollador Full Stack & Dise\xF1ador UX/UI", "description": "Desarrollador Full Stack especializado en React, Node.js y dise\xF1o UX/UI. Creo aplicaciones web modernas, r\xE1pidas y seguras junto a mi equipo para empresas que buscan soluciones digitales escalables.", "keywords": [
    "desarrollador full stack",
    "dise\xF1ador UX/UI",
    "React",
    "Node.js",
    "desarrollo web",
    "freelancer",
    "aplicaciones web",
    "TypeScript",
    "JavaScript",
    "programador",
    "frontend",
    "backend",
    "dise\xF1o web",
    "portfolio"
  ], "type": "website", "lang": "es", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/Navigation.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/Hero.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", About, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/About.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Services", Services, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/Services.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TeamWork", TeamWork, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/TeamWork.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", Skills, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/Skills.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", Contact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/Contact.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/Footer.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CookieConsent", CookieConsent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/CookieConsent.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "AnalyticsTracker", AnalyticsTracker, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/Apps/portfolio/src/components/AnalyticsTracker.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })}  ` })}`;
}, "/Users/madez/Documents/Apps/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/madez/Documents/Apps/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
