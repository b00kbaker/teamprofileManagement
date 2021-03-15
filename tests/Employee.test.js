const Employee = require("../library/employee");

test('can we initialize',() => {
  const emp= new Employee()
  expect(typeof(emp)).toBe("object");
});

  























describe("Employee", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, id, email, and role if provided valid arguments", () => {
        const employee = new Employee("Sarah", 32, "1234@gmail.com", manager);
  
        // Verify that the new object has the correct properties
        expect(employee.name).toEqual("Sarah");
        expect(employee.id).toEqual(32);
      });
  
      it("should throw an error if provided no arguments", () => {
        // Wrap the object initialization in a callback function that Jest will run
        const cb = () => new Employee();
  
        // Verify that an error was thrown in the callback function
        expect(cb).toThrow();
      });
  
      it("should throw an error if not provided an ID", () => {
        const cb = () => new Employee("Sarah");
  
        // Define the error message that is expected to be thrown
        const err = new Error("Expected parameter 'ID' to be a non-negative number");
  
        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Employee(3, 2);
        const err = new Error("Expected parameter 'name' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if 'ID' is not a number", () => {
        const cb = () => new Employee("Sarah", "2");
        const err = new Error("Expected parameter 'ID' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if 'ID' is less than 0", () => {
        const cb = () => new Employee("Sarah", -1);
        const err = new Error("Expected parameter 'ID' to be a non-negative number");
  
        expect(cb).toThrowError(err);
      });
    });
  });
  