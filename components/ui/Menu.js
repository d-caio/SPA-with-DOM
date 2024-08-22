import renderComponents from "../../rendering/render_components.js"
import { container, navContainer } from "../elements/containers.js"
import { navItem } from "../elements/items.js"

export default function Menu(props) {
    const componentId = "menu"
    const { routes, pageId } = props

    const menuContainer = container({ component: componentId, page: pageId })
    const menuNavContainer = navContainer({ component: componentId, page: pageId })
    const menuNavItems = []
    routes.forEach(route => {
        const { path, dest, content } = route
        const menuNavItem = navItem({ path: path, dest: dest, content: content, page: pageId, component: componentId })
        menuNavItems.push(menuNavItem)
    })

    renderComponents(
        [menuContainer, [menuNavContainer]],
        [menuNavContainer, menuNavItems]
    )

    return menuContainer
}