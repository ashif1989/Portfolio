const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Ashif's Portfolio</h1>
      <div className="links">
        <a
          href="/"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
          }}
        >
          About
        </a>
        <a href="/skills">Skills</a>
        <a href="/experience">Experience</a>
      </div>
    </div>
  );
};

export default NavBar;
