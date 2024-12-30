import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { structure, defaultDocumentNode } from "./desk";
import { media } from "sanity-plugin-media";
import { tags } from "sanity-plugin-tags";
import { openLiveSite } from "./utils/openLiveSite";
import { webhooksTrigger } from "sanity-plugin-webhooks-trigger";
import { config } from "./config";
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

const devOnlyPlugins = [visionTool({ defaultApiVersion: "2021-06-07" })];

export default defineConfig({
  name: config.studioName,
  title: config.studioName,
  ...config,
  plugins: [
    structureTool({
      structure,
      defaultDocumentNode,
    }),
    tags({}),
    media(),
    webhooksTrigger({
      title: "Deploy site",
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, { schemaType }) => {
      const pages = config.sitePages;
      const page = pages.find((page) => page === schemaType);
      const hasPage = typeof page === "string" ? true : false;

      if (hasPage) {
        return [...prev, openLiveSite];
      }
      return prev;
    },
  },
});
