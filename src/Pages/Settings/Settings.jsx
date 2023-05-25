import "./settings.css"
import Sidebar from "../../Components/sideBar/Sidebar";
import NavBar from "../../Components/navBar/NavBar";

export default function Settings() {
    return (

        <>

            <NavBar />
            
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsTitleUpdate">Update Your Account</span>
                        <span className="settingsTitleDelete">Delete Account</span>
                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img 
                                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                alt="Image" 
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon fa-regular fa-user"></i>{" "}
                            </label>
                            <input 
                                className="settingsPPInput"
                                type="file" 
                                id="fileInput" 
                                style={{ display: "none" }} 
                            />
                        </div>
                        <label>UserName</label>
                        <input type="text" name="name" placeholder="Facu" />
                        <label>Email</label>
                        <input type="email" name="email" placeholder="facu@gmail.com" />
                        <label>Password</label>
                        <input type="password" name="password" />
                        <button className="settingsSubmitButton">Update</button>
                    </form>
                </div>
                <Sidebar />
            </div>

        </>
    );
}
