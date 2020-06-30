import React, { Component } from "react";
import About from "../components/main/About";
import Facts from "../components/main/Facts";
import Skills from "../components/main/Skills";
import Resume from "../components/main/Resume";
import Portfolio from "./main/Portfolio";
import Services from "./main/Services";
import Testimonials from "./main/Testimonials";

class Main extends Component {
  render() {
    let resumeFullData = this.props.resumeFullData;
    return (
      <React.Fragment>
        <main id="main">
          <About aboutData={resumeFullData.aboutData} />
          <Facts factsData={resumeFullData.factsData} />
          <Skills skillsData={resumeFullData.skillsData} />
          <Resume resumeData={resumeFullData.resumeData} />
          {/* <Portfolio portfolioData={resumeFullData.portfolioData} />
          <Services /> */}
          {/* End Contact Section */}
        </main>
        {/* End #main */}
      </React.Fragment>
    );
  }
}

export default Main;
