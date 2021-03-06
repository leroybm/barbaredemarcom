import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import TerapiaIndividualPreview from './preview-templates/TerapiaIndividualPreview'
import TerapiaDeCasalPreview from './preview-templates/TerapiaIndividualPreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('terapia-individual', TerapiaIndividualPreview)
CMS.registerPreviewTemplate('terapia-de-casal', TerapiaDeCasalPreview)
