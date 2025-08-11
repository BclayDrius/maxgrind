import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../context/UserContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

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
            {isAuthenticated ? (
              <>
                <div className="user-info">
                  <span className="username">Welcome, {user?.name}</span>
                </div>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                  Dashboard
                </Link>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  Profile
                </Link>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login-register" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/login-register" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
