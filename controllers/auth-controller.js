const User = require("../models/User");

const createUser = (req, res) => {
  User.create(req.body, err => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: "User created!" });
  });
};

module.exports = createUser;
