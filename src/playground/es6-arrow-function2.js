//arguments object - no longer bound with arrow functions
console.log("arrow functions usage...!!")

//const add = function (a, b){
const add = (a, b) => {
   // console.log(arguments);
    return a + b;
}

console.log(add(4, 5, 1001));

//this keyword - no longer bound
const user = {
    "name" : "Amrit",
    "cities" : ["Sarangarh", "Raipur", "Bhilai", "Bangalore"],
    printPlacesLived: function(){
        //const that = this;
        //console.log(this.name);
        //console.log(this.cities);

        // this.cities.forEach(function (city){
        //     console.log(that.name + "has lived in city = ", city);
        // })

        const cityMessages = this.cities.map((city) => {
            return city + "!!";
        })

        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in city = ", city);
        // })

        return cityMessages;
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    // numbers - array of number
    numbers : [1, 2, 3],
    // multiplyBy - single number
    multiplyBy : 2,
    // multiply - return a new array where numbers have been multiplied 
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy)
    }
}

console.log(multiplier.multiply());