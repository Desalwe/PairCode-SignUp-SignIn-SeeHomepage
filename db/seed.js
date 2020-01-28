const connection = require("./config");

const seed = `
INSERT INTO users
(name, passwordHash) VALUES ('Santa', 'christmas123')
`;

connection.query(seed, err => {
  if (err) {
    console.log(err);
    connection.end();
  } else {
    console.log("users table seeded");
    connection.end();
  }
});
