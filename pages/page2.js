import renderComponents from "../rendering/render_components.js"
import Menu from "../components/ui/Menu.js"
import Title from "../components/ui/Title.js"
import { pageContainer } from "../components/elements/containers.js"

export default function Page2(props) {
    const { routeList, pageTitle, pageId } = props

    const container = pageContainer({ page: pageId })
    const menu = Menu({ routes: routeList, pageId: pageId })
    const title = Title({ pageId: pageId, pageTitle: pageTitle})

    renderComponents(
        [container, [menu, title]]
    )

    return container
}