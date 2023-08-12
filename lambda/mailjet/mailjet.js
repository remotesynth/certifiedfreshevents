const axios = require("axios");
const Mailjet = require("node-mailjet");

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

exports.handler = async (event, context, callback) => {
  try {
    if (!event.body) {
      return {
        statusCode: 500,
        body: "email query parameter required",
      };
    }
    const body = JSON.parse(event.body);
    const email = body.email;
    const firstName = body.firstName ? body.firstName : "";
    const lastName = body.lastName ? body.lastName : "";
    if (!email) {
      return {
        statusCode: 500,
        body: "email query parameter required",
      };
    }

    return mailjet
      .post("contact")
      .request({
        Email: email,
        IsExcludedFromCampaigns: false,
        Name: firstName + " " + lastName,
      })
      .then((res) => {
        const response = { msg: "Good news! You've been added." };
        return {
          statusCode: 200,
          body: JSON.stringify(response),
        };
      })
      .catch((err) => {
        console.log(err);
        const response = { errorMsg: err.response.statusText };
        return {
          statusCode: 200,
          body: JSON.stringify(response),
        };
      });
  } catch (err) {
    console.log(err);
    return { statusCode: 500, body: err.toString() };
  }
};
