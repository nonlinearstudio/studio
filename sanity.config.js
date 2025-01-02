import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { tags } from "sanity-plugin-tags";
import { webhooksTrigger } from "sanity-plugin-webhooks-trigger";
import { schemaTypes } from "./schemas";
import { structure, defaultDocumentNode } from "./desk";
import { openLiveSite } from "./utils/openLiveSite";
import { config } from "./config";

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
