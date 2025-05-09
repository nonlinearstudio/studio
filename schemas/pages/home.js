import { HomeIcon } from "@sanity/icons"
import { defineField } from "sanity"

export default defineField({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,

  fields: [
    // Title
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the page.",
      validation: Rule => Rule.required(),
    }),
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
      of: [{ type: "module.forms" }, { type: "module.richText" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        subtitle: "Index",
        title: "Home",
      }
    },
  },
})
