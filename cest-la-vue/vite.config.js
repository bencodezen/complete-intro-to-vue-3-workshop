import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

import { defineConfig } from "vite";

import { createHtmlPlugin } from "vite-plugin-html";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // register vueDevTools before createHtmlPlugin
    vueDevTools(),
    createHtmlPlugin({}),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
