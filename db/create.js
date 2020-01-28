const connection = require("./config");

const Users = `
  CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    passwordHash CHAR(64) NOT NULL,
    PRIMARY KEY (id)
  );
`;

connection.query(Users, err => {
  if (err) {
    console.log(err);
    connection.end();
  } else {
    console.log("users created");
    connection.end();
  }
});
