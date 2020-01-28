const connection = require("../db/config");

const User = {};

User.create = (userInfo, callback) => {
  connection.query(
    `INSERT INTO users (name, passwordHash) VALUES ("pizza", "pizza2")`,
    (err, results) => {
      callback(err, results);
    }
  );
};

module.exports = User;
