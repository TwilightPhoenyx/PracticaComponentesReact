import NavMenu from "../NavMenu/NavMenu";
import Login from "../Login/Login";
import style from "./Header.css"

function Header () {
    return (
        <>
            <h1 className="header">Gamer News</h1>
            <div className="menus">
                <NavMenu/>
                <Login/>
            </div>
        </>
    )
}

export default Header