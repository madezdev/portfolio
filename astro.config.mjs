// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Server-rendered for API routes
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://www.madez.dev',
  
  vite: {
    plugins: [],
    // Other vite config remains the same
    server: {
      https: {
        key: './localhost+2-key.pem',
        cert: './localhost+2.pem',
      }
    },
    build: {
      // Ensure sourcemaps are generated for better debugging
      sourcemap: true
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  },

  integrations: [react(), tailwind()]
});