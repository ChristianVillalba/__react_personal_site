import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleLinkClick = () => {
    setIsNavCollapsed(true); // Collapse the navbar when a link is clicked
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
      style={{ backgroundImage: `url(assets/img/fractalClearBlueZ.jpg)` }}
    >
      <Link className="navbar-brand js-scroll-trigger" to="/" onClick={handleLinkClick}>
        <span className="d-block d-lg-none">Christian Villalba</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="assets/img/profile.jpg"
            alt="An icon of a programmer"
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavCollapse}
        aria-controls="navbarSupportedContent"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${
          isNavCollapsed ? "" : "show"
        }`}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/profile" onClick={handleLinkClick}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/skills" onClick={handleLinkClick}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/portfolio" onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/experience" onClick={handleLinkClick}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/certificates" onClick={handleLinkClick}>
              Certificates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
