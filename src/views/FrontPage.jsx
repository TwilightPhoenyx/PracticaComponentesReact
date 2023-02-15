import NewsSection from "../components/NewsSection/NewsSection";
import placeholderPhoto from "../images/gamepadicon.png"
function FrontPage(props) {

    const news = [
        {
            title: "Nuevo Juego a la venta",
            content: "Sale nuevo juego revolucionario que pilla al munod por sorpresa",
            image: placeholderPhoto
        },
        {
            title: "No Man Sky sigue mejorando",
            content: "A pesar de su rocoso lanzamiento, el juego se sigue actualizando para mejor",
            image: placeholderPhoto
        },
        {
            title: "La Title update 4 de Sunbreak introduce a Velkana",
            content: "Velkana, originario del spinoff MH Icebrone ha llegado al fin a Sunbreak",
            image: placeholderPhoto
        }
    ]

    return(
        <NewsSection titleSection="Noticias Destacadas" sectionNews={news}/>
    )
}

export default FrontPage