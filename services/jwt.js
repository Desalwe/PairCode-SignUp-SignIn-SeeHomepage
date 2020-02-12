const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const JWT_KEY = "super-secret-key";

const createToken = user => {
  return jwt.sign(
    { id: user.id },
    JWT_KEY,
    { expiresIn: 60 }
    // woudl ususlaly be { expiresIn: 60 * 60 * 24}     or something
  );
};

const authenticateWithJwt = () => {
  console.log("working?");
  return expressJwt({ secret: JWT_KEY });
};

module.exports = { createToken, authenticateWithJwt };

// .sign method takes ({the claim}, the key, expiry time)
// it uses the key to verify the claim (which is where you claim to be so-and-so).

// createToken is used when you're signing up or when you're logging in and your last token has expired
// authenticateWithJwt is used when you're logging in and your last token is still valid
