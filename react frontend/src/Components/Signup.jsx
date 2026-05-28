import "../Styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const user = {
      username: name,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Signup Successful");
        navigate("/");
      } else {
        alert("Signup Failed");
      }
    } catch (error) {
      alert("Backend server is not running");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>

      <p>
        Already have an account?
        <Link to="/"> Login</Link>
      </p>
    </div>
  );
}

export default Signup;