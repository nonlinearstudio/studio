import { HashIcon } from "@sanity/icons";
import { defineField } from "sanity";
import { config } from "@/config";

const PAGE_REFERENCES = config.sitePages.map((page) => {
  return {
    type: page,
  };
});
const VARIANTS = [
  { title: "Contact Form", value: "contact" },
  { title: "Membership Overview ", value: "overview" },
];

export default defineField({
  title: "Hash Link",
  name: "linkHash",
  type: "object",
  icon: HashIcon,
  fields: [
    // Title
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // Reference
    {
      name: "reference",
      type: "reference",
      weak: true,
      //validation: (Rule) => Rule.required(),
      to: PAGE_REFERENCES,
    },
    {
      title: "Hash",
      name: "hash",
      type: "string",
      description: "Add the hash link from the list ",
      validation: (Rule) => Rule.required(),
      options: {
        direction: "horizontal",
        layout: "select",
        list: VARIANTS,
      },
    },
  ],
  preview: {
    select: {
      reference: "reference",
      referenceTitle: "reference.title",
      referenceType: "reference._type",
      title: "title",
    },
    prepare(selection) {
      const { reference, referenceTitle, referenceType, title } = selection;

      let subtitle = [];
      if (reference) {
        subtitle.push(referenceTitle);
      } else {
        subtitle.push("(Nonexistent document reference)");
      }

      return {
        // media: image,
        subtitle: subtitle.join(" "),
        title,
      };
    },
  },
});
