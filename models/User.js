const connection = require("../db/config");

const User = {};

User.create = (userInfo, callback) => {
  // console.log("here: ", userInfo)
  connection.query(
    `INSERT INTO users (name, passwordHash) VALUES (?, SHA2(?, 256))`, [userInfo.signUpNameName, userInfo.signUpPasswordName],
    err => {
      callback(err);
    }
  );
};

module.exports = User;
