// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
	// you can add any code you want within this function scope

	const toArray = str => str.split('');

	function substitution(input, alphabet, encode = true) {
		// error handing 👇
		try {
			if (!alphabet || alphabet.length !== 26 || /(.).*\1/.test(alphabet)) {
				return false;
			}
		} catch {
			return false;
		}

    // variable declarations 👇
		let result = '';
		const inputArr = toArray(input.toLowerCase());
		const standardAlphaArr = toArray('abcdefghijklmnopqrstuvwxyz');
		const subAlphaArr = toArray(alphabet);

		inputArr.forEach(char => {
      // checking whether a character in the input is a space 👇
			if (char === ' ') {
				result += ' ';
      // encoding 👇
			} else if (encode === true) {
				const index = standardAlphaArr.indexOf(char);
				result += subAlphaArr[index];
      // decoding 👇
			} else {
        const index = subAlphaArr.indexOf(char);
				result += standardAlphaArr[index];
      }
		});

		return result;
	}

	return {
		substitution,
	};
})();

module.exports = { substitution: substitutionModule.substitution };
