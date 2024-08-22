import renderComponents from "../rendering/render_components.js"
import Menu from "../components/ui/Menu.js"
import Title from "../components/ui/Title.js"
import { pageContainer } from "../components/elements/containers.js"

export default function NotFound(props) {
    const { routeList } = props

    const container = pageContainer({ page: "not-found" })
    const menu = Menu({ routes: routeList, pageId: "not-fount" })
    const title = Title({ pageId: "not-found", pageTitle: "Not Found"})

    renderComponents(
        [container, [menu, title]]
    )

    return container
}