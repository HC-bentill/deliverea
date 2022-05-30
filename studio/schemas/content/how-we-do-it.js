export const howWeDoIt = {
  name: 'how-we-do-it',
  type: 'document',
  title: 'How we do it',
  i18n: true,
  initialValue: {
    __i18n_lang: 'es'
  },
  fields: [
    {
      name: 'stage',
      type: 'number',
      title: 'Stage'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline'
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline',
    }
  ]
}
