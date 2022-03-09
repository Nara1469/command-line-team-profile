const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('Initialization', () => {
        it('Creates an Manager object when called with the "new" keyword', () => {
            const manager = new Manager('Dan', '001', 'test@gmail.com', '720-220-1234');

            expect(typeof (manager)).toEqual('object');
        });

        it('Creates "officeNumber" property', () => {
            const manager = new Manager('Dan', '001', 'test@gmail.com', '720-220-1234');

            expect(manager.officeNumber).toEqual('720-220-1234');
        });

        describe('getOfficeNumber', () => {
            it('should return a "getOfficeNumber" property that has an updated value', () => {
                const manager = new Manager('Dan', '001', 'test@gmail.com', '720-220-1234');

                expect(manager.getOfficeNumber()).toEqual('720-220-1234');
            });
        });

        describe('getRole', () => {
            it('should return "Manager" value', () => {
                const manager = new Manager('Dan', '001', 'test@gmail.com', '720-220-1234');
                const role = 'Manager';

                expect(manager.getRole()).toEqual(role);
            });
        });

    });
});