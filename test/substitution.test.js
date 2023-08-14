// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('substitution', () => {
	it("returns false if given alphabet isn't 26 characters long", () => {
		const actual = substitution('message', 'plmoknijbuhvygctfxrdzeswa');

		expect(actual).to.be.false;
	});

	it('correctly translates the given phrase', () => {
		const actual = substitution('message', 'plmoknijbuhvygctfxrdzeswaq');
		const expected = 'ykrrpik';

		expect(actual).to.equal(expected);
	});

	it('returns false if there are any duplicate characters in given alphabet', () => {
		const actual = substitution('message', 'plmoknjjbuhvygctfxrdzessa');

		expect(actual).to.be.false;
	});

	it('should maintain spaces when encoding', () => {
		const actual = substitution('my message', 'plmoknijbuhvygctfxrdzeswaq');
		const expected = 'ya ykrrpik';

		expect(actual).to.equal(expected);
	});

	it('should maintain spaces when decoding', () => {
		const actual = substitution(
			'ya ykrrpik',
			'plmoknijbuhvygctfxrdzeswaq',
			false
		);
		const expected = 'my message';

		expect(actual).to.equal(expected);
	});

	it('ignore capital letters', () => {
		const actual = substitution('my message', 'plmoknijbuhvygctfxrdzeswaq');
		const expected = substitution('My Message', 'plmoknijbuhvygctfxrdzeswaq');

		expect(actual).to.equal(expected);
	});
});
