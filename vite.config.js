import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* High-quality optimization settings */
      png: {
        // High quality PNG compression
        quality: 85,
      },
      jpeg: {
        // High quality JPEG compression
        quality: 92,
      },
      jpg: {
        // High quality JPG compression
        quality: 92,
      },
      webp: {
        // Convert to WebP with excellent quality
        quality: 92,
      },
      cache: false,
      cacheLocation: undefined,
    }),
  ],
  build: {
    // Increase chunk size warning limit since we have image assets
    chunkSizeWarningLimit: 1000,
  },
})
