import { Link } from "react-router-dom";
import "./sidebar.css";
import Sunset from "../../Assets/Images/sunset.jpeg";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img 
                    src={Sunset} 
                    alt="Image" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id saepe earum impedit qui dolores ipsam tempore illum velit quo accusantium, tenetur maxime iusto perspiciatis distinctio? Nobis possimus nesciunt beatae!
                </p>
                <div className="sidebarItem">
                    <span className="sidebarTitle">
                        CATEGORIES
                    </span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="link" to="/posts?cat=Life">
                                Life
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="link" to="/posts?cat=Music">
                                Music
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="link" to="/posts?cat=Sport">
                                Sport
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="link" to="/posts?cat=Style">
                                Style
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="link" to="/posts?cat=Tech">
                                Tech
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="link" to="/posts?cat=Cinema">
                                Cinema
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
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
                </div>
            </div>
        </div>
    );
}
