import { useState } from "react";
import placeholderPhoto from "../images/gamepadicon.png"
import styles from "./InsertNews.css"
import NavMenu from "../components/NavMenu/NavMenu";
import FrontPage from "./FrontPage";
import LatestNewsPage from "./LatestNewsPage";
import ReviewsPage from "./ReviewsPage";

function InsertNews (props) {

    const [newsTitle, setNewsTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");
    const [newsSection, setNewsSection] = useState("frontPage");
    const [news, setNews] = useState(props.allNews) //We take the News Array from NavMenu

    function handlerNewsTitle(event){
        setNewsTitle(event.target.value);
    }

    function handlerNewsContent(event){
        setNewsContent(event.target.value);
    }

    function handlerNewsSection(event){
        setNewsSection(event.target.value);
    }

    function handlerNews() {

        setNews(props.allNews.push(
                                    {
                                        title: newsTitle,
                                        content: newsContent,
                                        image: placeholderPhoto,
                                        section: newsSection,
                                    }
        ))

        /*{newsSection === "frontPage" && <FrontPage allNews={news}/>
        {newsSection === "latestNews" && <LatestNewsPage allNews={news}/>
        {newsSection === "reviews" && <ReviewsPage allNews={news}/>}*/
    
    }
    
 

    return(
        <div className="formulario">
            <label>
                Pon titulo noticia
                <input type="text" name="title" onInput={handlerNewsTitle} />
            </label>
            <label>
                Escribe el contenido
                <textarea name="content" cols="30" rows="10" onInput={handlerNewsContent}></textarea>
            </label>
                <label>
                <input type="radio" name="section" value="fronPage" defaultChecked onClick={handlerNewsSection}/>
                    Enviar a portada
                </label>

                <label>
                <input type="radio" name="section" value="latestNews" onClick={handlerNewsSection}/>
                    Enviar a ultimas noticias
                </label>

                <label>
                <input type="radio" name="section" value="reviews" onClick={handlerNewsSection}/>
                    Enviar a reviews
                </label>

                <button onClick={handlerNews}>Añadir</button>
        </div>
   ) 
}

export default InsertNews

