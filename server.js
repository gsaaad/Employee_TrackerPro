const express = require("express");
const inquirer = require("inquirer");
const router = express.Router();
const database = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");
//PORT + app plugin
const PORT = process.env.PORT || 3001;
const app = express();

//middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRoutes);

//univeral/catch any other page and send error
app.use((req, res) => {
  res.status(400).end();
  console.log("WRONG PAGE, PAGE NOT AVAILABLE");
});

database.connect((err) => {
  if (err) throw err;
  console.log("Employee Tracker Database Connected");

  app.listen(PORT, () => {
    console.log(`SERVER ONLINE~ PORT: ${PORT}`);
  });
});

function EmployeeTrackerMenu() {
  console.log("Employee MANAGER");
  const questions = [
    {
      type: "list",
      name: "userWantsTo",
      message: "What would you like to do? (Use arrow keys)",
      choices: [
        "View All Employees",
        "Add an Employee",
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
    if (answers.userWantsTo === "Add an Employee") {
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
