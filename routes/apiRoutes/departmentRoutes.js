const database = require("../../db/connection");
const inquirer = require("inquirer");

// //view all departments
// router.get("/departments", (req, res) => {
//   const sql = `SELECT * FROM departments`;

//   database.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.json({ message: "success, Look at all the departments", data: rows });
//   });
// });

// // add a department
// router.post("/department", ({ body }, res) => {
//   const sql = `INSERT INTO departments (id, name) VALUES (?,?)`;

//   const params = [body.id, body.name];

//   database.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       console.log(err, "Error in adding a department");
//       return;
//     }
//     res.json({
//       message: "successful Department Add",
//       data: body,
//     });
//   });
// });

// module.exports = router;

function getDepartments() {
  const sql = `SELECT * FROM departments`;
  database.query(sql, function (err, rows) {
    console.table(rows);
  });
}

function newDepartment() {
  const addDepartmentQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the department name? ",
    },
  ];
  inquirer.prompt(addDepartmentQuestions).then((response) => {
    const departmentName = response.name;
    console.log(departmentName);

    const sql = `INSERT INTO departments (name) VALUES (?)`;

    const params = [departmentName];

    database.query(sql, params, (err, result) => {
      if (err) {
        console.log(err, "Error in adding a department");
        return;
      }
      console.log(result);
    });
  });
}
module.exports = { getDepartments, newDepartment };
