import { DocumentTextIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  name: "module.richText",
  type: "object",
  title: "Rich Text",
  icon: DocumentTextIcon,
  fields: [
    {
      name: "customtext",
      type: "array",
      of: [
        {
          type: "block",
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
          styles: [
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "Normal", value: "normal" },
          ],
        },
      ],
    },
  ],
});
