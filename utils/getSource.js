import { createClient } from "@sanity/client"
import { config } from "@/config"

export async function getSource(doc) {
  let slug = ""
  let title = ""

  const client = createClient({
    ...config,
    apiVersion: "2023-05-03",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  })

  const fetchParentSlug = async parentPageRefId => {
    const parentSlugQuery = `*[_id == $refId][0]{'slug': slug.current}`
    const params = { refId: parentPageRefId }

    try {
      const parentPage = await client.fetch(parentSlugQuery, params)
      return parentPage?.slug || "" // Return the slug or an empty string
    } catch (error) {
      console.error("Error fetching parent page slug:", error)
      return ""
    }
  }

  const normalizeSlug = input => {
    return input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
      .slice(0, 200)
      .replace(/\//g, "") // Remove slashes
      .replace(/[^a-z0-9-]/g, "") // Remove invalid characters
  }

  if (doc.parentPage) {
    const parentSlug = await fetchParentSlug(doc.parentPage._ref)
    title = normalizeSlug(doc.title || "")
    slug = `${parentSlug.replace(/\/$/, "")}/${title}`
  } else {
    slug = normalizeSlug(doc.title || "")
  }

  return slug
}
