import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {

const savedUser = JSON.parse(
localStorage.getItem("user")
);

if(
savedUser &&
savedUser.email === email &&
savedUser.password === password
){

alert("Login Successful");

navigate("/home");

}
else{

alert("Invalid Email or Password");

}

};

return (

<div className="login-container">

<h2>Login</h2>

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

<button onClick={handleLogin}>
Login
</button>

<p>
Don't have an account?
<Link to="/signup"> Signup</Link>
</p>

</div>

);

}

export default Login;