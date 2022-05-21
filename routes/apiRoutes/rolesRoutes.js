const database = require("../../db/connection");
const inquirer = require("inquirer");

function getRoles() {
  const sql = `SELECT * FROM roles`;
  return database.query(sql, function (err, rows) {
    console.table(rows);
  });
}

function newRole() {
  const addDepartmentQuestions = [
    {
      type: "input",
      name: "title",
      message: "What is the role title: ",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the role salary:",
    },
    {
      type: "input",
      name: "roleDepartmentId",
      message: "Which department ID does it belong to: [insert department ID]",
    },
  ];
  inquirer.prompt(addDepartmentQuestions).then((response) => {
    const roleTitle = response.title;
    const salary = response.salary;
    const departmentId = response.roleDepartmentId;
    console.log(roleTitle, salary, departmentId);

    const sql = `INSERT INTO roles (title,salary,department_id) VALUES (?,?,?)`;

    const params = [roleTitle, salary, departmentId];

    database.query(sql, params, (err, result) => {
      if (err) {
        console.log(err, "Error in adding a department");
        return;
      }
      console.log(result);
    });
  });
}
module.exports = { getRoles, newRole };
