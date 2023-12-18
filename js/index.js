// 'use strict';

a = 5;
let number = 5;

const leftBorderWdith = 1;

number = 10;

// console.log(number);

const obj = {
  name: 'John',
  age: 25,
  isMarried: false,
};

obj.a = '234';
// obj['a'] = '234';

console.log(obj['a']);
console.log(obj.a);

// Массив - частный вид объекта, в котором ключ является индекс, который, в свою очередь, мы  никак не можем изменить
//        0              1           2   3            4
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp,', {}, []];

console.log(arr[2]);

// alert('weer');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Are you 18 years old?', '18');

// + - динамичная типизация. Каждые ответ пользователя - это строка, но если поставить оператор +, то получим определённый тип данных - число.(унарный оператор)
// const answer = prompt('Are you 18 years old?', '18');
// console.log(answer);

const answers = [];

// answers[0] = prompt('What is your name', '');
// answers[1] = prompt('What is your age', '');
// answers[2] = prompt('What is your number', '');

// console.log(typeof answers);
// выводит ответ пользователя на экран сайта
// document.write(answers);

// интерполяция

const user = 'Maksym';

// alert(`Hello, ${user}`);

let incr = 20,
  decr = 20;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(5 % 2);

console.log(2 * 4 === 8);

const isChecked = true,
  isUnchecked = false;

console.log(isChecked && !isUnchecked);
