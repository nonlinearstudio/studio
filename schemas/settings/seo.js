import {defineField} from 'sanity'

export default defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  description:
    'This is the default SEO information for the site. Is recommended to add this information on each page.',
  
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
      description: 'The base URL of the site, including the protocol (e.g. https://)',
      validation: (Rule) =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
