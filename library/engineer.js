const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, github) {
    super(name, id, email, engineer);
    this.github = github;
  }

  getGithub(){
      console.log(this.github);
  }
}

engineer.getGithub();

module.exports = Engineer;