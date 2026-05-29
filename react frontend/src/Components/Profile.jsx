import React, { useEffect, useState } from "react";
import "../Styles/Profile.css";

function Profile() {
  const [posts, setPosts] = useState([]);

  const username = "test3";

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/api/posts");
      const data = await response.json();
      const userPosts = data.filter((post) => post.username === username);
      setPosts(userPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">T</div>
        <div>
          <h2>{username}</h2>
          <p>Social Media App User</p>
        </div>
      </div>

      <h3>Your Posts</h3>

      {posts.length === 0 ? (
        <p className="empty-profile">No posts created yet.</p>
      ) : (
        posts.map((post) => (
          <div className="profile-post" key={post.id}>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;