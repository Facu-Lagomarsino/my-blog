import { useLocation } from "react-router";
import { Outlet } from "react-router-dom";
import Header from "../../Components/header/Header"
import NavBar from "../../Components/navBar/NavBar";
import Posts from "../../Components/posts/Posts"
import Sidebar from "../../Components/sideBar/Sidebar"
import "./home.css"

export default function Home() {
    
    const location = useLocation();
    console.log(location);

    return (

        <>
            <NavBar />
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
            <div>
                <Outlet />
            </div>

        </>
    );
}
