const requestify = require('requestify');

module.exports = async (req, res, next) => {
  // emulates 409 error
  if (req.method === 'POST') {
    const response = await requestify.get(`http://localhost:3000/clients?email=${req.body.email}`);

    if (response.getBody().length) {
      res.status(409).jsonp({
        error: "Client with this email is already exists."
      });
    } else {
      next();
    }
  } else {
    next();
  }
};
