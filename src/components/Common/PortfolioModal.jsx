import React from "react";

function PortfolioModal(props) {
  return (
    // {/* Modal 1 */}
    <div className="portfolio-modal modal fade" id={props.portfolioModalId} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* <!-- Project Details Go Here--> */}
                  <h2 className="text-uppercase">{props.modalTitle}</h2>
                  <p className="item-intro text-muted"><b>{props.modalSubtitle}</b></p>
                  <a href={props.linkToProject} target="_blank"><img className="img-fluid d-block mx-auto" src={props.modalImage} alt="" /></a>
                  <button className="btn btn-secondary btn-modal mb-1" data-dismiss="modal" type="button">
                    <i className="fas fa-times mr-1"></i>
                    Close Description
                  </button>
                  <a className="btn btn-dark btn-modal mb-1" href={props.linkToRepository} target="_blank">
                    <i className="fab fa-github mr-1"></i>
                    Code on GitHub
                  </a>
                  {/* if hideButton is true, the content won't be diplayed */}
                  {props.hideButton ? null : <a className="btn btn-primary btn-modal mb-1" href={props.linkToProject} target="_blank">
                    <i className="fas far fa-eye mr-1"></i>
                    Live Preview
                  </a>}
                  <br />
                  <br />
                  <ul className="list-inline">
                    <li>· Objective: {props.objective}</li>
                    <li>· Main technology: {props.mainTechnology} </li>
                    <li>· Other Technologies: {props.usedTechnologies}</li>
                  </ul>
                  <p>· Description: <br />
                    {props.description}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;