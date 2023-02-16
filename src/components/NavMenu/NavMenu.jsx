import { useState } from "react"
import FrontPage from "../../views/FrontPage"
import LatestNewsPage from "../../views/LatestNewsPage"
import ReviewsPage from "../../views/ReviewsPage"
import placeholderPhoto from "../../images/gamepadicon.png"

function NavMenu () {

    const news = [
        {
            title: "Nuevo Juego a la venta",
            content: "Sale nuevo juego revolucionario que pilla al munod por sorpresa",
            image: placeholderPhoto,
            section: "frontPage"
        },
        {
            title: "No Man Sky sigue mejorando",
            content: "A pesar de su rocoso lanzamiento, el juego se sigue actualizando para mejor",
            image: placeholderPhoto,
            section: "frontPage"
        },
        {
            title: "La Title update 4 de Sunbreak introduce a Velkana",
            content: "Velkana, originario del spinoff MH Icebrone ha llegado al fin a Sunbreak",
            image: placeholderPhoto,
            section: "frontPage"
        },
        {
            title: "Ultimas noticias de gaming",
            content: "Info de toticia e ultima hora",
            image: placeholderPhoto,
            section: "latestNews"
        },
        {
            title: "Anunciado Skyrim II",
            content: "Los fans estan soprendidos",
            image: placeholderPhoto,
            section: "latestNews"
        },
        {
            title: "Cancelado juego indie",
            content: "El diseñador y porgramador lider exlica el porque",
            image: placeholderPhoto,
            section: "latestNews"
        },
        {
            title: "Skyrirm Switch, un ort sin novedades",
            content: "Same old same old",
            image: placeholderPhoto,
            section: "reviews"
        },
        {
            title: "Pokémon Scarlet/Violet",
            content: "Historia interesante rodeada de inaceptables bugs",
            image: placeholderPhoto,
            section: "reviews"
        },
        {
            title: "Deltarune",
            content: "Intrigante jeugo indie del creador de Undertale",
            image: placeholderPhoto,
            section: "reviews"
        }
    ]



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

            {view === "frontPage" && <FrontPage allNews={news}/>}
            {view === "latestNewsPage" && <LatestNewsPage allNews={news}/>}
            {view === "reviewsPage" && <ReviewsPage allNews={news}/>}
        </>

    )
}

export default NavMenu