import NewsArticle from "../NewsArticle/NewsArticle";
import style from "./NewsSection.css";

function NewsSection(props) {
    const newsContent = props.sectionNews.map(
        article => <NewsArticle title={article.title} content={article.content} image={article.image}/>
    )

    return (
        <>
            <h2>{props.titleSection}</h2>
            <section className="news-section">
                {newsContent}
            </section>
        </>
    )
}

export default NewsSection