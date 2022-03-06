const Employee = require('../Employee');

describe('Employee class', () => {
  it('Creates an array of objects', () => {
    const employee = new Employee('Manager');

    expect(employee.firstName).toBeInstanceOf(firstName);

  });

  describe('getName', () => {
    it('Input name entered', () => {
      expect.toBeInstanceOf(firstName).toBe(true);
    });

  });
});
