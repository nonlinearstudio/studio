import {InsertAboveIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Select field',
  name: 'selectField',
  type: 'object',
  icon: InsertAboveIcon,
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
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [{type: 'string'}]
    },
    

  ],
  
})