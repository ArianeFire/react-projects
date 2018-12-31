const square = function(x){
    return x*x;
}

/*const squareArrow = (x) => {
    return x * x;
};*/

const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(8));

// Challenge
const ConstCompleteName = "Seydou BERTHE";
let getFirstName = (completeName) => {
    return completeName.split(" ")[0];
};

console.log(getFirstName(ConstCompleteName));

getFirstName = (completeName) => completeName.split(' ')[0];
console.log(getFirstName(ConstCompleteName));