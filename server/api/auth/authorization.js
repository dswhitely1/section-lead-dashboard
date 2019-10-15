const jwt = require('jsonwebtoken');

const secret = process.env.SECRETS_OR_KEY || 'Testing';

module.exports = (req, res, next) => {
  console.log(req.headers);
  if (req.headers.authorization) {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(' ')[1];
    console.log(token);
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Unauthroized' });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'No Token Provided' });
  }
};
