console.log('utils.js is running!!');

const square = (x) => x*x;

const add = (a, b) => a + b;

export const subtract = (a, b) => a-b;

const multiply = (a, b) => a * b;

export const isAdult = (age) => age >= 18
//{
//     if(age > 18) return true;
//     return false;
// }

export const canDrink = (age) => age >= 21 
// {
//     if(age > 21) return true;
//     return false;
// }


//export default multiply;

export {square, add, multiply as default };

//export - 2 types
//default export -> 0 or 1 only
//named export