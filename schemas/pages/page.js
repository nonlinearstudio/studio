import {DocumentTextIcon, DocumentsIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {getSource} from '../../utils/getSource'
import {getSlug} from '../../utils/getSlug'

export default defineType({
  name: 'page',
  title: 'Page',
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
    // Parent Page
    defineField({
      name: 'parentPage',
      title: 'Parent Page',
      type: 'reference',
      description: 'If this is a subpage please choose a parent page',
      to: [{type: 'page'}],
    }),

    //Slug
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: getSource,
        slugify: getSlug,
      },
    }),
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero Module',
      type: 'module.hero',
    }),

    // Default Template Fields
    defineField({
      name: 'components',
      title: 'Page Components',
      type: 'array',
      of: [{type: 'module.forms'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      parent: 'parentPage',
    },
    prepare({title, slug, parent}) {
      let subtitle = parent ? 'Sub Page' : 'Main Page'
      let media = parent ? DocumentsIcon : DocumentTextIcon

      return {
        title,
        subtitle,
        media,
      }
    },
  },
})
