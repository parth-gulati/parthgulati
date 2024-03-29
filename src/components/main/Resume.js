import React, { Component } from "react";
import resumeFullData from "../../ResumeData";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    let projects = resumeData.projects;
    let projectsHTML = projects.map((project, index) => {
      if (index < 4)
        return (
          <div className="resume-item pb-0">
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <p>
              <a href={project.link}>View Project</a>
            </p>
            <br />
          </div>
        );
    });

    let projectsHTML2 = projects.map((project, index) => {
      if (index >= 4) {
        return (
          <div className="resume-item pb-0">
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <p>
              <a href={project.link}>View Project</a>
            </p>
            <br />
          </div>
        );
      }
    });

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
                  <h5>Full Stack Engineer - Computer Vision @ Intuitive AI</h5>
                  <p>
                    <em>{resumeData.summary}</em>
                  </p>
                </div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>{resumeData.edu0.title}</h4>
                  <h5>{resumeData.edu0.period}</h5>
                  <p>
                    <em>{resumeData.edu0.school}</em>
                  </p>
                  <p>
                    <b>CGPA: </b>
                    {resumeData.edu0.cgpa}
                  </p>
                  <p>
                    <b>Relevant Classes: </b>
                    {resumeData.edu0.classes}
                  </p>
                </div>
                <div className="resume-item">
                  <h4>{resumeData.edu1.title}</h4>
                  <h5>{resumeData.edu1.period}</h5>
                  <p>
                    <em>{resumeData.edu1.school}</em>
                  </p>
                  <p>
                    <b>CGPA: </b>
                    {resumeData.edu1.cgpa}
                  </p>
                  <p>
                    <b>Relevant Classes: </b>
                    {resumeData.edu1.classes}
                  </p>
                </div>
                
                <h3 className="resume-title">Volunteer Work</h3>

                <div className="resume-item pb-0">
                  <h4>{resumeData.volunteer.title}</h4>
                  <h5>{resumeData.volunteer.period}</h5>
                  <p>
                    <em>{resumeData.volunteer.location}</em>
                  </p>
                  <p>{resumeData.volunteer.desc}</p>
                </div>
                <br />
                <h3 className="resume-title">Projects</h3>
                {projectsHTML}
              </div>

              <div className="col-lg-6">
                {projectsHTML2}
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>{resumeData.ex7.title}</h4>
                  <h5>{resumeData.ex7.period}</h5>
                  <p>
                    <em>{resumeData.ex7.location}</em>
                  </p>
                  <ul>
                    <li>{resumeData.ex7.des1}</li>
                    <li>{resumeData.ex7.des2}</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>{resumeData.ex6.title}</h4>
                  <h5>{resumeData.ex6.period}</h5>
                  <p>
                    <em>{resumeData.ex6.location}</em>
                  </p>
                  <ul>
                    <li>{resumeData.ex6.des1}</li>
                    <li>{resumeData.ex6.des2}</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>{resumeData.ex5.title}</h4>
                  <h5>{resumeData.ex5.period}</h5>
                  <p>
                    <em>{resumeData.ex5.location}</em>
                  </p>
                  <ul>
                    <li>{resumeData.ex5.des1}</li>
                    <li>{resumeData.ex5.des2}</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>{resumeData.ex4.title}</h4>
                  <h5>{resumeData.ex4.period}</h5>
                  <p>
                    <em>{resumeData.ex4.location}</em>
                  </p>
                  <ul>
                    <li>{resumeData.ex4.des1}</li>
                    <li>{resumeData.ex4.des2}</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>{resumeData.ex1.title}</h4>
                  <h5>{resumeData.ex1.period}</h5>
                  <p>
                    <em>{resumeData.ex1.location}</em>
                  </p>
                  <ul>
                    <li>{resumeData.ex1.des1}</li>
                    <li>{resumeData.ex1.des2}</li>
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
                    <li>{resumeData.ex2.des3}</li>
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
