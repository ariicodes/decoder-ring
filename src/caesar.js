// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
	// you can add any code you want within this function scope

	function caesar(input, shift, encode = true) {
		// error handling 👇
		try {
			if (!shift || shift === 0 || shift < -25 || shift > 25) {
				throw false;
			}
		} catch {
			return false;
		}
		
		// variable declarations 👇
		let result = '';
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		const alphaArr = alphabet.split('');
		const alteredString = input.toLowerCase().split('');

		alteredString.forEach(char => {
			// checking for characters that aren't alphabetic 👇
			if (!/[a-z]/.test(char)) {
				result += char;
			} else {
				const charIndex = alphaArr.indexOf(char);
				// handling the shift direction based on whether we're encoding or decoding 👇
				let shiftedIndex = charIndex + (encode ? shift : -shift);
				shiftedIndex = (shiftedIndex + 26) % 26;
				result += alphaArr[shiftedIndex];
			}
		});
		return result;
	}

	return {
		caesar,
	};
})();

module.exports = { caesar: caesarModule.caesar };
