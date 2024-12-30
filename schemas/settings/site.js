import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,

  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description:
        'The name of the company or organization. This will be used on the site title and meta tags.',
    }),

    defineField({
      name: 'seo',
      title: 'Site Seo',
      type: 'seo',
    }),

    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      description: 'Add links to your social media profiles.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),

            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'private',
      title: 'Private Policy',
      description: 'Link to the private policy page.',
      type: 'linkInternal',
    }),

    defineField({
      name: 'terms',
      title: 'Terms',
      description: 'Link to the terms page.',
      type: 'linkInternal',
    }),
  ],
})
