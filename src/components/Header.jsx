import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="custom-navbar">
        <div className="navbar-container">
          <Link className="navbar-brand" to="/">
            <h2>MAXGRIND</h2>
          </Link>
          <button
            className={`navbar-toggle${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`navbar-menu${menuOpen ? " open" : ""}`}>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
