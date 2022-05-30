export const whatWeDo = {
  name: 'what-we-do',
  type: 'document',
  title: 'What we do',
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
      name: 'icon',
      type: 'image',
      title: 'Icon',
      options: {
        hotspot: true,
      },
    }
  ]
}
