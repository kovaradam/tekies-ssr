import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind({
    // Example: Allow writing nested CSS declarations
    // alongside Tailwind's syntax
    nesting: true
  }), react()]
});