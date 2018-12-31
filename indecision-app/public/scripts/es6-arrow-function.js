"use strict";

var square = function square(x) {
    return x * x;
};

/*const squareArrow = (x) => {
    return x * x;
};*/

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(square(8));
console.log(squareArrow(8));

// Challenge
var ConstCompleteName = "Seydou BERTHE";
var getFirstName = function getFirstName(completeName) {
    return completeName.split(" ")[0];
};

console.log(getFirstName(ConstCompleteName));

getFirstName = function getFirstName(completeName) {
    return completeName.split(' ')[0];
};
console.log(getFirstName(ConstCompleteName));
