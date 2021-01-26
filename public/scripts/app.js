"use strict";

//arguments object - no longer bound with arrow functions
console.log("arrow functions usage...!!");

//const add = function (a, b){
var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(4, 5, 1001));

//this keyword - no longer bound
var user = {
    "name": "Amrit",
    "cities": ["Sarangarh", "Raipur", "Bhilai", "Bangalore"],
    printPlacesLived: function printPlacesLived() {
        //const that = this;
        //console.log(this.name);
        //console.log(this.cities);

        // this.cities.forEach(function (city){
        //     console.log(that.name + "has lived in city = ", city);
        // })

        var cityMessages = this.cities.map(function (city) {
            return city + "!!";
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in city = ", city);
        // })

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    // numbers - array of number
    numbers: [1, 2, 3],
    // multiplyBy - single number
    multiplyBy: 2,
    // multiply - return a new array where numbers have been multiplied 
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (num) {
            return num * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
