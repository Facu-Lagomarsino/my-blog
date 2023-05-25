import NavBar from "../../Components/navBar/NavBar";
import Sidebar from "../../Components/sideBar/Sidebar";
import "./write.css"

export default function Write() {
    return (

        <>

            <NavBar />

            <div className="write">
                <img 
                    className="writeImg" 
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="Image" 
                />
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fa-solid fa-plus"></i>
                        </label>
                        <input 
                            type="file" 
                            id="fileInput" 
                            style={{ display: "none" }} 
                        />
                        <input 
                            className="writeInput" 
                            type="text" 
                            placeholder="Title" 
                            autoFocus={true} 
                        />
                    </div>
                    <div className="writeFormGroup">
                        <textarea 
                            className="writeInput writeText" 
                            type="text" 
                            placeholder="Tell your story..."> 
                        </textarea>
                        <button className="writeSubmit">
                            Publish
                        </button>
                    </div>
                </form>
            <Sidebar />
            </div>

        </>

    );
}
