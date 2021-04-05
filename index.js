const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./library/manager");
const Intern = require("./library/intern");
const Engineer = require("./library/engineer");
const Employee = require("./library/employee");

const employees = [];

function start() {
  basicHtml();
  chooseRole();
}

function chooseRole() {
  inquirer
    .prompt([
      {
        message: "Enter team member's name",
        name: "name",
      },
      {
        type: "list",
        message: "Select team member's role",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
      {
        message: "Enter team member's id",
        name: "id",
      },
      {
        message: "Enter team member's email address",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub username";
      } else if (role === "Intern") {
        roleInfo = "school name";
      } else {
        roleInfo = "office number";
      }
      inquirer
        .prompt([
          {
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo",
          },
          {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["yes", "no"],
            name: "moreMembers",
          },
        ])
        .then(function ({ roleInfo, moreMembers }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          employees.push(newMember);
          addCard(newMember).then(function () {
            if (moreMembers === "yes") {
              chooseRole();
            } else {
              finishFile();
            }
          });
        });
    });
}

function basicHtml() {
  const tags = `<!DOCTYPE html>
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
     <div class="row">`;
  fs.writeFile("team.html", tags, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Please begin");
}

function addCard(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getID();
    const email = member.getEmail();
    let card = "";
    if (role === "Engineer") {
      const gitHub = member.getGithub();
      card = `<div
      class="card bg-dark justify-content-center align-items-center"
      style="width: 18rem"
    >
      <div class="col card-header">
        <h4>${name}</h4>
      </div>

      <div class="col card-header">
        <h4>Engineer</h4>
      </div>

      <ul class="list-group list-group-flush text">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">GitHub Username: ${GitHub}</li>
      </ul>
    </div>`; 
    } else if (role === "Intern") {
      const school = member.getSchool();
      card = `<div
      class="card bg-dark justify-content-center align-items-center"
      style="width: 18rem"
    >
      <div class="col card-header">
        <h4>${name}</h4>
      </div>

      <div class="col card-header">
        <h4>Intern</h4>
      </div>

      <ul class="list-group list-group-flush text">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">School Name: ${school}</li>
      </ul>
    </div>`;
    } else {
      const officeNum = member.getOffice();
      card = `<div
      class="card bg-dark justify-content-center align-items-center"
      style="width: 18rem"
    >
      <div class="col card-header">
        <h4>${name}</h4>
      </div>

      <div class="col card-header">
        <h4>Manager</h4>
      </div>

      <ul class="list-group list-group-flush text">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Office Number: ${officeNum}</li>
      </ul>
    </div>`;
    }
    console.log("adding team member");
    fs.appendFile("team.html", card, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function finishFile() {
  const html = ` </div>
    </div>
    
</body>
</html>`;

  fs.appendFile("team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("Team member profiles are complete");
}

start();
