import React, { Component } from "react";
import CountUp, { startAnimation } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Ticker from "../common/Ticker";

class Facts extends Component {
  render() {
    let factsData = this.props.factsData;
    return (
      <React.Fragment>
        <section id="facts" className="facts">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Facts</h2>
              <p>{factsData.description}</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="icofont-simple-smile" />
                  <Ticker
                    className="counter-up"
                    end={factsData.c1}
                    duration={3}
                    style={{ fontSize: "24px" }}
                  />
                  <p>{factsData.cd1}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="icofont-document-folder" />
                  <Ticker
                    className="counter-up"
                    end={factsData.c2}
                    duration={3}
                    style={{ fontSize: "24px" }}
                  />
                  <p>{factsData.cd2}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="icofont-live-support" />
                  <Ticker
                    className="counter-up"
                    end={factsData.c3}
                    duration={3}
                    suffix="+"
                    style={{ fontSize: "24px" }}
                  />
                  <p>{factsData.cd3}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="icofont-users-alt-5" />
                  <Ticker
                    className="counter-up"
                    end={factsData.c4}
                    duration={3}
                    style={{ fontSize: "24px" }}
                  />
                  <p>{factsData.cd4}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Facts;
