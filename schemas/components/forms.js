import { EnvelopeIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.forms",
  type: "object",
  title: "Forms Block",
  icon: EnvelopeIcon,
  fieldsets: [
    {
      name: "content",
      title: "Content",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "settings",
      title: "Settings",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      title: "Hide Component",
      name: "hideComponent",
      type: "boolean",
      description: "Toggle to hide or show the component",
      fieldset: "settings",
      initialValue: false,
    }),

    defineField({
      title: "Forms",
      name: "forms",
      type: "reference",
      fieldset: "content",
      to: [{ type: "contactForm" }],
    }),
  ],
});
