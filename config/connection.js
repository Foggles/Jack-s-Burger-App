const mysql = require('mysql');
const dsn = "mysql://j41i2dha4ny2tm16:js9uj280j4sdd8ko@qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mn15czy110n0vw8o"
const connection = mysql.createConnection({
  host: "qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "j41i2dha4ny2tm16",
  password: "js9uj280j4sdd8ko",
  database: "mn15czy110n0vw8o",
});
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
// Export connection for our ORM to use.
module.exports = connection;