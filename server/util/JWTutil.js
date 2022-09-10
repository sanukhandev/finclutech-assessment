const jwt = require("jsonwebtoken");
const {jwtSecret} = require('../config');
const createJWT = (payload, expiresIn="1d") => {
  return jwt.sign(payload, jwtSecret, { expiresIn });
}

const verifyJWT = (token) => {
  return jwt.verify(token, jwtSecret);
}

module.exports = {
  createJWT,
  verifyJWT
}
