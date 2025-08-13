// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    includeFiles: ['.env', '.env.*']
  }),
  site: 'https://www.madez.dev',
  vite: {
    plugins: [tailwindcss()],
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

  integrations: [react()]
});