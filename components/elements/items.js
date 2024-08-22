export function navItem(props) {
    const { path, dest, page, component, content } = props

    const a = document.createElement("a")
    a.href = path
    a.className = "nav-item"
    a.id = `${page}-${component}-${dest}-nav-item`
    a.innerHTML = content
    return a
}