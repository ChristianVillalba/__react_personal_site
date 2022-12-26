import React from "react";

function PortfolioItem(props) {
  return (
    <div class="col-lg-6 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href={props.openModal}>
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-info-circle fa-3x"></i></div>
                </div>
                <img class="img-fluid" src={props.image} alt="" />
                </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">{props.title}</div>
                <div class="portfolio-caption-subheading text-muted"><b>{props.subtitle}</b></div>
              </div>
            </div>
          </div>
  );
}

export default PortfolioItem;