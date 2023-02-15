import NewsSection from "../components/NewsSection/NewsSection";
import placeholderPhoto from "../images/gamepadicon.png"

function  LatestNewsPage() {

    const news = [
        {
            title: "Ultimas noticias de gaming",
            content: "Info de toticia e ultima hora",
            image: placeholderPhoto
        },
        {
            title: "Anunciado Skyrim II",
            content: "Los fans estan soprendidos",
            image: placeholderPhoto
        },
        {
            title: "Cancelado juego indie",
            content: "El diseñador y porgramador lider exlica el porque",
            image: placeholderPhoto
        }
    ]

    return(
        <NewsSection titleSection="Últimas Noticias" sectionNews={news}/>
    )
}

export default LatestNewsPage