"use strict";

// Arguments Object - No longer bound with Arrow function
function add(a, b) {
    console.log(arguments);
    return a + b;
}
var addArrow = function addArrow(a, b) {
    //console.log(arguments); // Uncaught ReferenceError: arguments is defined
    return a + b;
};
console.log(add(1, 1));

// this keyword - no longer bound
var user = {
    name: "Seydou One",
    cities: ["Sikasso", "Bamako", "Bobo", "Oujda", "Rabat"],
    printCities: function printCities() {
        var _this = this;

        console.log(this.cities);

        // This won't work cause the anonymous this pointed to "undefined"
        // A workaround is using const that = this; then use the variable "that"
        /*this.cities.forEach(function(city){
            console.log(this.name + " has lived in " + city);
        });*/

        // Notice that Arrow Function "this" is bound to the parent context's
        // Here the user object not the "printCities" function
        this.cities.forEach(function (city) {
            console.log(_this.name + " has lived in " + city);
        });
    },
    // Notice the function definition syntax here
    buildLivedCitiesMessage: function buildLivedCitiesMessage() {
        var _this2 = this;

        return this.cities.map(function (city) {
            return _this2.name + ' has lived in ' + city;
        });
    }
};

user.printCities();
console.log(user.buildLivedCitiesMessage());

// Multiplier Challenge
var Multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (number) {
            return number * _this3.multiplyBy;
        });
    }
};

console.log(Multiplier.multiply());
