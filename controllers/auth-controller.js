const User = require("../models/User");

const seeIt = (req, res) => {
  const form = JSON.parse(JSON.stringify(req.body));
  console.log(form);
  console.log("LOOOOOK HHEEEEERRRR", req.body.signUpNameName);
};

const createUser = (req, res) => {
  console.dir(req);
  User.create(req.body, err => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User created!" });
  });
};

module.exports = { seeIt, createUser };
