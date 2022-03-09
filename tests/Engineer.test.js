const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('Initialization', () => {
        it('Creates an Engineer object when called with the "new" keyword', () => {
            const engineer = new Engineer('Dan', '001', 'test@gmail.com', 'dan1234');

            expect(typeof (engineer)).toEqual('object');
        });

        it('Creates "github" property', () => {
            const engineer = new Engineer('Dan', '001', 'test@gmail.com', 'dan1234');

            expect(engineer.github).toEqual('dan1234');
        });

        describe('getGithub', () => {
            it('should return a "getGithub" property that has an updated value', () => {
                const engineer = new Engineer('Dan', '001', 'test@gmail.com', 'dan1234');

                expect(engineer.getGithub()).toEqual('dan1234');
            });
        });

        describe('getRole', () => {
            it('should return "Engineer" value', () => {
                const engineer = new Engineer('Dan', '001', 'test@gmail.com', 'dan1234');
                const role = 'Engineer';

                expect(engineer.getRole()).toEqual(role);
            });
        });

    });
});