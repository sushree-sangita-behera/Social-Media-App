import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Social Media App</h2>

      <div className="nav-links">
        <Link to="/">Feed</Link>
        <Link to="/create">Create Post</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;