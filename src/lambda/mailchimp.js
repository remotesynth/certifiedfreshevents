const request = require('request');

exports.handler = function(event, context, callback) {
    const body = JSON.parse(event.body);
    const requestOptions = {
        uri: 'https://us16.api.mailchimp.com/3.0/lists/ddcfa6d68b/members/',
        headers: {
            Authorization: 'apikey ' + process.env.MAILCHIMP_API
        },
        body: {
            email_address: body.email,
            status: "subscribed",
            merge_fields: {
                FNAME: "",
                LNAME: ""
            }
        },
        json: true,
        resolveWithFullResponse: true
    };

    request.post(requestOptions, (error, res, body) => {
        if (error) {
            callback('Failed!');
        }
        else {
            callback(null, {
                statusCode: body.status,
                body: body.detail
            });
        }
    });
}