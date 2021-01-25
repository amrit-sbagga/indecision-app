const square = function(x){
    return x * x;
}

const squareArrow = (x) => x * x;

console.log(square(8));

console.log(squareArrow(5));

const getFirstName = (fullname) => fullname.split(" ")[0];

console.log(getFirstName("Amrit Singh"));