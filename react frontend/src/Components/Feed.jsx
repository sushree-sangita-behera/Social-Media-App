import React, { useEffect, useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8080/api/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Feed</h2>

      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.username}</h4>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Feed;