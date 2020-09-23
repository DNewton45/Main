// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/", function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var emailAddress = req.body.emailAddress;
  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Email Address: " + emailAddress);

  var data = {
    members: [
      {
      email_address: emailAddress,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };
  var jsonData = JSON.stringify(data);

  var options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/d0514142d3",
    method: "POST",
    auth: "authorization:eb054c5ff4cc69ca73be526804e1da99-us20"
  };


  const request = https.request(url, options, function(error, response, body) {
    if (error) {
      console.log(error);
      res.send("<h1>Sorry, it looks like there was a problem.</h1>");
    } else {
      console.log(response.statusCode);
      res.send("<h1>Success! Look forward to my weekly publications!</h1>");
    }
  });
  request.write(jsonData);
  request.end();
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function() {
  console.log("Server is now running on port 3000");
});


//eb054c5ff4cc69ca73be526804e1da99-us20 (My API key)

//List ID
//d0514142d3
