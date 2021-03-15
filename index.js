const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const util = require("util");
const Manager = require("./library/manager");
const Intern = require("./library/intern");
const Engineer = require("./library/engineer");

// <!-- GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated -->

function questions(){
   return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team member's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is the employee's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
    }] 
    ).then(
      chooseRole()
    )
  ;
};

function chooseRole() {
  // inquirer.prompt
  ({
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
      name: "managerOffice",
      message: "What is the manager's office number?",
    },

   addOther()
  );
};

// const engineerOnly = () => {
//   inquirer.prompt(
//     {
//       type: "input",
//       name: "Git",
//       message: "What is the engineer's GitHub username?",
//     },

//     addOther()
//   );
// };

// const internOnly = () => {
//   inquirer.prompt(
//     {
//       type: "input",
//       name: "internSchool",
//       message: "What is the intern's school?",
//     },

//     addOther()
//   );
// };

// function addOther() {
//   inquirer.prompt({
//     type: "list",
//     name: "another",
//     message: "Do you want to add another team member?",
//     choices: ["Yes", "No"],
//   }).then;
//   if (addOther) {
//     return questions();
//   } else {
//     createHTML();
//   }
// }
const createHTML = (answers) =>
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
  };

questions();
