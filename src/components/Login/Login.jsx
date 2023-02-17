import { useEffect, useState } from "react";
import styles from "./Login.module.css"

function Login() {


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handlerUserName(event){
        setUserName(event.target.value);
    }

    function handlerPassword(event){
        setPassword(event.target.value);
    }

    function saveData (event){
        localStorage.setItem ("nameKey", JSON.stringify(userName))
        console.log(userName)
        
        const retrievedData = JSON.parse (localStorage.getItem("nameKey"))
        console.log(retrievedData)
        
        
    }

    return (
    <>
        <div className={styles.login}>
            <input type="text" name="userName" placeholder="Nombre de Usuario" onInput={handlerUserName}></input>
            <input type="password" name="password" placeholder="Contraseña" onInput={handlerPassword}></input>
            <button onClick={saveData}>Inicia sesión</button>
        </div>
    </>
    );
  }
  
  export default Login;