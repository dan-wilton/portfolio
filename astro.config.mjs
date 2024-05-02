import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react({
      include: ["**/react/*"],
    }),
  ],
  site: "https://dan-wilton.github.io",
  base: process.env.URL_PREFIX,
  trailingSlash: "always",
  vite: {
    ssr: {
      noExternal: ["kbar", "vanta" /*, 'other-lib-you-need'*/],
    },
  },
});
