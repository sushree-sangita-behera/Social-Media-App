import React, { useEffect, useState } from "react";
import "../Styles/Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8080/api/posts");
    const data = await response.json();
    setPosts(data);
  };

  const deletePost = async (id) => {
    const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Post deleted successfully");
      fetchPosts();
    } else {
      alert("Failed to delete post");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed-container">
      <h2>Feed</h2>

      {posts.length === 0 ? (
        <p className="empty-feed">No posts yet</p>
      ) : (
        posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h4>{post.username}</h4>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Feed;