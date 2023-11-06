import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://theoffseclibrary.hdks.org",
  integrations: [tailwind(), preact()]
});