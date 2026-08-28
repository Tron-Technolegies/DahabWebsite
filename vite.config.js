import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import fs from "fs";
import path from "path";

export default defineConfig({
  build: {
    cssCodeSplit: false, // ✅ Combine all CSS into one file
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
