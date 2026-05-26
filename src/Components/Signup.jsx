import "../Styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {

const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignup = () => {

const user = {
name,
email,
password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Signup Successful");

navigate("/");
};

return (

<div className="signup-container">

<h2>Signup</h2>

<input
type="text"
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleSignup}>
Signup
</button>

<p>
Already have an account?
<Link to="/"> Login</Link>
</p>

</div>

);

}

export default Signup;