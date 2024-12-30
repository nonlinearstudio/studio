import {EnvelopeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  title: 'Email field',
  name: 'emailField',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    {
      title: 'Required',
      name: 'isRequired',
      type: 'boolean',
      description: 'Is this field required?',
      initialValue: true,
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