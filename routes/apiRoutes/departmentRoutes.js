const express = require("express");
const router = express.Router();
const database = require("../../db/connection");

//view all departments
router.get("/departments", (req, res) => {
  const sql = `SELECT * FROM departments`;

  database.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ message: "success", data: rows });
  });
});

// add a department
router.post("/departments", ({ body }, res) => {
  const sql = `INSERT INTO departments (id, name) VALUES (?,?)`;

  const params = [body.id, body.name];

  database.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      console.log(err, "Error in adding a department");
      return;
    }
    res.json({
      message: "successful Department Add",
      data: body,
    });
  });
});

module.exports = router;
