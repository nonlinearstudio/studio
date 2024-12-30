import {InfoOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.hero',
  title: 'Hero Component',
  type: 'object',
  description: 'The fields that are not filled will not show up',
  icon: InfoOutlineIcon,

  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'settings',
      title: 'Settings',
      options: {collapsible: true, collapsed: true},
    },
  ],
  fields: [
    // Settings: Hide/Show Button
    defineField({
      title: 'Hide Component',
      name: 'hideComponent',
      type: 'boolean',
      description: 'Toggle to hide or show the component',
      fieldset: 'settings',
    }),

    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      fieldset: 'content',
    }),

    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
      fieldset: 'content',
    }),

    defineField({
      title: 'Desktop Video',
      name: 'desktopVideo',
      type: 'string',
      description: 'Paste the video URL here (Vimeo only) ',
      fieldset: 'content',
    }),
    defineField({
      title: 'Mobile Video',
      name: 'mobileVideo',
      type: 'string',
      description: 'Paste the video URL here (Vimeo only) ',
      fieldset: 'content',
    }),
  ],
})
