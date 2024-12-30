import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {validateSlug} from '../../utils/validateSlug'

export default defineType({
  name: 'legal',
  title: 'Legal',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // SEO
    defineField({
      name: 'seo',
      title: 'Seo',
      type: 'seo.page',
    }),
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Slug
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: validateSlug,
    }),

    //Last updated
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),

    // Default Template Fields
    defineField({
      name: 'components',
      title: 'Page Components',
      type: 'array',
      of: [],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({title, slug}) {
      return {
        title,
      }
    },
  },
})
