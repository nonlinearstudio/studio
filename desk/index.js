import CustomIframePreview from '../utils/CustomIframePreview'
import {getPreviewUrl} from '../utils/getPreviewUrl'

export const defaultDocumentNode = (S, {schemaType, documentId}) => {
  if (documentId) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(CustomIframePreview)
        .options({
          url: () => getPreviewUrl(documentId),
          defaultSize: 'desktop',
          reload: {
            button: true,
          },
        })
        .title('Desktop'),
      S.view
        .component(CustomIframePreview)
        .options({
          url: () => getPreviewUrl(documentId),
          defaultSize: 'mobile',
          reload: {
            button: true,
          },
        })
        .title('Mobile'),
    ])
  }
}

// Default Pages
import settings from './settings'
import home from './home'
import page from './page'
import menu from './menu'
import legal from './legal'
import contactForm from './contactForm'

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      settings(S, context),
      menu(S, context),
      home(S, context),
      page(S, context),
      S.divider(),
      contactForm(S, context),
      S.divider(),
      legal(S, context),
    ])
