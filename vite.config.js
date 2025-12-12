import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        // Generate source maps for debugging but not in production
        sourcemap: false,
        // Minify for production
        minify: 'terser',
        terserOptions: {
            compress: {
                // Remove console.log in production for security
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    // Preview server headers (for testing production build locally)
    preview: {
        headers: {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
    }
})
