import React, { useState } from "react";
import "../Styles/CreatePost.css";

function CreatePost() {
  const [content, setContent] = useState("");

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const post = {
      username: "test3",
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