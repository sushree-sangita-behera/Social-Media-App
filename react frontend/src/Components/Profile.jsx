import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Profile.css";

function Profile() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (!loggedInUser) {
      alert("Please login to view profile");
      navigate("/login");
      return;
    }

    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/api/posts");
      const data = await response.json();

      const userPosts = data.filter(
        (post) => post.username === loggedInUser.username
      );

      setPosts(userPosts);
    };

    fetchPosts();
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {loggedInUser.username.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2>{loggedInUser.username}</h2>
          <p>{loggedInUser.email}</p>
          <p>Social Media App User</p>
        </div>
      </div>

      <h3>Your Posts</h3>

      {posts.length === 0 ? (
        <p className="empty-profile">
          No posts created yet. Go to Create Post and share something.
        </p>
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