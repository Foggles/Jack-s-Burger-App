const mysql2 = require('mysql2');

const connectionConfig = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "burgers_db"
};

const connection = mysql2.createConnection(connectionConfig);


modules.exports(connection);