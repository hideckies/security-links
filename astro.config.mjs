import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://theoffseclibrary.hdks.org",
  integrations: [
    tailwind(),
    preact(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});