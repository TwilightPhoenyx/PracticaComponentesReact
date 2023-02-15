import { useState } from "react"
import FrontPage from "../../views/FrontPage"
import LatestNewsPage from "../../views/LatestNewsPage"

function NavMenu () {

const [view, setView] = useState("frontPage")
function handlerClickNav(event){
    setView (event.target.id)
}

    return (
        <>
            <nav>
                <ul>
                    <li><a id="frontPage" onClick={handlerClickNav}>Portada</a></li>
                    <li><a id="latestNewsPage" onClick={handlerClickNav}>Novedades</a></li>
                    <li><a id="reviewsPage" onClick={handlerClickNav}>Reviews</a></li>
                </ul>
            </nav>

            {view === "frontPage" && <FrontPage/>}
            {view === "latestNewsPage" && <LatestNewsPage/>}
            {view === "reviewsPage" && <p>Mostrando pagina reviews</p>}
        </>

    )
}

export default NavMenu