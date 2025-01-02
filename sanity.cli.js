import path from "path";
import { fileURLToPath } from "url";
import { defineCliConfig } from "sanity/cli";
import { config } from "./config";

export default defineCliConfig({
  api: {
    ...config,
  },
  vite: (setup) => {
    if (!setup.resolve) setup.resolve = {};

    setup.resolve.alias = {
      ...(setup.resolve.alias ?? {}),
      "@": path.resolve(__dirname, "..", "studio"),
    };
    return setup;
  },
});
