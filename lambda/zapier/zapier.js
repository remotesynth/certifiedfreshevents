const axios = require('axios');


exports.handler = async (event, context, callback) => {
  try {
    if(!event.body) {
        return { 
            statusCode: 500, 
            body: 'Email and event code are required.'
        };
    }

    const body = JSON.parse(event.body);
    const email = body.email;
    const eventCode = body.eventcode;
    if(!email) {
        return { 
            statusCode: 500, 
            body: 'email query parameter required' 
        };
    }
    if(!eventCode) {
        return { 
            statusCode: 500, 
            body: 'eventCode query parameter required' 
        };
    }
    
    return axios({
      method: 'post',
      url: 'https://hooks.zapier.com/hooks/catch/2422393/ot2b8az/',
      data:{
            'email':email,
            'eventcode':eventcode;
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