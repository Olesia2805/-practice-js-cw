/*
 ? Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;

// console.log(total);

// const diff = apples - grapes;

// console.log(diff);

/*
 ? Заміни вираз перевизначення комбінованим оператором
 */

//* Без комбінованого оператора
// let students = 100;

// students = students + 50;

// console.log(students);

//* З комбінованим оператором
// let students = 100;

// students += 50;

// console.log('Students:', students);


//? Обʼєднайте два рядки в один і виведіть до консолі.

// const firstName = 'Chelsy';
// const lastName = 'Emerald';

// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

//? Підставте значення зміної quantity до рядка orderMsg, використоуючи шаблоні рядки.

// const quantity = '15';
// const orderMsg = `Quantity is: ${quantity}`;

// console.log(orderMsg);

/*
  ? Запросіть у користувача ім'я та прізвище і виведіть у консоль повідомлення:
  ? Hello <імʼя> <прізвище>, you are logged in.
*/

// const firstName = prompt('Your first name?');
// const lastName = prompt('Your last name?');

// const message = `Hello ${firstName} ${lastName}, you are logged in.`;

// console.log(message);

//? Дізнайтесь довжину рядка message. Виведіть перший та останій символ рядка message.

// let message = 'This string is 28 chars long';

// const messageLength = message.length;
// const firstCharOfMessage = message[0];
// const lastCharOfMessage = message[message.length - 1];

// console.log(message);
// console.log(messageLength);
// console.log(firstCharOfMessage);
// console.log(lastCharOfMessage);


/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// const userInput = Number(prompt('Enter some number'));

// console.log(userInput);

//? Дізнайтесь числове значення ширини елемента.
// const elementWidth = '50px';
// const numericalWidth = Number.parseInt(elementWidth);

// console.log('elementWidth:', elementWidth);
// console.log('numericalWidth:', numericalWidth);

//? Дізнайтесь числове значення висоти елемента.
// const elementHeight = '200.74px';
// const numericalHeight = Number.parseFloat(elementHeight);

// console.log('elementHeight: ', elementHeight);
// console.log('numericalHeight: ', numericalHeight);

/*
 ? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз значення
 ? змінної value. Використовуй методи Math.floor(), Math.ceil()
 ? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
*/

// let value = 27.4;

// value = Math.round(value);

// console.log(value);


/*
? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
? Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/

// function getRectArea(sideA, sideB) {
//   return sideA * sideB;
// }

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на
 ? квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(weight, height) {}

// const bmi = calcBMI('88.3', '1.75');

// console.log(bmi); // 28.8