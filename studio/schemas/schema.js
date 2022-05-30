/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
/* eslint-enable import/no-unresolved */

import { hero } from './content'
import { embedHtml, simplePortableText } from './editor'
import { language } from './i18n'
import { siteSettings } from './site-settings.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    embedHtml,
    hero,
    language,
    simplePortableText,
    siteSettings
  ])
})
