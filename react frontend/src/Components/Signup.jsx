import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert("Signup successful. Please login now.");
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-intro">
        <span className="auth-badge">Connect. Share. Discover.</span>
        <h1>Build your social circle in one simple place.</h1>
        <p>
          Create an account, share posts, explore the feed, search content, and
          manage your profile through a full-stack React and Spring Boot app.
        </p>

        <div className="auth-stats">
          <div>
            <strong>React</strong>
            <span>Frontend</span>
          </div>
          <div>
            <strong>Spring Boot</strong>
            <span>Backend</span>
          </div>
          <div>
            <strong>MySQL</strong>
            <span>Database</span>
          </div>
        </div>
      </section>

      <section className="signup-container">
        <h2>Create Account</h2>
        <p className="form-subtitle">Join the social media app today</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </div>
  );
}

export default Signup;