const axios = require("axios");

const apiRoot = "https://certifiedfreshevents.api-us1.com/api/3/";

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

    return axios({
      method: "post",
      url: apiRoot + "contacts",
      data: {
        contact: {
          email: email,
          firstName: firstName,
          lastName: lastName,
        },
      },
      headers: {
        "Api-Token": process.env.ACTIVECAMPAIGN_API,
      },
    })
      .then((res) => {
        const response = { msg: "Good news! You've been added." };
        return {
          statusCode: 200,
          body: JSON.stringify(response),
        };
      })
      .catch((err) => {
        const response = { errorMsg: err.response.data.errors[0].title };
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
