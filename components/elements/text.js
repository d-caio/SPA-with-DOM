export function text(props) {
    const { type, page, component, content } = props

    const tag = document.createElement(type)
    tag.className = `${component} text`
    tag.id = `${page}-${component}-text`
    tag.innerHTML = `${content}`

    return tag
}