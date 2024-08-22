import renderComponents from "../../rendering/render_components.js"
import { container } from "../elements/containers.js"
import { text } from "../elements/text.js"

export default function Title(props) {
    const componentId = "title"
    const { pageId, pageTitle } = props

    const titleContainer = container({ component: componentId, page: pageId })
    const titleText = text({ type: "h1", page: pageId, component: componentId, content: pageTitle })

    renderComponents(
        [titleContainer, [titleText]]
    )

    return titleContainer
}