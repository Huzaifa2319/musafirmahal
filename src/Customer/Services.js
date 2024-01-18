import React from "react";
import "../style/Aboutus.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Services() {
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
      />
      <div className="container bootstrap snippets bootdey">
        <section id="services" className="current">
          <div className="services-top">
            <div className="container bootstrap snippets bootdey">
              <div className="row text-center">
                <div className="col-sm-12 col-md-12 col-md-12">
                  <h2>What We Offer</h2>
                  <h2
                    style={
                      {
                        /*font-size: 60px;line-height: 60px;margin-bottom: 20px;font-weight: 900;*/
                      }
                    }
                  >
                    Our Services
                  </h2>
                  <p>
                    Our <span className="highlight">experienced</span> and{" "}
                    <span className="highlight">dedicated</span> team provide
                    these services with a smile.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
                  <div className="services-list">
                    <div className="row">
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div
                          className="service-block"
                          style={
                            {
                              /*visibility: visible;*/
                            }
                          }
                        >
                          <i className="ico fas fa-solid fa-car highlight"></i>
                          <div className="text-block">
                            <div className="name">Transport</div>
                            <div className="info">Beauty and function</div>
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Pellentesque habitant morbi tristique
                              senectus et netus et malesuada fames{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div
                          className="service-block"
                          style={
                            {
                              /*visibility: visible;*/
                            }
                          }
                        >
                          <i className="ico fas fa-solid fa-user-shield highlight"></i>
                          <div className="text-block">
                            <div className="name">Safety</div>
                            <div className="info">Quality code that lasts</div>
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Pellentesque habitant morbi tristique
                              senectus et netus et malesuada fames{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div
                          className="service-block"
                          style={
                            {
                              /*visibility: visible;*/
                            }
                          }
                        >
                          <i
                            class="ico fa fa-home highlight"
                            aria-hidden="true"
                          ></i>
                          {/* <i class="ico fas fa-solid fa-music highlight"></i> */}
                          <div className="text-block">
                            <div className="name">Shelter</div>
                            <div className="info">
                              Words that tell your story
                            </div>
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Pellentesque habitant morbi tristique
                              senectus et netus et malesuada fames{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div
                          className="service-block"
                          style={
                            {
                              /*visibility: visible;*/
                            }
                          }
                        >
                          <i className="ico fas fa-utensils highlight"></i>
                          {/* <div className="ico fa fa-bullhorn highlight"></div> */}
                          <div className="text-block">
                            <div className="name">Meal</div>
                            <div className="info">
                              Converting users to customers
                            </div>
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Pellentesque habitant morbi tristique
                              senectus et netus et malesuada fames{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div
                          className="service-block"
                          style={
                            {
                              /*visibility: visible;*/
                            }
                          }
                        >
                          <i className="ico fas fa-solid fa-camera highlight"></i>
                          <div className="text-block">
                            <div className="name">Photoshoot</div>
                            <div className="info">
                              Leave a lasting impression
                            </div>
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Pellentesque habitant morbi tristique
                              senectus et netus et malesuada fames{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div
                          className="service-block"
                          style={
                            {
                              /*visibility: visible;*/
                            }
                          }
                        >
                          <i className="ico fas fa-first-aid highlight"></i>
                          <div className="text-block">
                            <div className="name">First Aid</div>
                            <div className="info">Thinking beyond tomorrow</div>
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Pellentesque habitant morbi tristique
                              senectus et netus et malesuada fames{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Services;
