import validator from 'validator';

import multiplyMe, { square as sq, add, subtract, isAdult, canDrink} from './utils.js'
//import { } from './utils.js'

import canVote, { isSenior } from './person.js';

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p><b>This is jsx from webpack</b></p>
//React.createElement('p', {}, 'testing123')
//<p>test123</p>
ReactDOM.render(template, document.getElementById('app'))

console.log('app js is running!!!');

console.log('isEmail = ', validator.isEmail('user1@gmail.com'));

console.log(sq(5));
console.log(add(5, 6));
console.log(subtract(5, 6));
console.log(multiplyMe(5, 6));

//naming is not important with default export

//console.log(isAdult(12));
//console.log(canDrink(32));

console.log('canVote = ', canVote(20));
console.log('isSenior = ', isSenior(50));