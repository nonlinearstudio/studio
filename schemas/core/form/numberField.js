import {HashIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Number field',
  name: 'numberField',
  type: 'object',
  icon: HashIcon,
  fields: [
    {
      title: 'Number Text',
      name: 'numberText',
      type: 'number',
    },
  ],
})
