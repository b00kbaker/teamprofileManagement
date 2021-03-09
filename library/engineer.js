const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email, engineer);
    this.github = github;
  }

  getName() {
    console.log(this.name);
  }

  getID() {
    console.log(this.id);
  }

  getEmail() {
    console.log(this.email);
  }

  getRole() {
    console.log(this.role);
  }

  getGithub(){
      console.log(this.github);
  }
}


engineer.getName();
engineer.getID();
engineer.getEmail();
engineer.getRole();
engineer.getGithub();