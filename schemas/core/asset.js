import {ImageIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Asset',
  name: 'asset',
  type: 'object',
  icon: ImageIcon,
  fields: [
    // Image
    {
      title: 'Asset',
      name: 'image',
      type: 'image',
      options: {
          metadata: ['palette'],
      },
    },
    // Alt Text
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      description:
      'A short description of the image that is important for accessibility and SEO',
      validation: (Rule) => Rule.required(),
    },
    
  ],
  
})
