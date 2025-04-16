import imageUrlBuilder from "@sanity/image-url"
import queries from "../data/queries"
import { createClient } from "@sanity/client"
import { config } from "../config"

const SITE_PAGES = config.sitePages
const token = process.env.SANITY_STUDIO_TOKEN
const prodClient = createClient({
  ...config,
  useCdn: true,
  perspective: "published",
  token: token,
})

const previewClient = createClient({
  ...config,
  useCdn: false,
  perspective: "previewDrafts",
  token: token,
})

export const client = prodClient

const builder = imageUrlBuilder(client)

export async function getQuery(query) {
  const response = await prodClient.fetch(`${query}`)
  return response
}

export async function getByType(type, isPreview = false) {
  const client = isPreview ? previewClient : prodClient
  const query = queries[type]
  const groq = `*[_type == '${type}'][0]${query}`
  const response = await client.fetch(groq)
  return response
}

export async function getAll(all, isPreview = false) {
  const client = isPreview ? previewClient : prodClient
  const query = queries[all]
  const groq = `*[_type == '${all}']|order(orderRank)${query}`
  const response = await client.fetch(groq)
  return response
}

export async function getByslug(slug, isPreview = false, type = "page") {
  const client = isPreview ? previewClient : prodClient
  const query = queries[type]

  // Need to test if this is working
  const groq = `*[_type in ${JSON.stringify(SITE_PAGES)}  && slug.current == '${slug}'][0]${query}`
  const response = await client.fetch(groq)
  return response
}

export function urlFor(source) {
  return builder.image(source).auto("format").format("webp")
}
