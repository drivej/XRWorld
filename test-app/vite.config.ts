import basicSsl from "@vitejs/plugin-basic-ssl";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [basicSsl(), react()],
  server: {
    host: true,
    https: true
  }
})

