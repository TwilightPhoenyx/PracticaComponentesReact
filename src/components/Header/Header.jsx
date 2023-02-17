import NavMenu from "../NavMenu/NavMenu";
import Login from "../Login/Login";
import style from "./Header.css"
import { useState } from "react";

function Header () {

    return (
        <>
            <h1 className="header">Gamer News</h1>
            <div className="menus">
                <Login/>
            </div>
        </>
    )
}

export default Header