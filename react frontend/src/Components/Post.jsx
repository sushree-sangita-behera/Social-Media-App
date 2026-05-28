import { useState } from "react";

function Post() {

const [likes, setLikes] = useState(0);

const [comment, setComment] = useState("");

return (

<div className="post">

<h3>Sushree</h3>

<p>Welcome to my social media app 🚀</p>

<button
onClick={() => setLikes(likes + 1)}
>
Like 👍 {likes}
</button>

<br/><br/>

<input
type="text"
placeholder="Write a comment"
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<p>Comment: {comment}</p>

</div>

);

}

export default Post;