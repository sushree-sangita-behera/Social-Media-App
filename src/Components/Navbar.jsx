import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <h2>Social App</h2>

      <ul>
        <li>Home</li>
        <li>Profile</li>

        <li onClick={handleLogout}>
          Logout
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;