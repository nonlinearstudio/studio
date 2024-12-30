import {CircleIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Toggle field',
  name: 'toggleField',
  type: 'object',
  icon: CircleIcon,
  fields: [
    {
      title: 'Toggle Text',
      name: 'toggleText',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(2).max(2),
    },
  ],
})
