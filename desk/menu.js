import defineStructure from "../utils/defineStructure"

export default defineStructure(S =>
  S.listItem()
    .title("Menu")
    .schemaType("menu")
    .child(S.editor().title("Menu").schemaType("menu").documentId("menu"))
)
