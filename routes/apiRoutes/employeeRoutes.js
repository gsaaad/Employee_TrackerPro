const express = require("express");
const router = express.Router();
const database = require("../../db/connection");

//view all employees
router.get("/employees", (req, res) => {
  const sql = "SELECT * FROM employees";

  database.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ message: "Success, look at the employees list", data: rows });
  });
});

module.exports = router;
