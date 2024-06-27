import logoImage from "../images/logo_640.jpg";
import Login from "./Login";

export default function Header(){
    return (
        <header className="top-header">
            <div className="header-left-menu" />
            <img src={logoImage} alt={"logo"} className={"image-logo"}
                 onClick={()=>{window.location.replace("/")}}/>
            <h1>Mайно ЦІКТ </h1>
            <Login />
        </header>
    )
}