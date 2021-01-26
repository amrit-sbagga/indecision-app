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
        var _this = this;

        var that = this;
        console.log(this.name);
        console.log(this.cities);

        // this.cities.forEach(function (city){
        //     console.log(that.name + "has lived in city = ", city);
        // })

        this.cities.forEach(function (city) {
            console.log(_this.name + " has lived in city = ", city);
        });
    }
};

user.printPlacesLived();
