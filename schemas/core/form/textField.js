import {TextIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Text field',
  name: 'textField',
  type: 'object',
  icon: TextIcon,
  fields: [
    {
      title: 'Required',
      name: 'isRequired',
      type: 'boolean',
      description: 'Is this field required?',
      initialValue: false,
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Place Holder',
      name: 'placeHolder',
      type: 'string',
    },
  ],
  
})