import NavBar from "../../Components/navBar/NavBar";
import Sidebar from "../../Components/sideBar/Sidebar";
import SinglePost from "../../Components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
    return (

        <>

            <NavBar />

            <div className="single">
                <SinglePost />
                <Sidebar />
            </div>

        </>
    );
}
