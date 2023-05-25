import { Link } from "react-router-dom";
import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    className="singlePostImg" 
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="Image" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <b>
                            <Link className="link" to="/posts?username=Facu">
                                Facu Lagomarsino
                            </Link>
                        </b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum harum saepe exercitationem necessitatibus minima! Cupiditate rerum cumque iure possimus reprehenderit, amet ipsam facilis autem culpa nulla eveniet ea! Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum harum saepe exercitationem necessitatibus minima! Cupiditate rerum cumque iure possimus reprehenderit, amet ipsam facilis autem culpa nulla eveniet ea! Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum harum saepe exercitationem necessitatibus minima! Cupiditate rerum cumque iure possimus reprehenderit, amet ipsam facilis autem culpa nulla eveniet ea! Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum harum saepe exercitationem necessitatibus minima! Cupiditate rerum cumque iure possimus reprehenderit, amet ipsam facilis autem culpa nulla eveniet ea! Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum harum saepe exercitationem necessitatibus minima! Cupiditate rerum cumque iure possimus reprehenderit, amet ipsam facilis autem culpa nulla eveniet ea! Dignissimos?</p>
            </div>
        </div>
    );
}
