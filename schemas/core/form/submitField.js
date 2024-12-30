import {CheckmarkCircleIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Submit field',
  name: 'submitField',
  type: 'object',
  icon: CheckmarkCircleIcon,
  fields: [
    {
      title: 'Submit Text',
      name: 'submitText',
      type: 'string',
    },
  ],
  
})