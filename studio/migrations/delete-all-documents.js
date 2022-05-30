/* eslint-disable-next-line import/no-unresolved */
import sanityClient from 'part:@sanity/base/client'
import config from '../lib/config.js'

const client = sanityClient.withConfig(config)

const fetchDocuments = () =>
  client.fetch(`*[!(_id in path("_.**"))][0...100]`)

const deleteBatch = async () => {
  const documents = await fetchDocuments()
  if (documents.length === 0) {
    console.log('No more content to delete!')
    return null
  }

  for (const { _id } of documents) {
    await client.delete(_id)
  }

  return deleteBatch()
}

deleteBatch().catch((err) => {
  console.error(err)
  process.exit(1)
})
