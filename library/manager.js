const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email, manager);
    this.officeNumber = officeNumber;
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
}


manager.getName();
manager.getID();
manager.getEmail();
manager.getRole();
