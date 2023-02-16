import NewsSection from "../components/NewsSection/NewsSection";


function  ReviewsPage(props) {

    const filteredNews = props.allNews.filter(news => news.section === "reviews")

    return(
        <NewsSection titleSection="Sección de Reviews" sectionNews={filteredNews}/>
    )
}

export default ReviewsPage