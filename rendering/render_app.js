export default function renderApp(app, parentId) {
    window.addEventListener("hashchange", () => {
        location.reload()
    })

    document.addEventListener("DOMContentLoaded", () => {
        const page = app()
        const parent = document.getElementById(parentId)
        parent.appendChild(page)
    })
}