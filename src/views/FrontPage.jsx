import NewsSection from "../components/NewsSection/NewsSection";


function FrontPage(props) {

    const filteredNews = props.allNews.filter(news => news.section === "frontPage")

    return(
        <NewsSection titleSection="Noticias Destacadas" sectionNews={filteredNews}/>
    )
}

export default FrontPage