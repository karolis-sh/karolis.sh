import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { transformerMetaHighlight } from '@shikijs/transformers';

export default defineConfig({
  site: 'https://karolis.sh',
  integrations: [sitemap()],
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      transformers: [transformerMetaHighlight()],
    },
  },
});
