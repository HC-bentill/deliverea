export const hero = {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  i18n: true,
  initialValue: {
    __i18n_lang: 'es'
  },
  fields: [
    {
      name: 'headline',
      type: 'string',
      title: 'Headline'
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cta',
      type: 'url',
      title: 'Call to action'
    }
  ]
}
