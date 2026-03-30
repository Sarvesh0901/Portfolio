import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Vite 8 with Rolldown - 10-30x faster builds!
    target: 'esnext',
    minify: false, // Rolldown handles minification better
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          ui: ['lucide-react', 'tailwind-merge', 'clsx', 'class-variance-authority'],
          radix: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toggle',
            '@radix-ui/react-tooltip',
          ],
        },
      },
    },
    // Vite 8 specific optimizations
    modulePreload: {
      polyfill: false,
    },
  },
  server: {
    host: 'localhost',
    // Vite 8 HMR improvements
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
  // Vite 8 performance optimizations
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
})
