import Sanity from '@sanity/desk-tool/structure-builder'

const specialized = ['hero'] //, 'hero' ]

console.log('Sanity.documentList()', Sanity.documentList())
console.log('Sanity.documentTypeList(`hero`)', Sanity.documentTypeList('hero'))

export default () =>
  Sanity.list()
    .title('Content')
    .items([
      Sanity.listItem()
        .title('Heroes')
        .child(
          Sanity.documentList()
            .title(`Heroes`)
            .schemaType('hero')
            .filter('_type == "hero" && __i18n_lang == $baseLanguage')
            .params({ baseLanguage: `es` })
            .canHandleIntent(Sanity.documentTypeList('hero').getCanHandleIntent())
        ),
      ...Sanity.documentTypeListItems().filter(item => ![...specialized].includes(item.getId()))
    ])
