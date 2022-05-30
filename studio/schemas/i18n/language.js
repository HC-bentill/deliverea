import bcp47 from 'bcp47'

export const language = {
  name: 'language',
  type: 'document',
  title: 'Language',
  fields: [
    {
      name: 'code',
      type: 'string',
      title: 'Code',
      description: 'A valid language code like en, es-ES',
      validation: rule => rule.custom(lang => bcp47.parse(lang) ? true : 'Please use a valid language code')
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ]
}
