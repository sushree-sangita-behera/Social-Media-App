import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const updateUser = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(user);
    };

    updateUser();

    window.addEventListener("storage", updateUser);

    const interval = setInterval(updateUser, 500);

    return () => {
      window.removeEventListener("storage", updateUser);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Social Media App</h2>

      <div className="nav-links">
        <Link to="/">Feed</Link>
        <Link to="/create">Create Post</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
        <Link to="/notifications">Notifications</Link>

        {loggedInUser ? (
          <>
            <span className="nav-user">Hi, {loggedInUser.username}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;