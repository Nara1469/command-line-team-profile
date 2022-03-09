const Employee = require('../lib/Employee');

describe('Employee class', () => {
  describe('Initialization', () => {
    it('Creates an Employee object when called with the "new" keyword', () => {
      const employee = new Employee('Dan', '001', 'test@gmail.com');

      expect(typeof (employee)).toEqual('object');
    });

    it('Creates "firstName" property', () => {
      const employee = new Employee('Dan', '001', 'test@gmail.com');

      expect(employee.firstName).toEqual('Dan');
    });

    it('Creates "id" property', () => {
      const employee = new Employee('Dan', '001', 'test@gmail.com');

      expect(employee.id).toEqual('001');
    });

    it('Creates "email" property', () => {
      const employee = new Employee('Dan', '001', 'test@gmail.com');

      expect(employee.email).toEqual('test@gmail.com');
    });

    describe('getName', () => {
      it('should return a "firstName" property that has an updated value', () => {
        const employee = new Employee('Dan', '001', 'test@gmail.com');

        expect(employee.getName()).toEqual('Dan');
      });
    });

    describe('getId', () => {
      it('should return a "id" property that has an updated value', () => {
        const employee = new Employee('Dan', '001', 'test@gmail.com');

        expect(employee.getId()).toEqual('001');
      });
    });

    describe('getName', () => {
      it('should return a "email" property that has an updated value', () => {
        const employee = new Employee('Dan', '001', 'test@gmail.com');

        expect(employee.getEmail()).toEqual('test@gmail.com');
      });
    });

    describe('getRole', () => {
      it('should return "Employee" value', () => {
        const employee = new Employee('Dan', '001', 'test@gmail.com');
        const role = 'Employee';

        expect(employee.getRole()).toEqual(role);
      });
    });

  });
});
