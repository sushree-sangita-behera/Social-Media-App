import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Social App</h2>

      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;