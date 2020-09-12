import React, { Component } from "react";

class About extends Component {
  createMarkup() {
    return { __html: this.props.aboutData.description };
  }

  render() {
    let aboutData = this.props.aboutData;
    return (
      <React.Fragment>
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              <div
                style={{ textAlign: "left" }}
                dangerouslySetInnerHTML={this.createMarkup()}
              />
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="assets/img/profile-img.jpg"
                  className="img-fluid"
                  alt=""
                  style={{ opacity: 0.9 }}
                />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>{aboutData.title}</h3>
                <p className="font-italic">{aboutData.summary}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="icofont-rounded-right" />
                        <strong>Birthday: </strong>
                        {aboutData.birthday}
                      </li>
                      <li>
                        <i className="icofont-rounded-right" />
                        <strong>Website:</strong>{" "}
                        <a href={aboutData.website}> {aboutData.website}</a>
                      </li>
                      <li>
                        <i className="icofont-rounded-right" />
                        <strong>Phone:</strong> {aboutData.phone}
                      </li>
                      <li>
                        <i className="icofont-rounded-right" />
                        <strong>City:</strong> {aboutData.city}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="icofont-rounded-right" />
                        <strong>Age:</strong> {aboutData.age}
                      </li>
                      <li>
                        <i className="icofont-rounded-right" />
                        <strong>Degree:</strong> {aboutData.degree}
                      </li>
                      <li>
                        <i className="icofont-rounded-right" />
                        <strong>Email:</strong> {aboutData.email}
                      </li>
                      <li>
                        <i className="icofont-rounded-right" />
                        <strong>Freelance:</strong> {aboutData.availability}
                      </li>
                    </ul>
                  </div>
                </div>
                <p>{aboutData.bio}</p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </React.Fragment>
    );
  }
}

export default About;
