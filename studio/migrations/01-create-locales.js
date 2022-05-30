/* eslint-disable-next-line import/no-unresolved */
import sanityClient from 'part:@sanity/base/client'
import config from '../lib/config.js'

const client = sanityClient.withConfig(config)

const createLocales = async (docs) => {
  const transaction = client.transaction()

  for (const doc of docs) {
    await transaction.createOrReplace(doc)
  }

  await transaction.commit()
}

const english = {
  _id: '6a7c8f79-c8d3-44b4-90cd-4b93df67d205',
  _type: 'language',
  code: 'en',
  name: 'English (EN)'
}

const spanish = {
  _id: 'd4ae0fe0-9ef9-4dd0-b52e-dd78d64ba526',
  _type: 'language',
  code: 'es',
  name: 'Spanish (ES)'
}

const documents = [ english, spanish ]

createLocales(documents).catch((err) => {
  console.error(err)
  process.exit(1)
})
