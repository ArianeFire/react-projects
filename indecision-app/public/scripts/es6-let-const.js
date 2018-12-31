"use strict";

var nameVar = "Seydou";
var nameVar = "BERTHE";
console.log("nameVar", nameVar);

// NB: Notice that you can redefine "nameVar" when defined with "var"

var nameLet = "SeydouLet";
nameLet = "BERTHELet";
//let nameLet = "BERTHELet";
console.log('nameLet', nameLet);

//NB: Notice that "nameLet" is reassignable but not redefinable

var nameConst = "SeydouConst";
//nameConst = "ReaSeydouConst";
//const nameConst = "RedBERTHEConst";
console.log('nameConst', nameConst);

//NB: Notice that "nameConst" is neither redefinable nor reassignable
