const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }



  getOffice(){
    return this.officeNumber;
  }
};

module.exports = Manager;