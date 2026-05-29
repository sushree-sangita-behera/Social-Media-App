import React from "react";
import { BrowserRouter } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Feed from "./Components/Feed";
import CreatePost from "./Components/CreatePost";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import Notification from "./Components/Notification";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Signup />
        <Login />
        <CreatePost />
        <Feed />
        <Profile />
        <Search />
        <Notification />
      </div>
    </BrowserRouter>
  );
}

export default App;