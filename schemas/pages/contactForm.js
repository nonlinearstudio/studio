import {CommentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {validateSlug} from '../../utils/validateSlug'

export default defineType({
  name: 'contactForm',
  title: 'Contact Forms',
  type: 'document',
  icon: CommentIcon,
  fields: [
    // Name
    defineField({
      name: 'name',
      title: 'Form Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Form Content
    defineField({
      name: 'formHeader',
      title: 'Form Header',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        },
      ],
    }),

    // Default Template Fields
    defineField({
      name: 'components',
      title: 'Form Builder',
      type: 'array',
      of: [
        {type: 'textField'},
        {type: 'emailField'},
        {type: 'submitField'},
        {type: 'numberField'},
        {type: 'toggleField'},
      ],
    }),

    // Form Messages

    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Message',
          type: 'text',
          rows: 3,
        },
      ],
    }),

    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'error',
          title: 'Message',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'legal',
      title: 'Legal',
      type: 'wysiwyg',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({title, type, subject}) {
      return {
        title,
      }
    },
  },
})
