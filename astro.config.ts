import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://newtytf.com",
  vite: {
    ssr: {
      external: [
        // "@mui/material",
        // "@mui/utils",
        // "@emotion/react",
        // "@emotion/styled",
      ],
    },
  },
  integrations: [react()],
  adapter: cloudflare(),
});
