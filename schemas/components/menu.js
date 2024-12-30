import {MenuIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MenuIcon,

  fields: [
    // Menu
    defineField({
      name: 'mainMenu',
      title: 'Main Menu',
      type: 'object',
      fields: [
        // Links
        defineField({
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'Index',
        title: 'Menu',
      }
    },
  },
})
