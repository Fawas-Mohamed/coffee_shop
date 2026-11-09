import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set VITE_BASE (e.g. "/coffee1/") when deploying under a sub-path such as GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  // The original stylesheets contain old-IE hacks (*zoom, *border-...) that the CSS minifier rejects.
  // Leaving CSS unminified keeps it exactly as written.
  build: { cssMinify: false },
});
