import NewsSection from "../components/NewsSection/NewsSection";
import placeholderPhoto from "../images/gamepadicon.png"

function  ReviewsPage() {

    /*const news = [
        {
            title: "Skyrirm Switch, un ort sin novedades",
            content: "Same old same old",
            image: placeholderPhoto
        },
        {
            title: "Pokémon Scarlet/Violet",
            content: "Historia interesante rodeada de inaceptables bugs",
            image: placeholderPhoto
        },
        {
            title: "Deltarune",
            content: "Intrigante jeugo indie del creador de Undertale",
            image: placeholderPhoto
        }
    ]*/

    return(
        <NewsSection titleSection="Sección de Reviews" sectionNews={news}/>
    )
}

export default ReviewsPage