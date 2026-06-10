import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/CreatePost.css";

function CreatePost() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      alert("Please login before creating a post");
      navigate("/login");
      return;
    }

    const post = {
      username: loggedInUser.username,
      content: content,
    };

    const response = await fetch("http://localhost:8080/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      alert("Post created successfully");
      setContent("");
      navigate("/");
    } else {
      alert("Failed to create post");
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>

      <form onSubmit={handleCreatePost}>
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;