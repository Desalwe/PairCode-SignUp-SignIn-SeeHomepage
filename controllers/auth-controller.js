const User = require("../models/User");

// const seeIt = (req, res) => {
//   // const form = JSON.parse(JSON.stringify(req.body));
//   console.log(req.body);
// };

const createUser = (req, res) => {
  console.log(req.body);
  User.create(req.body, err => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User created!" });
  });
};

const loginUser = (req, res) => {
  User.login(req.body, err => {
    if (err) res.status(500).json({ flash: err.message });
    else next();
  });
};



module.exports = { createUser, loginUser };
