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
    imageService: true,
    includeFiles: ['./dist/**/*'],
    edgeMiddleware: false  // Disable Edge middleware to use Node.js runtime
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
    ssr: {
      // Improve SSR build performance
      noExternal: ['@astrojs/vercel']
    }
  },

  integrations: [react()]
});