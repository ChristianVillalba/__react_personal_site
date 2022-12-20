import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link  className="navbar-brand js-scroll-trigger" to="/">
                <span className="d-block d-lg-none">CHRISTIAN VILLALBA</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">

                    <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/about">About</Link></li>
                    <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/skills">Skills</Link></li>
                    <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link></li>
                    <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/interests">Interests</Link></li>
                    <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/certifications">Certifications</Link></li>

                </ul>
            </div>
        </nav>
  );
}

export default Navbar
;