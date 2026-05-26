import { useState } from "react";
import "../Styles/CreatePost.css";

function CreatePost() {

const [post, setPost] = useState("");

const [posts, setPosts] = useState([]);

const addPost = () => {

if(post.trim() !== ""){

setPosts([...posts, post]);

setPost("");

}

};

return (

<div className="create-post">

<h2>Create Post</h2>

<textarea
placeholder="What's on your mind?"
value={post}
onChange={(e)=>setPost(e.target.value)}
></textarea>

<br/><br/>

<button onClick={addPost}>
Post
</button>

<div>

{posts.map((item,index)=>(

<div key={index}>

<h3>Sushree</h3>

<p>{item}</p>

<hr/>

</div>

))}

</div>

</div>

);

}

export default CreatePost;