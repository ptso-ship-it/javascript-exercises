var userInput = 0
const container = document.querySelector("#container")

function choice(input) {

	const display = document.createElement("div")
	display.textContent = input
	container.appendChild(display)
	userInput = input
}







const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce(function(acc, val) {
		return acc + val
		}, 0)
	
}


const multiply = function(array) {
	return array.reduce((total, part) => {
		return total*part
	},1)

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
