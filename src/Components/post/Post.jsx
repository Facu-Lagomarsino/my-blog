import { Link } from "react-router-dom";
import "./post.css"
import PostSs from "../../Assets/Images/post.jpeg"

export default function Post() {
    return (
        <div className="post">
            <img 
                className="postImg" 
                src={PostSs} 
                alt="Post Image" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to="/post/abc" className="link">
                        Lorem ipsum dolor sit amet
                    </Link>
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem unde molestiae. Inventore voluptate dicta officiis minus. Repellendus dolore, sint enim veritatis minima asperiores aliquam sit, nostrum non dolorum doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem unde molestiae. Inventore voluptate dicta officiis minus. Repellendus dolore, sint enim veritatis minima asperiores aliquam sit, nostrum non dolorum doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem unde molestiae. Inventore voluptate dicta officiis minus. Repellendus dolore, sint enim veritatis minima asperiores aliquam sit, nostrum non dolorum doloribus?</p>
        </div>
    );
}
