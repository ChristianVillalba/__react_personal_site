import React from "react";

const PortfolioModal = () => {
  return (
    <div
      className="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <img src="assets/img/portfolio/close-icon.svg" alt="Close modal" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project Details Go Here */}
                  <h2 className="text-uppercase">Social Media Site</h2>
                  <p className="item-intro text-muted">
                    <b>Django</b>
                  </p>
                  <a
                    href="http://christianvillalba.pythonanywhere.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/01-full.jpg"
                      alt=""
                    />
                  </a>
                  <button
                    className="btn btn-secondary btn-modal mb-1"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i className="fas fa-times mr-1"></i>
                    Close Description
                  </button>
                  <a
                    className="btn btn-dark btn-modal mb-1"
                    href="https://github.com/ChristianVillalba/social_media"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-1"></i>
                    Code on GitHub
                  </a>
                  <a
                    className="btn btn-primary btn-modal mb-1"
                    href="http://christianvillalba.pythonanywhere.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas far fa-eye mr-1"></i>
                    Live Preview
                  </a>
                  <br />
                  <br />
                  <ul className="list-inline">
                    <li>· Objective: Create a functional social media site.</li>
                    <li>· Main technology: Django (Python) </li>
                    <li>· Other Technologies: HTML & CSS</li>
                  </ul>
                  <p>
                    · Description: <br />
                    This is a Social Media Site that allows Users to send short
                    Posts.
                    <br />
                    The Posts are grouped in Groups dedicated to particular
                    topics.
                    <br />
                    Users can Log In and New Users can Sign Up.
                    <br />
                    Every visitor can check out the Groups and read the Posts,
                    but...
                    <br />
                    only Users can Crate New Groups and Posts in the Groups.
                    <br />
                    Users can join to the Groups they want.
                    <br />
                    Each User have a Post History Page
                    <br />
                    Users can delete their Posts, but only Admins can delete the
                    Groups, <br />
                    this protects the rest of the posts in those Groups.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
