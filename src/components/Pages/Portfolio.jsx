import React from "react";

function Portfolio() {
  return (
    <div >

    {/* Section */}

    <section class="resume-section" id="portfolio">
      <div class="resume-section-content">
        <div class="container">
          <h2 class="mb-4">Portfolio</h2>
          {/* <!-- <h3 class="section-subheading text-muted">These are some projects, more available on my GitHub Page.</h3> --> */}
        <div class="row">
          <div class="col-lg-6 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-info-circle fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/01-thumbnail.jpg" alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Social Media Site</div>
                <div class="portfolio-caption-subheading text-muted"><b>Django & Bootstrap</b></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-info-circle fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/02-thumbnail.jpg" alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Simon Game</div>
                <div class="portfolio-caption-subheading text-muted"><b>jQuery</b></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-info-circle fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/03-thumbnail.jpg" alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Drum Kit</div>
                <div class="portfolio-caption-subheading text-muted"><b>JavaScript</b></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content"><i class="fas fa-info-circle fa-3x"></i></div>
                </div>
                <img class="img-fluid" src="assets/img/portfolio/04-thumbnail.jpg" alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">This Site</div>
                <div class="portfolio-caption-subheading text-muted"><b>React & Bootstrap</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    {/* Modals */}

{/* Modal 1 */}
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* <!-- Project Details Go Here--> */}
                  <h2 className="text-uppercase">Social Media Site</h2>
                  <p className="item-intro text-muted"><b>Django</b></p>
                  <a href="http://christianvillalba.pythonanywhere.com/" target="_blank"><img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" /></a>
                  <button className="btn btn-secondary btn-modal mb-1" data-dismiss="modal" type="button">
                    <i className="fas fa-times mr-1"></i>
                    Close Description
                  </button>
                  <a className="btn btn-dark btn-modal mb-1" href="https://github.com/ChristianVillalba/social_media" target="_blank">
                    <i className="fab fa-github mr-1"></i>
                    Code on GitHub
                  </a>
                  <a className="btn btn-primary btn-modal mb-1" href="http://christianvillalba.pythonanywhere.com/" target="_blank">
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
                  <p>· Description: <br />
                    This project was created using Django, a web framework based on Python. <br />
                    This is the last project in the course: <br />
                    Python and Django Full Stack Web Developer Bootcamp, <br />
                    however, the course is not updated to Django 3 <br />
                    I updated the project using the Django Documentation <br />
                    and some external resources.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modal 2 */}
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* <!-- Project Details Go Here--> */}
                  <h2 className="text-uppercase">Simon Game</h2>
                  <p className="item-intro text-muted"><b>jQuery</b></p>
                  <a href="simongame\simongame.html" target="_blank"><img className="img-fluid d-block mx-auto" src="assets/img/portfolio/02-full.jpg" alt="" /></a>
                  <button className="btn btn-secondary btn-modal mb-1" data-dismiss="modal" type="button">
                    <i className="fas fa-times mr-1"></i>
                    Close Description
                  </button>
                  <a className="btn btn-dark btn-modal mb-1" href="https://github.com/ChristianVillalba/simon-game-jquery" target="_blank">
                    <i className="fab fa-github mr-1"></i>
                    Code on GitHub
                  </a>
                  <a className="btn btn-primary btn-modal mb-1" href="simongame\simongame.html" target="_blank">
                    <i className="fas far fa-eye mr-1"></i>
                    Live Preview
                  </a>
                  <br />
                  <br />
                  <p><i className="fas fa-exclamation-triangle mr-1"></i><i className="fas fa-volume-up mr-1"></i> Warning: Sounds</p>
                  <ul className="list-inline">
                    <li>· Objective: Create a game with sounds and animations</li>
                    <li>· Main technologies: jQuery & JavaScript</li>
                    <li>· Other Technologies: HTML & CSS</li>
                  </ul>
                  <p>How to play: <br />
                    · Simon will give the first signal. <br />
                    · Repeat the signal by pressing the same color button. <br />
                    · On each new level Simon will add a signal and <br />
                    we have to repeat all the previous sequence adding the last signal.<br />
                    · If you fail to repeat the sequence exactly, the game is over.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modal 3 */}
    <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* <!-- Project Details Go Here--> */}
                  <h2 className="text-uppercase">Drum Kit</h2>
                  <p className="item-intro text-muted"><b>JavaScript</b></p>
                  <a href="drumkit\drumkit.html" target="_blank"><img className="img-fluid d-block mx-auto" src="assets/img/portfolio/03-full.jpg" alt="" /></a>
                  <button className="btn btn-secondary mb-1" data-dismiss="modal" type="button">
                    <i className="fas fa-times mr-1"></i>
                    Close Description
                  </button>
                  <a className="btn btn-dark mb-1" href="https://github.com/ChristianVillalba/drum-kit" target="_blank">
                    <i className="fab fa-github mr-1"></i>
                    Code on GitHub
                  </a>
                  <a className="btn btn-primary mb-1" href="drumkit\drumkit.html" target="_blank">
                    <i className="fas far fa-eye mr-1"></i>
                    Live Preview
                  </a>
                  <br />
                  <br />
                  <p> <i className="fas fa-exclamation-triangle mr-1"></i><i className="fas fa-volume-up mr-1"></i> Warning: Sounds</p>
                  <ul className="list-inline">
                    <li>· Objective: Create an interactive application with sounds and animations</li>
                    <li>· Main technology: JavaScript</li>
                    <li>· Other Technologies: HTML & CSS</li>
                  </ul>
                  <p>· Description: <br />
                  This application uses JavaScript to create an interactive drum kit.<br />
                  It contains buttons that can be activated independently.<br />
                  Each button represents a part of a 7-piece Drum Kit. <br />
                  Have fun!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modal 4 */}
    <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* <!-- Project Details Go Here--> */}
                  <h2 className="text-uppercase">About This Website</h2>
                  <p className="item-intro text-muted"><b>React & Bootstrap</b></p>
                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/04-full.jpg" alt="" />
                  <ul className="list-inline">
                    <li>· Objective: Create my personal site <br />
                      so I can include my portfolio and my finished projects</li>
                    <li>· Main technologies: React & Bootstrap</li>
                    <li>· Other Technologies: HTML, CSS & JavaScript</li>
                  </ul>
                  <p> · Description: <br />
                    Upgraded version using React <br />
                    This project combines two different templates <br />
                    from startbootstrap.com: "agency" & "resume". <br />
                    I worked directly with the Bootstrap Repository  <br />
                    instead of using the CDN in order to get used to <br />
                    the elements available in this framework.</p>

                  <button className="btn btn-secondary mb-1" data-dismiss="modal" type="button">
                    <i className="fas fa-times mr-1"></i>
                    Close Description
                  </button>
                  <a className="btn btn-dark mb-1" href="https://github.com/ChristianVillalba/__react_personal_site" target="_blank">
                    <i className="fab fa-github mr-1"></i>
                    Code on GitHub
                  </a>
                 {/* <!-- Keep here : button that opens the project in a new tab-->
                  <!-- <a className="btn btn-primary" href="____" target="_blank">
                    <i className="fas far fa-eye mr-1"></i>
                    Live Preview
                  </a> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    
    

  );
}

export default Portfolio;