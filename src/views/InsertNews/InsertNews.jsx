import { useState } from "react";
import placeholderPhoto from "../../images/gamepadicon.png"
import styles from "./InsertNews.css"
import NavMenu from "../../components/NavMenu/NavMenu";
import FrontPage from "../FrontPage";
import LatestNewsPage from "../LatestNewsPage";
import ReviewsPage from "../ReviewsPage";

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
            <h2>Introduce una nueva noticia</h2>
            <label>Titular:
                <input type="text" name="title" onInput={handlerNewsTitle} />
            </label>
            <label for="content">Contenido de noticia:.</label>
            <textarea name="content" cols="30" rows="10" onInput={handlerNewsContent}></textarea>
            <fieldset>
                <legend>Seleccioa su sección:</legend>
                <label class="label-radio">
                <input type="radio" name="section" value="fronPage" defaultChecked onClick={handlerNewsSection}/>
                    Enviar a Portada
                </label>
                <label class="label-radio">
                <input type="radio" name="section" value="latestNews" onClick={handlerNewsSection}/>
                    Enviar a Novedades
                </label>
                <label class="label-radio">
                <input type="radio" name="section" value="reviews" onClick={handlerNewsSection}/>
                    Enviar a Reviews
                </label>
                </fieldset>

                <button onClick={handlerNews}>Añadir</button>

        </div>
   ) 
}

export default InsertNews

