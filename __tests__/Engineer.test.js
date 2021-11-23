const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer("Akhila", 1, "akhilasrinagula@gmail.com", "akhilasrinagula09");
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const github = "akhilasrinagula";
    const employee = new Engineer("Akhila", 1, "akhilasrinagula@gmail.com", github);
    expect(employee.github).toBe(github);
});

// gets role from getRole() 
test('gets role of employee', () => {
    const role = "Engineer";
    const employee = new Engineer("Akhila", 1, "akhilasrinagula@gmail.com", "akhilasrinagula");
    expect(employee.getRole()).toBe(role);
});
