import NewsSection from "../components/NewsSection/NewsSection";

function  LatestNewsPage(props) {

    const filteredNews = props.allNews.filter(news => news.section === "latestNews")

    return(
        <NewsSection titleSection="Últimas Noticias" sectionNews={filteredNews}/>
    )
}

export default LatestNewsPage