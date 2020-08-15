import React, { Component } from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

class Contact extends React.Component {
  state = {
    name: "",
    message: "",
    subject: "",
    email: "",
    sent: false,
    loading: false,
    buttonText: "Send Message",
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "Sending",
      loading: true,
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      subject: this.state.subject,
    };

    axios
      .post("API_URI", data)
      .then((res) => {
        this.setState({ sent: true, loading: false }, this.resetForm());
      })
      .catch(() => {
        this.setState({ loading: false });
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      subject: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  render() {
    const loader =
      this.state.loading == true ? (
        <div className="loading">Loading</div>
      ) : null;
    const contactData = this.props.contactData;
    return (
      <React.Fragment>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
            </div>
            <div className="row mt-1">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="icofont-google-map" />
                    <h4>Location:</h4>
                    <p>{contactData.location}</p>
                  </div>
                  <div className="email">
                    <i className="icofont-envelope" />
                    <h4>Email:</h4>
                    <p>{contactData.email}</p>
                  </div>
                  <div className="phone">
                    <i className="icofont-phone" />
                    <h4>Call:</h4>
                    <p>{contactData.phone}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  role="form"
                  id="contact-form"
                  onSubmit={this.formSubmit}
                  className="php-email-form"
                >
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                        value={this.state.name}
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        value={this.state.email}
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      onChange={(e) =>
                        this.setState({ subject: e.target.value })
                      }
                      value={this.state.subject}
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      onChange={(e) =>
                        this.setState({ message: e.target.value })
                      }
                      value={this.state.message}
                      rows={5}
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <div className="validate" />
                  </div>
                  <div className="mb-3">
                    {loader}
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
