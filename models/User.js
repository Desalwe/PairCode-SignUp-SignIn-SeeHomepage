const connection = require("../db/config");

const User = {};

User.create = (userInfo, callback) => {
  // console.log("here: ", userInfo)
  connection.query(
    `INSERT INTO users (name, passwordHash) VALUES (?, SHA2(?, 256))`,
    [userInfo.signUpNameName, userInfo.signUpPasswordName],
    err => {
      callback(err);
    }
  );
};

User.findByNameAndPassword = (name, password, callback) => {
  connection.query(
    `SELECT * FROM users WHERE name = ? AND passwordHash = SHA2(?, 256)`,
    [name, password],
    (err, results) => {
      console.log("results: ", results);
      callback(err, cleanUser(results[0]));
    }
  );
};

const cleanUser = user => {
  return user ? { ...user, passwordHash: "hidden" } : undefined;
};

module.exports = User;
