import styles from "./NewsArticle.css"

function NewsArticle(props) {

    //The button opnes a view to change the paragraph

    return(
        <>
            <article className="news-article">
                <h3>{props.title}</h3>
                <img src={props.image} alt="news photo" />
                <p>{props.content}</p>
                <button id="frontPage">proxy</button>
            </article>
        </>
    )
    
}
export default NewsArticle