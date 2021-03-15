const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, "intern");
    this.school = school;
  }

  getSchool(){
      console.log(this.school);
  }
}



intern.getSchool();

module.exports = Intern;