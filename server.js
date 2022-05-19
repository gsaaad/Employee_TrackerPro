const inquirer = require("inquirer");

function EmployeeTrackerMenu() {
  console.log("Employee MANAGER");
  const questions = [
    {
      type: "list",
      name: "userWantsTo",
      message: "What would you like to do? (Use arrow keys)",
      choices: [
        "View All Employees",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
      ],
      validate: (validInput) => {
        if (validInput) {
          return true;
        }
        console.log("Please enter a Team Name");
        return false;
      },
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    if (answers.userWantsTo === "View All Employees") {
      console.log(answers.userWantsTo);
    }
    if (answers.userWantsTo === "Update Employee Role") {
      console.log(answers.userWantsTo);
    }
    if (answers.userWantsTo === "View All Roles") {
      console.log(answers.userWantsTo);
    }
    if (answers.userWantsTo === "Add Role") {
      console.log(answers.userWantsTo);
    }
    if (answers.userWantsTo === "View All Departments") {
      console.log(answers.userWantsTo);
    }
    if (answers.userWantsTo === "Add Department") {
      console.log(answers.userWantsTo);
    }
  });
}
EmployeeTrackerMenu();
