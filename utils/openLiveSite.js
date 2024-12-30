import {RocketIcon} from '@sanity/icons'
import {getBaseURL} from './getBaseURL'

export function openLiveSite(props) {
  const baseUrl = getBaseURL()
  const path = new URL(baseUrl)

  if (props.type == 'home') {
    path.pathname = '/'
  } else if (props.type == 'post' && props.published) {
    path.pathname = `/post/${props.published.slug.current}`
  } else if (props.published) {
    path.pathname = props.published.slug.current
  } else {
    path.pathname = '/'
  }

  return {
    label: 'Open Page',
    icon: RocketIcon,
    onHandle: () => {
      const {id} = props.draft || props.published
      const openPreview = () => {
        const previewUrl = path.href
        window.open(previewUrl, '_blank')
      }
      openPreview()
    },
  }
}
