import React, { useEffect, useState } from "react";
import "../Styles/Search.css";

function Search() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.username.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <h2>Search</h2>

      <input
        type="text"
        placeholder="Search posts or users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>
        {filteredPosts.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredPosts.map((post) => (
            <div className="search-result" key={post.id}>
              <h4>{post.username}</h4>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;