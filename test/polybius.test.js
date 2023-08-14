// Write your tests here!
const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe('polybius', () => {
	it('should encode the letters i and j to 42', () => {
		const actual = polybius('thinkful');
		const expected = '4432423352125413';

		expect(actual).to.equal(expected);
	});

	it('should decode 42 to (i/j)', () => {
		const actual = polybius('4432423352125413', false);

		expect(actual).to.include('i');
		expect(actual).to.include('j');
	});

	it('should ignore capital letters', () => {
		const actual = polybius('Message');
		const expected = polybius('message');

		expect(actual).to.equal(expected);
	});

	it('should maintain spaces when encoding', () => {
		const actual = polybius('my message');
		const expected = '2345 23513434112251';

		expect(actual).to.equal(expected);
	});

	it('should maintain spaces when decoding', () => {
		const actual = polybius('2345 23513434112251', false);
		const expected = 'my message';

		expect(actual).to.equal(expected);
	});
});
