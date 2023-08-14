// Write your tests here!
const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe('ceasar()', () => {
	it('should return false if the shift value is equal to 0', () => {
		const actual = caesar('Zebra Magazine', 0);

		expect(actual).to.be.false;
	});

	it('should return false if shift value is less than -25', () => {
		const actual = caesar('Zebra Magazine', -26);

		expect(actual).to.be.false;
	});

	it('should return false if shift value is greater than 26', () => {
		const actual = caesar('Zebra Magazine', 26);

		expect(actual).to.be.false;
	});

	it('should ignore capital letters', () => {
		const actual = caesar('Message', 3);
		const expected = caesar('message', 3);

		expect(actual).to.equal(expected);
	});

	it('handles shifts that wrap around to the beginning of alphabet', () => {
		const actual = caesar('z', 3);
		const expected = 'c';

		expect(actual).to.equal(expected);
	});

	it('maintain spaces and non-alphabetic characters when encoding', () => {
		const actual = caesar('Zebra Magazine!', 3);
		const expected = 'cheud pdjdclqh!';

		expect(actual).to.equal(expected);
	});

	it('maintain spaces and non-alphabetic characters when decoding', () => {
		const actual = caesar('cheud pdjdclqh!', 3, false);
		const expected = 'zebra magazine!';
        
		expect(actual).to.equal(expected);
	});
});
