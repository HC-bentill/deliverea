/* eslint-disable-next-line import/no-unresolved */
import sanityClient from 'part:@sanity/base/client'
import config from '../lib/config.js'

const client = sanityClient.withConfig(config)

const fetchDocuments = (start, end) =>
  client.fetch(`*[!(_id in path("_.**"))][${start}...${end}]`)

const loadBatch = async (batch = 1) => {
  const start = (batch - 1) * 100
  const end = batch * 100
  console.log('fetching docs', start, end)
  const documents = await fetchDocuments(start, end)

  console.log(`batch ${batch}----`)
  console.log('documents', documents)

  if (documents.length === 0) {
    console.log('No more content to load!')
    return null
  }

  const next = batch + 1;
  console.log('next', next)
  return loadBatch(next)
}

loadBatch().catch((err) => {
  console.error(err)
  process.exit(1)
})
