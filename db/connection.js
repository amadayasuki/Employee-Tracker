const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    //username
    user: process.env.MYSQL_USER,
    //password
    password:process.env.MYSQL_KEY,
    database:"employees"
  });
  
  connection.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = connection;
  