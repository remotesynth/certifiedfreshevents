const axios = require('axios');

const apiRoot = 'https://certifiedfreshevents.api-us1.com/api/3/';


exports.handler = async (event, context, callback) => {
  try {
    if(!event.body) {
      return { 
        statusCode: 500, 
        body: 'email query parameter required'
      };
    }

    const body = JSON.parse(event.body);
    const email = body.email;
    if(!email) {
      return { 
        statusCode: 500, 
        body: 'email query parameter required' 
      };
    }
    
    return axios({
      method: 'post',
      url: apiRoot + 'contacts',
      data:{
        'contact': {
          'email':email
        }
      },
      headers: {
        'Api-Token': process.env.ACTIVECAMPAIGN_API
      }
    }).then(res => {
      console.log(res);
      return {
        statusCode:200, 
        body: JSON.stringify(res.data)
      }
    })
    .catch(err => {
      return { statusCode: 200, body: JSON.stringify(err.response.data.errors[0]) };
    });

  } catch (err) {[]
    return { statusCode: 500, body: err.toString() };
  }

};