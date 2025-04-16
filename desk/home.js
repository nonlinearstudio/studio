import defineStructure from "../utils/defineStructure"
import CustomIframePreview from "../utils/CustomIframePreview"
import { getBaseURL } from "../utils/getBaseURL"

const baseURL = getBaseURL()

export default defineStructure(S =>
  S.listItem()
    .title("Home")
    .schemaType("home")
    .child(
      S.editor()
        .title("Home")
        .schemaType("home")
        .views([
          S.view.form(),
          S.view
            .component(CustomIframePreview)
            .options({
              url: () => `${baseURL}preview`,
              defaultSize: "desktop",
              reload: {
                button: true,
              },
            })
            .title("Desktop"),
          S.view
            .component(CustomIframePreview)
            .options({
              url: () => `${baseURL}preview`,
              defaultSize: "mobile",
              reload: {
                button: true,
              },
            })
            .title("Mobile"),
        ])
        .documentId("home")
    )
)
