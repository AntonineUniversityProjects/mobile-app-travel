const axios = require('axios');

module.exports = async function (context, req) {
    const { to, subject, text } = req.body;

    try {
        const response = await axios.post(
          "https://api.mailgun.net/v3/sandboxd5e18814a2e14992a60414ac03f5cd48.mailgun.org/messages",
          {
            from: "roy.gebrayel11@gmail.com",
            to ,
            subject,
            text,
          },
          {
            auth: {
              username: "api",
              password: "47dbce86b662593c541ed7e7dc174a98-07f37fca-784b1064",
            },
          }
        );

        context.res = {
            status: 200,
            body: 'Email sent successfully',
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Internal server error',
        };
    }
};

