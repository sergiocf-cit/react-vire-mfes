// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig( {
  
  plugins: [
    react(),
    federation({
      name: 'remoteSearch',
      filename: 'remoteSearch.js',
      // Modules to expose
      exposes: {
        "./Search": "./src/components/Search.tsx",
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@markets': path.resolve(__dirname, 'src/markets'),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
  },
  server: {
    port: 5001,
  },
});