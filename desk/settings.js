import defineStructure from "../utils/defineStructure"

export default defineStructure(S =>
  S.listItem()
    .title("Site Settings")
    .schemaType("settings")
    .child(S.editor().title("Site Settings").schemaType("settings").documentId("settings"))
)
