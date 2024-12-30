import {defineField} from 'sanity'

export default defineField({
  name: 'seo.page',
  title: 'SEO',
  type: 'object',
  description: 'This is the default SEO information for this Page.',
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      hidden: true,
    }),

  ],
  //validation: (Rule) => Rule.required(),
})
