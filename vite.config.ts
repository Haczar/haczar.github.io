import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'haczar.github.io', // replace with your actual repo name
  plugins: [react()],
});
