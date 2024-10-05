import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import circleDependency from 'vite-plugin-circular-dependency';
// import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    circleDependency({ circleImportThrowErr: false }),
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
  build: {
    outDir: path.resolve(__dirname, 'build'),
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          styledComponents: ['styled-components'],
          stripe: ['stripe'],
          firebase: ['firebase/app'],
          firestore: ['firebase/firestore'],
          auth: ['firebase/auth'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
