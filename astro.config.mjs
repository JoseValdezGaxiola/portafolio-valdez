import { defineConfig } from "astro/config"
<<<<<<< HEAD
import astroI18next from "astro-i18next"
=======
>>>>>>> main

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  integrations: [tailwind(), astroI18next()],
=======
  integrations: [tailwind()],
  site: "https://josevaldezgaxiola.github.io",
>>>>>>> main

  server: { port: 5000, host: true },
})
