import styles from "./NewsArticle.css"

function NewsArticle(props) {

    return(
        <>
            <article className="news-article">
                <h3>{props.title}</h3>
                <img src={props.image} alt="news photo" />
                <p>{props.content}</p>
            </article>
        </>
    )
    
}
export default NewsArticle