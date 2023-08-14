// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
	// you can add any code you want within this function scope

	function polybius(input, encode = true) {
		// polybius square 👇
		const square = [
			['a', 'b', 'c', 'd', 'e'],
			['f', 'g', 'h', 'i/j', 'k'],
			['l', 'm', 'n', 'o', 'p'],
			['q', 'r', 's', 't', 'u'],
			['v', 'w', 'x', 'y', 'z'],
		];

		// result holding variable 👇
		let result = '';

		// encoding 👇
		if (encode === true) {
			for (let char of input) {
				// handling spaces 👇
				if (char === ' ') {
					result += ' ';
				} else {
					char = char.toLowerCase();
					if (char === 'i' || char === 'j') {
						result += '42';
					} else {
						for (let row = 0; row < square.length; row++) {
							for (let col = 0; col < square[row].length; col++) {
								if (square[row][col].includes(char)) {
									result += `${col + 1}${row + 1}`;
								}
							}
						}
					}
				}
			}
		// decoding 👇
		} else {
			const numArr = input.match(/\d{1,2}| /g);
			if (
				numArr.some(
					code =>
						code !== ' ' &&
						(code.length !== 2 || isNaN(code[0]) || isNaN(code[1]))
				)
			) {
				return false;
			}
			for (let code of numArr) {
				// handling spaces 👇
				if (code === ' ') {
					result += ' ';
				} else {
					const col = parseInt(code[0]) - 1;
					const row = parseInt(code[1]) - 1;
					result += square[row][col];
				}
			}
		}

		return result;
	}

	return {
		polybius,
	};
})();

module.exports = { polybius: polybiusModule.polybius };
