const mysql = require('mysql');

const connection = mysql.createConnection({
  port: 8080,
  host: 'localhost',
  user: 'root',
  password: 'Franklin09',
  database: 'burgers_db'
});

connection.connect((err) => {
  if (err) {
    console.error(`Error: Connection attempt failed!\n${err.stack}`);
    return;
  }
});

module.exports = connection;