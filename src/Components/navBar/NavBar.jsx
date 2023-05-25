import { Link } from "react-router-dom";
import "./navbar.css";
import ProfileImg from "../../Assets/Images/perfil.JPG";

export default function NavBar() {
    const user = true;

    return (

        <div className="top">
            <div className="topLeft">
                <Link className="link" to="https://www.linkedin.com/in/facundo-lagomarsino/">
                    <i className="topIcon fa-brands fa-linkedin-in"></i>
                </Link>
                <Link className="link" to="https://github.com/Facu-Lagomarsino">
                    <i className="topIcon fa-brands fa-github"></i>
                </Link>
                <Link className="link" to="https://www.instagram.com/">
                    <i className="topIcon fa-brands fa-instagram"></i>
                </Link>
                <Link className="link" to="https://www.youtube.com/">
                    <i className="topIcon fa-brands fa-youtube"></i>
                </Link>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">
                            CONTACT
                        </Link>                       
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    {
                        user && 
                        <li className="topListItem" onClick={() => alert("YOU LOGGED OUT!\nYou can register here or start again with your account.\nPlease ENTER.")}>
                            <Link className="link" to="/logout">
                                LOGOUT
                            </Link>
                        </li>
                    }
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="Link" to="/settings">
                    <img 
                        className="topImg" 
                        src={ProfileImg} 
                        alt="Image Profile" 
                    />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )} 
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

    );
}
