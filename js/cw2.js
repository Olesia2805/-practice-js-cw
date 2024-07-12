/*
? Prompt the user for a number if the number is 10,
? then print 'True' otherwise print 'False'.
*/

let number = Number(prompt("Please enter number:"));
console.log(number === 10 ? 'True' : 'False');

/*
? Check whether there is money on the balance, if so, output 'Positive' to the console, otherwise 'Negative'.
*/

const moneyBalance = prompt("Please enter your balance", "0");

console.log(moneyBalance > 0 ? 'Positive' : 'Negative');

/*
? Write a script to display the time of the project submission deadline. Use if...else.
?
? If there are 0 days to the deadline - display the line "Today"
? If the deadline is 1 day away - display the line "Tomorrow"
? If the deadline is 2 days away - display the line "Overmorrow"
? If the deadline is 3+ days - display the line "Date in the future"
? In other cases, display the line "Incorrect value of days"
 */

/*
? Rewrite the if statement using the ternary operator.
*/

const numA = 3;
const numB = 2;

// if (numA + numB < 4) {
// result = 'Little';
// } else {
// result = 'Many';
// }

const result1 = numA + numB < 4 ? 'Little' : 'Many';
const result2 = numA + numB < 6 ? 'Little' : 'Many';

console.log(result1);
console.log(result2);

/*
? Rewrite if..else using multiple ternary statements.
*/

// const login = 'Employee';

// if (login === 'Employee') {
// message = 'Hello';
// } else if (login === 'Director') {
// message = 'Congratulations';
// } else if (login === '') {
// message = 'No login';
// } else {
// message = '';
// }

// console.log(message);

/*
? Write a script for selecting the product delivery option.
? The option is stored in the option variable: 1 - self-delivery, 2 - courier, 3 - mail
?
? Depending on the option, you need to write a message in the message variable.
? - "You can pick up the goods tomorrow from 12:00 in our office"
? - "The courier will deliver the order tomorrow from 9:00 a.m. to 6:00 p.m."
? - "The parcel will be sent today"
? - "The manager will call you back"
 */

/*
? String normalization
?
? Write code that will ask:
? 'What is the "official" name of JavaScript?'
? If the user types ECMAScript,
? then show: "True!", otherwise - display: "Don't know? ECMAScript!”
*/

let strUser = prompt("What is the "official" name of JavaScript?").trim().toLowerCase();
alert(srtUser === "ecmascript" ? "True" : "Don't know? ECMAScript!");

/*
? Link formatting (endsWith)
?
? Write a script that checks whether the value ends
? variable link with the symbol /. If not, add to the end
? link value this symbol.
? Use the if...else statement.
*/

// let link = 'https://my-site.com/about';

// console.log(link);

/*
? Link formatting (includes and logical "AND")
? Write a script that checks whether the value ends
? variable link with the symbol /. If not, add to the end
? link value is this character, but only if
? if there is a substring "my-site" in the link.
? Use the if...else construct or the ternary operator.
*/

// let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';

// console.log(link);

/*
? Print numbers from 1 to 50 using a while loop
*/

/*
? Write a loop that prompts you to enter a number greater than 100.
? If the visitor enters another number - ask to enter again, and so on.
*/

/*
? Print even numbers from 2 to 10 using a for loop.
*/

/*
? Write a for loop that outputs to the browser console
? numbers in ascending order from a to b, but only if the number is a multiple of 5.
*/

// const a = 20;
// const b = 100;

/*
? The minutes variable contains a number from 0 to 59.
? Determine in which quarter of an hour this number falls (in the first, second, third or fourth).
? [0 to 15) - the first quarter of an hour
? [15 to 30) - the second quarter of an hour
? [30 to 45) - three quarters of an hour
? [45 to 60) - quarter of an hour
*/

// const minutes = 15;

/*
? Rewrite the code using a single switch construct:
*/

// const number = Number(prompt('Enter a number between 0 and 3'));

// if (number === 0) {
// console.log('You entered the number 0');
// } else if (number === 1) {
// console.log('You entered the number 1');
// } else if (number === 2 || number === 3) {
// console.log('You entered the number 2, maybe 3');
// } else {
// console.log('You entered some other number');
// }

/*
? Write a script that checks the possibility to open a chat with the user.
? To do this, the user must be:
? - a friend
? - online
? - no do not disturb mode
 */

/*
? Write a program that outputs to console.log all numbers from 1 to 100, with three exceptions.
? For integers divisible by 3, it should output 'Fizz',
? and for numbers divisible by 5 - 'Buzz'.
? For numbers that are multiples of 3 and 5 = 'FizzBuzz'
*/
