const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./library/manager");
const Intern = require("./library/intern");
const Engineer = require("./library/engineer");
const Employee = require("./library/employee");

const employeesArray=[];

function start(){
  chooseRole();
  basicHTML();
}

function chooseRole() {
  inquirer.prompt
  ([
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
    },      
    
    {
    type: "list",
    name: "role",
    message: "This employee has what job title?",
    choices: ["Manager", "Engineer", "Intern"],
  }]).then(
    function ({ name, id, email, role }) {
      let extraRole = "";
      if (role === "Engineer"){
        extraRole = "GitHub username";
      }else if (role === "Intern"){
        extraRole = "school name";
      }else{
        extraRole = "office number";
      }
    },
    inquirer.prompt([{
      type: "input",
      name: "extraRole",
      message: `Enter team member's ${extraRole}`,
    },
    {
     type: "list",
     name: "another",
     message: "Do you want to add another team member?",
     choices: ["Yes", "No"],
    }])
    .then(function({extraRole, another}) {
      let anotherEmployee;
      if (role === "Engineer"){
        anotherEmployee = new Engineer(name, id, email, extraRole);
      }else if (role === "Intern"){
        anotherEmployee = new Intern(name, id, email, extraRole);
      }else{
        anotherEmployee = new Manager(name, id, email, extraRole);
      }
      employeesArray.push(anotherEmployee);
      addCard(anotherEmployee)
      .then(function(){
        if (another === "Yes"){
          chooseRole();
        }else{
          finishFile();
        }
     });
    })
);
     

function basicHTML(){
  const tags =
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
    <div class="row">`;
    fs.writeFile("team.html", html, function(err){
      if (err){
        console.log(err);
      }
    });

};

function addCard(employee) {
 return new Promise (function(resolve, reject){
   const name = employee.getName();
   const id = employee.getID();
   const email = employee.getEmail();
   const role = emplooyee.getRole();
   let card = "";
   if (role === "Engineer"){
       const GitHub = employee.getGithub();
       card =`<div
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
    } else if (role === "Intern")
    { 
      const school = employee.getSchool();
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
    }else {
      const officeNum = employee.getOffice();
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
    </div>`}
    fs.appendFile("team.html", card, function(err){
      if (err){
        return reject(err);
      };
      return resolve();
    });
 });
}   


      

function finishFile(){
 const tags =`
    </div>
  </body>
</html>`;

  fs.appendFile("team.html", html, function(err){
    if (err){
      console.log(err);
    }
  }); 
  console.log("View finished file")
};
}

start();
