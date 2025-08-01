import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Check if we're in production (GitHub Pages) or development
const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS;

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://zenai.coach',
  // No base path needed when using custom domain with GitHub Pages
  base: undefined,
}); 