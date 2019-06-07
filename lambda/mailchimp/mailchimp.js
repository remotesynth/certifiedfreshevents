const axios = require('axios');
var crypto = require('crypto');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Max-Age': '2592000',
  'Access-Control-Allow-Credentials': 'true',
};

const apiRoot = 'https://us16.api.mailchimp.com/3.0/lists/ddcfa6d68b/members/';


exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const email = body.email;
    if(!email) {
      return { 
        statusCode: 500, 
        body: 'email query parameter required' 
      };
    }

    // https://gist.github.com/kitek/1579117
    let emailhash = crypto.createHash('md5').update(email).digest("hex");

    return axios({
      method: 'put',
      url: apiRoot + emailhash,
      data:{
        email_address:email,
        status:'subscribed'
      },
      auth: {
        'username': 'anythingreally',
        'password': 'b8ceff138e4eb6cc7e746a9141a0abea-us16' // process.env.MAILCHIMP_API
      }
    }).then(res => {
      return {
        statusCode:200, 
        body: JSON.stringify(res.data),
        headers
      }
    })
    .catch(err => {
      console.log('returning from here', err.response.data.detail);
      return { statusCode: 500, body: JSON.stringify(err.response.data) };
    });

  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }

};