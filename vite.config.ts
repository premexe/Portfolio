import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-site/', // important for GitHub Pages
  plugins: [react()],
});
