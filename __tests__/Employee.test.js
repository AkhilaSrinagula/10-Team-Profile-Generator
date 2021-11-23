// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('David', 10, 'davidmathew@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets name from getName() 
test('gets employee name', () => {
  const name = "David Mathew";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

// gets id from getId() 
test('gets employee ID', () => {
  const id = "1";
  const employee = new Employee("David Mathew", id, "davidmathew@gmail.com");
  expect(employee.id).toBe(id);
});

// gets emails from getEmail()
test('gets employee email', () => {
  const email = "davidmathew@gmail.com";
  const employee = new Employee("David Mathew", 1, email);
  expect(employee.getEmail()).toBe(email);
});

// gets role from getRole()
test('gets role of employee', () => {
  const role = "Employee";
  const employee = new Employee("David Mathew", 1, "davidmathew@gmail.com");
  expect(employee.getRole()).toBe(role);
}); 