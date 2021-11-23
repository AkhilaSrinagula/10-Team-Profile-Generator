const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern("Tom", 1, "tomsmear@gmail.com", "school");
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const school = "Hogwarts School of Witchcraft";
    const employee = new Intern("Tom", 1, "tomsmear@gmail.com", school);
    expect(employee.school).toBe(school);
});

// gets role from getRole()
test('gets role of employee', () => {
    const role = "Intern";
    const employee = new Intern("tom", 1, "tomsmear@gmail.com", "tomsmear");
    expect(employee.getRole()).toBe(role);
}); 