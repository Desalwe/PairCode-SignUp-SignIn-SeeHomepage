const User = require("../models/User");
const { createToken } = require("../services/jwt");

// const seeIt = (req, res) => {
//   // const form = JSON.parse(JSON.stringify(req.body));
//   console.log(req.body);
// };

const createUser = (req, res) => {
  User.create(req.body, err => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User created!" });
  });
};

const loginUser = (req, res, next) => {
  User.findByNameAndPassword(req.body.signInNameName, req.body.signInPasswordName, (err, user) => {
    if (err) {
      return res.status(500).json({ flash: err.message });
    } else if (!user) {
      return res.status(400).json({ flash: "you got to sign up first!" });
    } else {
      req.token = createToken(user);
      // WORK OUT HOW TO SOLVE THIS!!
    }
  });
  next();
};

module.exports = { createUser, loginUser };
