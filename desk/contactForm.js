import React from 'react'
import defineStructure from '../utils/defineStructure'

export default defineStructure((S) =>
  S.listItem()
    .title('Contact Forms')
    .schemaType('contactForm')
    .child(S.documentTypeList('contactForm')),
)
