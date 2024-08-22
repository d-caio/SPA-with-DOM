import NotFound from "../pages/NotFound.js"

export default function renderPages(...pages) {
    const { hash } = location
    const routes = []

    pages.forEach(page => routes.push({ path: page[1], content: page[2], dest: page[3] }))
    
    let page, pageFound = false, docTitle = document.title

    for (let i = 0; i < pages.length; i++) {
        let curr = pages[i]
        if (curr[1] === hash) {
            page = curr[0]({
                routeList: routes,
                pageTitle: curr[2],
                pageId: curr[3]
            })
            docTitle = `${docTitle}: ${curr[2]}`
            pageFound = true
            break
        }
    }
    
    if (pageFound === false) {
        page = NotFound({ routeList: routes })
        docTitle = `${docTitle}: 404`
    }

    document.title = docTitle
    return page
}