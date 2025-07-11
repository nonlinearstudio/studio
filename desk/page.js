import defineStructure from "../utils/defineStructure"
import CustomIframePreview from "../utils/CustomIframePreview"
import { getPreviewUrl } from "../utils/getPreviewUrl"

export default defineStructure(S =>
  S.listItem()
    .title("Page")
    .schemaType("page")
    .child(
      S.documentTypeList("page").child(documentId =>
        S.editor()
          .id(documentId)
          .schemaType("page")
          .views([
            S.view.form(),
            S.view
              .component(CustomIframePreview)
              .options({
                url: () => getPreviewUrl(documentId),
                defaultSize: "desktop",
                reload: {
                  button: true,
                },
              })
              .title("Desktop"),
            S.view
              .component(CustomIframePreview)
              .options({
                url: () => getPreviewUrl(documentId),
                defaultSize: "mobile",
                reload: {
                  button: true,
                },
              })
              .title("Mobile"),
          ])
      )
    )
)
