// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
	// you can add any code you want within this function scope

	function polybius(input, encode = true) {
		// your solution code here
		let result = '';
		const square = [
      ['a', 'b', 'c', 'd', 'e'], 
      ['f', 'g', 'h', 'i/j', 'k'], 
      ['l', 'm', 'n', 'o', 'p'], 
      ['q', 'r', 's', 't', 'u'], 
      ['v', 'w', 'x', 'y', 'z']
    ];

		// var pair = 21
		// x = 2, y = 1
		// alphabet[2][1][“H”]
	}

	return {
		polybius,
	};
})();

module.exports = { polybius: polybiusModule.polybius };
