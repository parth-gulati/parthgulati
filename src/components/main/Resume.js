import React, { Component } from "react";
import resumeFullData from "../../ResumeData";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Resume</h2>
              <p>{resumeData.about}</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>{resumeData.name}</h4>
                  <p>
                    <em>{resumeData.summary}</em>
                  </p>
                  <ul>
                    <li>{resumeData.address}</li>
                    <li>{resumeData.phone}</li>
                    <li>{resumeData.email}</li>
                  </ul>
                </div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>{resumeData.edu1.title}</h4>
                  <h5>{resumeData.edu1.period}</h5>
                  <p>
                    <em>{resumeData.edu1.school}</em>
                  </p>
                  <p>{resumeData.edu1.des}</p>
                </div>
                <div className="resume-item">
                  <h4>{resumeData.edu2.title}</h4>
                  <h5>{resumeData.edu2.period}</h5>
                  <p>
                    <em>{resumeData.edu2.school}</em>
                  </p>
                  <p>{resumeData.edu2.des} </p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>{resumeData.ex1.title}</h4>
                  <h5>{resumeData.ex1.period}</h5>
                  <p>
                    <em>{resumeData.ex1.location}</em>
                  </p>
                  <ul>
                    <li>{resumeData.ex1.des1}</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>{resumeData.ex2.title}</h4>
                  <h5>{resumeData.ex2.period}</h5>
                  <p>
                    <em>{resumeData.ex2.location}</em>
                  </p>
                  <ul>
                    <li>{resumeData.ex2.des1}</li>
                    <li>{resumeData.ex2.des2}</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>{resumeData.ex3.title}</h4>
                  <h5>{resumeData.ex3.period}</h5>
                  <p>
                    <em>{resumeData.ex3.location}</em>
                  </p>
                  <ul>
                    <li>{resumeData.ex3.des1}</li>
                    <li>{resumeData.ex3.des2}</li>
                    <li>{resumeData.ex3.des3}</li>
                    <li>{resumeData.ex3.des4}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
