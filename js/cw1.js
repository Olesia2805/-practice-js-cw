/*
 TODO:
 ? Print the total number of apples and grapes. The difference between apples and grapes.
 */

const apples = 47;
const grapes = 135;

const totalFruits = apples + grapes;
const differenceFruits = grapes - apples;

console.log('Total number of fruits:', totalFruits);

console.log('Difference between fruits:', differenceFruits);

/*
 TODO:
 ? Replace the override expression with a combination operator
 */

//* Without the combined operator
// let students = 100;

// students = students + 50;

// console.log(students);

//* With the combined operator

let students = 100;

students += 50;

console.log(students);

// TODO:
// ? Combine two lines into one and output to the console.

const firstName = 'Chelsy';
const lastName = 'Emerald';
console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

//TODO:
//? Insert the value of the quantity variable into the orderMsg string using string templates.

const quantity = '15';

const orderMsg = `${quantity}`;

console.log(orderMsg);

/*
  TODO:
  ? Request the user's first and last name and display a message in the console: 
  ? Hello <name> <surname>, you are logged in.
*/

const nameUser = prompt('What is your name?');

const surnameUser = prompt('What is your surname?');

console.log(`Hello ${nameUser} ${surnameUser}, you are logged in.`);

//TODO:
//? Find out the length of the message string.Print the first and last characters of the message string.

let message = 'This string is 28 chars long';

console.log(message.length);
console.log(message[0]);
console.log(message[message.length - 1]);

/* 
  TODO:
  ? Ask the user to enter a number.
  ? Print the result to the console.
  ? Convert a string to a number.
*/

//TODO:
//? Get the numeric value of the element width.
const elementWidth = '50px';
console.log(parseInt(elementWidth));

//TODO:
//? Get the numeric value of the element's height.
const elementHeight = '200.74px';
console.log(parseFloat(elementHeight));

/*
 TODO:
 ? Write a script that displays the rounded up/down values of the
 ? of the value variable. Use the Math.floor(), Math.ceil()
 ? and Math.round() methods. Check what will be in the console with values 27.3 and 27.9.
*/

let value1 = 27.4;
console.log(Math.floor(value1));
console.log(Math.ceil(value1));
console.log(Math.round(value1));

let value2 = 27.8;
console.log(Math.floor(value2));
console.log(Math.ceil(value2));
console.log(Math.round(value2));

/*
 TODO:
 ? Write the getRectArea(sideA, sideB) function to calculate the area of a rectangle.
 ? The sides of the rectangle will be passed to the sideA and sideB parameters.
*/

function getRectArea(sideA, sideB) {
  return sideA * sideB;
}

console.log(getRectArea(8, 11)); // 88
console.log(getRectArea(18, 11)); // 198
console.log(getRectArea(8, 21)); // 168

/*
 TODO:
 ? Write a calcBMI(weight, height) function that calculates and returns the index
 ? of a person's body mass. To do this, divide the weight by the
 ? the square of the height.
 ?
 ? The weight and height will be passed as strings on purpose.
 ?
 ? The body mass index must be rounded to one decimal place.
 */

 function calcBMI(weight, height) { return (parseFloat(weight) / parseFloat(height)**2).toFixed(2);}

 const bmi = calcBMI('88.3', '1.75');
 
 console.log(bmi); // 28.83
