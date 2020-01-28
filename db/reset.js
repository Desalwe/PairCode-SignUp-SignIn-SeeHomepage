const connection = require("./config");

// drop tables
connection.query("DROP TABLE users", err => {
  if (err) {
    console.log(err);
    connection.end();
  } else {
    console.log("users table dropped");
    connection.end();
  }
});
