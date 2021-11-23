const Manager = require('../lib/Manager');

// creating manager object  
test('Manager Class', () => {
    const manager = new Manager('Jessica', 10, 'jessicaronaldo@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets manager role', () => {
    const manager = new Manager('Jessica', 10, 'jessicaronaldo@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 