import React, { Component } from "react";

class Footer extends Component {
  render() {
    let footerData = this.props.footerData;
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="container">
            <h3>{footerData.name}</h3>
            <p>{footerData.data}</p>
            <div className="social-links">
              <a href={footerData.twitter} className="twitter">
                <i className="bx bxl-twitter" />
              </a>
              <a href={footerData.facebook} className="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href={footerData.instagram} className="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href={footerData.linkedin} className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
              <a href={footerData.github} className="github">
                <i className="bx bxl-github" />
              </a>
            </div>
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Pattypan</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits"></div>
          </div>
        </footer>
        {/* End Footer */}
      </React.Fragment>
    );
  }
}

export default Footer;
