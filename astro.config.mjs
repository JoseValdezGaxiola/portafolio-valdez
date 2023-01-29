import { defineConfig } from "astro/config"
import astroI18next from "astro-i18next"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

import sitemap from "@astrojs/sitemap"

export default defineConfig({
  integrations: [tailwind(), astroI18next(), sitemap()],
  site: "https://josevaldez.dev",
  server: {
    port: 5000,
    host: true,
  },
})
