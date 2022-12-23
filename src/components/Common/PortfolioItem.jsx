import React from "react";

function PortfolioItem(props) {
  return (
    <div class="col-lg-6 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-info-circle fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/01-thumbnail.jpg" alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">{props.name}</div>
                <div class="portfolio-caption-subheading text-muted"><b>{props.mainTechnologies}</b></div>
              </div>
            </div>
          </div>
  );
}

export default PortfolioItem;