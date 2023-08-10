// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
	// you can add any code you want within this function scope

	function caesar(input, shift, encode = true) {
		// your solution code here
		try {
			if (!shift || shift === 0 || shift < -25 || shift > 25) {
				throw false;
			}
		} catch {
			return false;
		}

		let result = '';
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		const alteredString = input.toLowerCase().split('');

		alteredString.forEach(character => {
			const characterIndex = alphabet.indexOf(character);
			if (characterIndex === -1) {
				result += character;
			} else {
				let indexShift = characterIndex + (encode ? shift : -shift);
				indexShift = (indexShift + 26) % 26;
				result += alphabet[indexShift];
			}
		});
		return result;
	}

	return {
		caesar,
	};
})();

module.exports = { caesar: caesarModule.caesar };
