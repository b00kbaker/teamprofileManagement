const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const util = require("util");
const Manager = require("./library/manager");
const Intern = require("./library/intern");
const Engineer = require("./library/engineer");

function chooseRole() {
  inquirer.prompt({
    type: "list",
    name: "role",
    message: "This employee has what job title?",
    choices: ["manager", "engineer", "intern"],
  }).then;
  if ("manager") {
    managerOnly();
  } else if ("engineer") {
    engineerOnly();
  } else {
    internOnly();
  }
};

const managerOnly = () => {
  inquirer.prompt(
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "managerOffice",
      message: "What is the manager's office number?",
    },

    addOther()
  );
};

const engineerOnly = () => {
  inquirer.prompt(
    {
      type: "input",
      name: "EngineerName",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "engineerID",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "Git",
      message: "What is the engineer's GitHub username?",
    },

    addOther()
  );
};

const internOnly = () => {
  inquirer.prompt(
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "internID",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the intern's school?",
    },

    addOther()
  );
};

function addOther() {
  inquirer.prompt({
    type: "list",
    name: "another",
    message: "Do you want to add another team member?",
    choices: ["Yes", "No"],
  }).then;
  if (addOther) {
    return questions();
  } else {
    createHTML();
  }
};


const createHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <title>Team Info</title>

    <style>

      .navbar {
          background-color:red!important;
      }  

      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      .card {
        padding: 15px;
        border-radius: 6px;
        background-color:white !important;
        color: white;
        margin: 15px;
      }

      .card-header {
          background-color: blue !important;
      }

      .text {
        padding: 15px;
        border-radius: 6px;
        background-color: whitesmoke;
        color: black;
        margin: 15px;
      }

      .col {
        flex: 1;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <nav
      class="navbar navbar-dark bg-dark justify-content-center align-items-center"
    >
      <span class="navbar-brand mb-0 h1">
        <h1>My Team</h1>
      </span>
    </nav>
    <div class="row">
      <div
        class="card bg-dark justify-content-center align-items-center"
        style="width: 18rem"
      >
        <div class="col card-header">
          <h4>Robert Bovee</h4>
        </div>

        <div class="col card-header">
          <h4>Manager</h4>
        </div>

        <ul class="list-group list-group-flush text">
          <li class="list-group-item">ID:</li>
          <li class="list-group-item">Email:</li>
          <li class="list-group-item">Office Number:</li>
        </ul>
      </div>
      <div
        class="card bg-dark justify-content-center align-items-center"
        style="width: 18rem"
      >
        <div class="col card-header">
          <h4>Brody</h4>
        </div>

        <div class="col card-header">
          <h4>Engineer</h4>
        </div>

        <ul class="list-group list-group-flush text">
          <li class="list-group-item">ID:</li>
          <li class="list-group-item">Email:</li>
          <li class="list-group-item">GitHub:</li>
        </ul>
      </div>
      <div
        class="card bg-dark justify-content-center align-items-center"
        style="width: 18rem"
      >
        <div class="col card-header">
          <h4>Addy</h4>
        </div>

        <div class="col card-header">
          <h4>Intern</h4>
        </div>

        <ul class="list-group list-group-flush text">
          <li class="list-group-item">ID:</li>
          <li class="list-group-item">Email:</li>
          <li class="list-group-item">School:</li>
        </ul>
      </div>
      <div
        class="card bg-dark justify-content-center align-items-center"
        style="width: 18rem"
      >
        <div class="col card-header">
          <h4>Quinn</h4>
        </div>

        <div class="col card-header">
          <h4>Intern</h4>
        </div>

        <ul class="list-group list-group-flush text">
          <li class="list-group-item">ID:</li>
          <li class="list-group-item">Email:</li>
          <li class="list-group-item">School:</li>
        </ul>
      </div>
    </div>
  </body>
</html>
`;

function init() {
  questions().then((answers) => {
    try {
      const html = createHTML(answers);
      fs.writeFileSync("index.html", html);
      console.log(
        "You have sucessfully created an index.html file, review for any potential errors."
      );
    } catch (error) {
      console.log(error);
    }
  });
}

chooseRole();
