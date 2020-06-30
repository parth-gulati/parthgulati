import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import $ from "jquery";

function onChange(isVisible) {
  if (isVisible) {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  }
}

export default class Skills extends Component {
  render() {
    let skillsData = this.props.skillsData;
    return (
      <React.Fragment>
        <section id="skills" className="skills section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Skills</h2>
              <p>{skillsData.description}</p>
            </div>
            <VisibilitySensor onChange={onChange}>
              <div className="row skills-content">
                <div className="col-lg-6">
                  <div className="progress">
                    <span className="skill">
                      {skillsData.skill1}{" "}
                      <i className="val">{skillsData.val1}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skillsData.val1}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      {skillsData.skill2}{" "}
                      <i className="val">{skillsData.val2}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skillsData.val2}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      {skillsData.skill3}{" "}
                      <i className="val">{skillsData.val3}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skillsData.val3}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="progress">
                    <span className="skill">
                      {skillsData.skill4}{" "}
                      <i className="val">{skillsData.val4}</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skillsData.val4}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      WordPress/CMS <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">
                      Photoshop <i className="val">55%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </VisibilitySensor>
          </div>
        </section>
        {/* End Skills Section */}
      </React.Fragment>
    );
  }
}
