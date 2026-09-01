import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Reusable React Components</h1>
      <div className="nav-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
