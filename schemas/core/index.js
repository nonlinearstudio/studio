import asset from './asset'
import linkExternal from './linkExternal'
import linkInternal from './linkInternal'
import linkEmail from './linkEmail'
import linkHash from './linkHash'
import wysiwyg from './wysiwyg'
import seoPage from './seoPage'
import form from './form'

const types = [seoPage, asset, linkExternal, linkInternal, linkEmail, linkHash, wysiwyg, ...form]

export default types
