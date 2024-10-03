import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import circleDependency from "vite-plugin-circular-dependency";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), circleDependency({ circleImportThrowErr: false })],
  resolve: {
    alias: {
      // This allows you to use absolute imports based on the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "build"),
    minify: true,
    sourcemap: false, // Set to true if you need source maps
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          styledComponents: ["styled-components"],
          stripe: ["stripe"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
