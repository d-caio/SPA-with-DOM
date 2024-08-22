export function container(props) {
    const { page, component } = props
    
    const div = document.createElement("div")
    div.className = "container"
    div.id = `${page}-${component}-container`

    return div
}

export function pageContainer(props) {
    const { page } = props
    
    const div = document.createElement("div")
    div.className = "page container"
    div.id = `${page}-page-container`

    return div
}

export function navContainer(props) {
    const { page, component } = props
    
    const nav = document.createElement("nav")
    nav.className = "nav-container"
    nav.id = `${page}-${component}-nav-container`

    return nav
}