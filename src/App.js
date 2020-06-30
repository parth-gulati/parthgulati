import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import resumeFullData from "./ResumeData";
import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";

class App extends Component {
  componentDidMount() {
    // Navigation active state on scroll
    var nav_sections = $("section");
    var main_nav = $(".nav-menu, #mobile-nav");

    $(window).on("scroll", function () {
      var cur_pos = $(this).scrollTop() + 300;

      nav_sections.each(function () {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find("li").removeClass("active");
          }
          main_nav
            .find('a[href="#' + $(this).attr("id") + '"]')
            .parent("li")
            .addClass("active");
        }
        if (cur_pos < 200) {
          $(".nav-menu ul:first li:first").addClass("active");
        }
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="top">
          <Hero resumeFullData={resumeFullData} />
        </div>
        <Main resumeFullData={resumeFullData} />
        <Contact contactData={resumeFullData.contactData} />
        <Footer footerData={resumeFullData.footerData} />

        <div>
          <Link
            className="back-to-top"
            activeClass="back-to-top"
            smooth={true}
            to="top"
          >
            <i className="bx bx-up-arrow-alt" style={{ color: "white" }} />
          </Link>
          <div id="preloader" />
        </div>
      </div>
    );
  }
}

export default App;
