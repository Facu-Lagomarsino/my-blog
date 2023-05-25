// import { Link, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../Components/navBar/NavBar";
import "./login.css"

export default function Login() {
    return (

        <>
        
            <NavBar />

                <div className="login">
                    <span className="loginTitle">Login</span>
                    <form className="loginForm">
                        <label>Email</label>
                        <input className="loginInput" type="text" placeholder="Enter your email..." />
                        <label>Password</label>
                        <input className="loginInput" type="password" placeholder="Enter your password..." />
                        <button className="loginButton" onClick={() => alert("YOU DATA WAS SENT!\nThanks for your interest in this blog.\nPlease ENTER.")}>Login</button>
                    </form>
                    <Link className="link" to="/register">
                        <button className="loginRegisterButton">Register</button>
                    </Link>
                </div>
    
        </>
    );
}
