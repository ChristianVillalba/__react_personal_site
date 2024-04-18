import React from 'react';

// Porfolio Grid
const PortfolioSection = () => {
  return (
    <section className="resume-section" id="portfolio">
      <div className="resume-section-content">
        <div className="container">
          <h2 className="mb-4">Portfolio</h2>
          {/* <h3 className="section-subheading text-muted">These are some projects, more available on my GitHub Page.</h3> */}
          <div className="row">

            {/* Project 1 */}
            <div className="col-lg-6 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-info-circle fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/01-thumbnail.jpg" alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Social Media Site</div>
                  <div className="portfolio-caption-subheading text-muted"><b>Django</b></div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-lg-6 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-info-circle fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/02-thumbnail.jpg" alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Simon Game</div>
                  <div className="portfolio-caption-subheading text-muted"><b>jQuery</b></div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-lg-6 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-info-circle fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/03-thumbnail.jpg" alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Drum Kit</div>
                  <div className="portfolio-caption-subheading text-muted"><b>JavaScript</b></div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col-lg-6 col-sm-6 mb-4 mb-lg-0">
              <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-info-circle fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/04-thumbnail.jpg" alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">This Site</div>
                  <div className="portfolio-caption-subheading text-muted"><b>Bootstrap</b></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default PortfolioSection;
