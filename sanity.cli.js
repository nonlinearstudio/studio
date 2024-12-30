import path from "path";
import { fileURLToPath } from "url";
import { defineCliConfig } from "sanity/cli";
import { config } from "./config";

export default defineCliConfig({
  api: {
    ...config,
  },
  vite: (config) => {
    if (!config.resolve) config.resolve = {};

    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(__dirname, "..", "studio"),
    };
    return config;
  },
});
