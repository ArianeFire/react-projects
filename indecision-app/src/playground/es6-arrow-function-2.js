// Arguments Object - No longer bound with Arrow function
function add(a, b){
    console.log(arguments);
    return a + b;
}
const addArrow = (a, b) => {
    //console.log(arguments); // Uncaught ReferenceError: arguments is defined
    return a + b;
}
console.log(add(1, 1));

// this keyword - no longer bound
const user = {
    name: "Seydou One",
    cities: ["Sikasso", "Bamako", "Bobo", "Oujda", "Rabat"],
    printCities: function(){
        console.log(this.cities);

        // This won't work cause the anonymous this pointed to "undefined"
        // A workaround is using const that = this; then use the variable "that"
        /*this.cities.forEach(function(city){
            console.log(this.name + " has lived in " + city);
        });*/

        // Notice that Arrow Function "this" is bound to the parent context's
        // Here the user object not the "printCities" function
        this.cities.forEach(city => {
            console.log(this.name + " has lived in " + city);
        });
    },
    // Notice the function definition syntax here
    buildLivedCitiesMessage(){
        return this.cities.map(city => this.name + ' has lived in ' + city);
    }
}

user.printCities();
console.log(user.buildLivedCitiesMessage());

// Multiplier Challenge
const Multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    multiplyBy: 4,
    multiply(){
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(Multiplier.multiply());


