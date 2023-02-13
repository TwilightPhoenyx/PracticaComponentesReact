import NewsArticle from "../NewsArticle/NewsArticle";
import style from "./NewsSection.css";
import newsPhoto3 from "../../images/mhsunbreakupdate.png";

function NewsSection(props) {
    return (
        <>
            <h2>{props.titleSection}</h2>
            <section className="news-section">
                <NewsArticle title="Nuevo Juego a la venta" content="Sale nuevo juego revolucionario que pilla al munod por sorpresa"/>
                <NewsArticle title="No Man Sky sigue mejorando" content="A pesar de su rocoso lanzamiento, el juego se sigue actualizando para mejor"/>
                <NewsArticle title="La Title update 4 de Sunbreak introduce a Velkana" content="Velkana, originario del spinoff MH Icebrone ha llegado al fin a Sunbreak" image={newsPhoto3}/>
            </section>
        </>
    )
}

export default NewsSection