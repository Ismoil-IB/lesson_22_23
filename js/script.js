"use strict"

console.log('Основы синтаксиса JAVASCRIPT. Структура кода.');
console.log('Задани 1');
console.log('Я учу JS');


console.log('Переменные в JAVASCRIPT. Константы. Ключевые слова LET CONST VAR.');
console.log('Задания 1');
let USER_EYE_COLOR;
console.log('Задания 2');
let user;
let userName = 'Вася';

user = userName;
console.log(user);

console.log('Циклы FOR и WHILE в JavaScript. Директивы break и continue.');

console.log('Задача 1')

let num = 1;
while (num <= 5) {
	console.log(num);
	num++
};

let numSecond = 1;
do {
	console.log(numSecond);
	numSecond++;
} while(numSecond < 6);


for (let numThird =1; numThird < 6; numThird++){
	console.log(numThird)
};

console.log('Задача 3');

let numWhile = 0;
while(numWhile < 3){
	console.log(`Число: ${numWhile}`);
	numWhile++
}

// for (let numWhile = 0; numWhile < 3; numWhile++){
// 	console.log(`Число: ${numWhile}`);
// }

console.log('Задача 4');
numFourth: for (let numFourth = 0; numFourth < 2; numFourth++){
	for (let size = 0; size < 2; size++){
		console.log(size);
		if (size === 1) {
			break numFourth
		}
		
	}
}
console.log('Числа в JAVASCRIPT. Тип данных number. Работа с числами. проблема неточных вычислений.')

let num32 = 255;
console.log(num32.toString(32)); 
console.log('Задача 1');
let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);
console.log('Задача 2');
let value = parseFloat("135.58px");
console.log(value);
console.log('Задача 3');
let valueOne = 58 + "Фрилансер";
if (valueOne !== NaN) {
	console.log('Результат выражения NaN');
}
console.log('Задача 4');
console.log(Math.max(10, 58, 39, -150, 0));

console.log('Задача 5');

let randomNum = Math.floor(58.858);
console.log(randomNum)



console.log('Строки в JAVASCRIPT. Тип данных string. Типы кавычек, поиск, регистр и получение подстроки.')
console.log('Задача 2');
let text = 'фрилансер';
let textN = text[5];
console.log(textN)

console.log('Задача 4');

let textFourth = "фрилансер!";
console.log(textFourth.toUpperCase());

console.log('Задача 5');

let textLan = 'фрилансер';
console.log(textLan.slice(3, 6));

