import {EarthGlobeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Email Address',
  name: 'linkEmail',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    // Title
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // URL
    {
      name: 'email',
      title: 'Email address',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      url: 'email',
    },
    prepare(selection) {
      const {title, url} = selection

      let subtitle = []
      if (url) {
        subtitle.push(`→ ${url}`)
      }

      return {
        // media: image,
        subtitle: subtitle.join(' '),
        title,
      }
    },
  },
})
