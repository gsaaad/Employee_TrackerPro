const database = require("../../db/connection");
const inquirer = require("inquirer");

function getEmployees() {
  const sql = `SELECT * FROM employees
  LEFT JOIN roles ON employees.role_id = roles.id
  LEFT JOIN departments ON roles.department_id = departments.id`;
  return database.query(sql, function (err, rows) {
    console.table(rows);
  });
}

function newEmployee() {
  const addDepartmentQuestions = [
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name: ",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name:",
    },
    {
      type: "input",
      name: "role_id",
      message: "Which role ID does the employee belong to: [insert role ID]",
    },
    {
      type: "input",
      name: "manager_id",
      message: "Who supervises this employee: [insert manager Id]",
    },
  ];
  inquirer.prompt(addDepartmentQuestions).then((response) => {
    const employeeFirstName = response.first_name;
    const employeeLastName = response.last_name;
    const roleId = response.role_id;
    const managerId = response.manager_id;
    console.log(employeeFirstName, employeeLastName, roleId, managerId);

    const sql = `INSERT INTO employees (first_name,last_name,role_id, manager_id) VALUES (?,?,?,?)`;

    const params = [employeeFirstName, employeeLastName, roleId, managerId];
    console.log(params);

    database.query(sql, params, (err, result) => {
      if (err) {
        console.log(err, "Error in adding a department");
        return;
      }
      console.log(result);
    });
  });
}
module.exports = { getEmployees, newEmployee };
