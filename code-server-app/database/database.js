const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" })

const db = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  port: process.env.MYSQL_ADDON_PORT,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
});


db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected');
});


module.exports = db;