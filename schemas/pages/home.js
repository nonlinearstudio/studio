import { HomeIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,

  fields: [
    // Hero
    defineField({
      name: "hero",
      title: "Hero Module",
      type: "module.hero",
    }),
    // Components
    defineField({
      name: "components",
      title: "Page Components",
      type: "array",
      of: [{ type: "module.forms" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        subtitle: "Index",
        title: "Home",
      };
    },
  },
});
