"use strict";

var square = function square(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(square(8));

console.log(squareArrow(5));

var getFirstName = function getFirstName(fullname) {
    return fullname.split(" ")[0];
};

console.log(getFirstName("Amrit Singh"));
