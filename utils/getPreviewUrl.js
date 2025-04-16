import { createClient } from "@sanity/client"
import { config } from "@/config"
import { getBaseURL } from "./getBaseURL"

const baseURL = getBaseURL()

export async function getPreviewUrl(id) {
  try {
    let finalUrl = baseURL

    const client = createClient({
      ...config,
      apiVersion: "2023-05-03",
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })

    const doc = await client.getDocument(id)

    if (!doc) {
      console.log("No document found")
      return baseURL
    }

    const slug = doc.slug?.current

    if (!slug) {
      console.log("No slug found")
      return baseURL
    }

    // Probably needs to be updated so that it can handle more document types
    // and their respective URLs

    if (doc._type === "home") {
      finalUrl = `${baseURL}preview/`
      return finalUrl
    } else if (doc._type === "post") {
      finalUrl = `${baseURL}preview/post/${slug}`
      return finalUrl
    } else {
      finalUrl = `${baseURL}preview/${slug}`
      return finalUrl
    }
  } catch (error) {
    console.error("Error in getPreviewUrl function:", error)
    return baseURL
  }
}
