import { Link } from "react-router-dom";
import NavBar from "../../Components/navBar/NavBar";
import "./register.css"

export default function Register() {
    return (

        <>

            <NavBar />

            <div className="register" id="register">
                <span className="registerTitle">Register</span>
                <form className="registerForm">
                    <label>UserName</label>
                    <input className="registerInput" type="text" placeholder="Enter your username..." />
                    <label>Email</label>
                    <input className="registerInput" type="text" placeholder="Enter your email..." />
                    <label>Password</label>
                    <input className="registerInput" type="password" placeholder="Enter your password..." />
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton">
                        <Link className="link" to="/logout">
                            Login
                        </Link>
                </button>
            </div>
        
        </>
    );
}
