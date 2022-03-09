const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('Initialization', () => {
        it('Creates an Intern object when called with the "new" keyword', () => {
            const intern = new Intern('Dan', '001', 'test@gmail.com', 'CU Boulder');

            expect(typeof (intern)).toEqual('object');
        });

        it('Creates "school" property', () => {
            const intern = new Intern('Dan', '001', 'test@gmail.com', 'CU Boulder');

            expect(intern.school).toEqual('CU Boulder');
        });

        describe('getSchool', () => {
            it('should return a "getSchool" property that has an updated value', () => {
                const intern = new Intern('Dan', '001', 'test@gmail.com', 'CU Boulder');

                expect(intern.getSchool()).toEqual('CU Boulder');
            });
        });

        describe('getRole', () => {
            it('should return "Intern" value', () => {
                const intern = new Intern('Dan', '001', 'test@gmail.com', 'CU Boulder');
                const role = 'Intern';

                expect(intern.getRole()).toEqual(role);
            });
        });

    });
});