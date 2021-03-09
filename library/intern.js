const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(name, id, email, intern);
    this.school = school;
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

  getSchool(){
      console.log(this.school);
  }
}


intern.getName();
intern.getID();
intern.getEmail();
intern.getRole();
intern.getSchool();