export const siteSettings = {
  name: 'site-settings',
  type: 'document',
  title: 'Site settings',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: ['update', 'publish'],
  fieldsets: [{ name: 'footer', title: 'Footer' }],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    {
      name: 'footerText',
      type: 'simplePortableText',
      fieldset: 'footer',
    }
  ],
};
