// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://moaz.net",
  integrations: [mdx()],
  vite: {
    plugins: [tailwind()],
  },
});
