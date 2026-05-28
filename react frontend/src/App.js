import React from "react";
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
  );
}

export default App;