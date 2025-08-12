// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Dynamically set base depending on environment
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/Ecommerce1/' : '/', // '/' for local, '/Ecommerce1/' for GitHub Pages
}));
