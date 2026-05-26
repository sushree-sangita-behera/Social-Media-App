import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Search from "./Components/Search";
import Notification from "./Components/Notification";

function App() {

return (

<BrowserRouter>

<Navbar />

<Search />

<Notification />

<Routes>

<Route
path="/"
element={<Login />}
/>

<Route
path="/signup"
element={<Signup />}
/>

<Route
path="/home"
element={<Home />}
/>

</Routes>

</BrowserRouter>

);

}

export default App;