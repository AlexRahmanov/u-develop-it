require("dotenv").config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: process.env.USER,
  // Your MySQL password
  password: process.env.PASSWORD,
  database: 'election'
});

module.exports = db;
