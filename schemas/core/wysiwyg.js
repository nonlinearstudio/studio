import {defineField} from 'sanity'

export default defineField({
  name: 'wysiwyg',
  type: 'array',
  title: 'Wysiwyg',
  of: [
    {
      lists: [
        {title: 'Bullet', value: 'bullet'},
        // {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Italic', value: 'em'},
          {title: 'Strong', value: 'strong'},
        ],
        // annotations: [],
      },
      styles: [{title: 'Normal', value: 'normal'}],

      type: 'block',
    },
  ],
})
