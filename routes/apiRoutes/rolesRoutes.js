const express = require("express");
const router = express.Router();
const database = require("../../db/connection");

// view all roles
router.get("/roles", (req, res) => {
  const sql = `SELECT * FROM roles`;

  database.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ message: "success, Look at all the roles", data: rows });
  });
});

// add a role
router.post("/role", ({ body }, res) => {
  const sql = `INSERT INTO roles (id, title, salary, department_id) VALUES (?,?,?,?)`;

  const params = [body.id, body.title, body.salary, body.department_id];

  database.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      console.log(err, "Error in adding a role!");
    }
    res.json({ message: "Successful Role add", data: body });
  });
});

module.exports = router;
