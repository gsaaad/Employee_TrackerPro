const mysql = require("mysql2");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "gsaaadMYSQL",
  database: "EmployeeTracker",
});

module.exports = database;
