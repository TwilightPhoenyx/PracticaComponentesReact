import { useState } from "react";
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

    return (
    <>
        <div className={styles.login}>
            <input type="text" name="userName" placeholder="Nombre de Usuario" onInput={handlerUserName}></input>
            <input type="password" name="password" placeholder="Contraseña" onInput={handlerPassword}></input>

            <p>Tu eres: {userName}</p>
            <p>Tu contraseña es: {password}</p>
        </div>
    </>
    );
  }
  
  export default Login;