import React from "react";
import {Link} from "react-router-dom";
import image from "../assets/img/fractalClearBlueZ.jpg"


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav" style={{background: `url(${image})` }}>
            <Link  className="navbar-brand js-scroll-trigger" to="/">
                <span className="d-block d-lg-none">CHRISTIAN VILLALBA</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/certifications">Certifications</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/interests">Interests</Link></li>
                    

                </ul>
            </div>
        </nav>
  );
}

export default Navbar
;