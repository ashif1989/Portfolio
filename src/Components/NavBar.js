import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Ashif's Portfolio</h1>
      <div className="links">
        <Link
          to="/"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          About
        </Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default NavBar;
