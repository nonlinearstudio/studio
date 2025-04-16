export function getSlug(input) {
  return input
    .toLowerCase()
    .normalize("NFD") // Break accented characters into base characters and diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9/-]/g, "") // Remove all non-alphanumeric characters except hyphen and slash
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .slice(0, 200) // Limit to 200 characters
}
