import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Two real HTML entry points keep the site static: no client-side router needed.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        prices: fileURLToPath(new URL("./prices.html", import.meta.url)),
      },
    },
  },
});
