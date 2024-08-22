import renderPages from "../rendering/render_pages.js"
import Home from "../pages/Home.js"
import Page1 from "../pages/Page1.js"
import Page2 from "../pages/page2.js"

export default function App() {
    return renderPages(
        [Home, "", "Home", "home"],
        [Page1, "#page1", "Page 1", "page1"],
        [Page2, "#page2", "Page 2", "page2"]
    )
}