import React, { Component } from "react";
import Typewriter from "typewriter-effect";

export default class Hero extends Component {
  render() {
    const { heroData } = this.props.resumeFullData;
    return (
      <React.Fragment>
        <section
          id="hero"
          className="d-flex flex-column justify-content-center"
          style={{ textAlign: "left" }}
        >
          <div className="container" data-aos="zoom-in" data-aos-delay={100}>
            <h1>{heroData.name}</h1>
            <div
              className="landingtext"
              style={{
                display: "inline",
                verticalAlign: "top",
              }}
            >
              <p>
                I'm a
                <Typewriter
                  options={{
                    strings: [
                      "Developer.",
                      `<span>Gamer.<span>`,
                      "Science <span>Enthusiast.</span>",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
            <div className="social-links">
              <a href={heroData.twitter} className="twitter">
                <i className="bx bxl-twitter" />
              </a>
              <a href={heroData.facebook} className="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href={heroData.instagram} className="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href={heroData.linkedin} className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
              <a href={heroData.github} className="github">
                <i className="bx bxl-github" />
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
