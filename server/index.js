const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log("We are live on port 4444");
});

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.post("/api/v1", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "contactformpattypan@gmail.com",
      pass: "WOOHOO@123",
    },
  });

  var mailOptions = {
    from: data.email,
    to: "ENTER_YOUR_EMAIL",
    subject: `<h1>${data.subject}</h1>`,
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
