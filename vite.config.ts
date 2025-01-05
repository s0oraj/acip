import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true // Add this for routing support
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Add this for better optimization
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Add this for better module compatibility
    },
  },
  preview: {
    historyApiFallback: true // Add this for preview mode routing
  }
}));