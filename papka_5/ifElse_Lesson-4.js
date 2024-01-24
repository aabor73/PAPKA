'use strict';

// если (хватает денег) {
//     купим биг мак
// }

// если (хватает денег) {
//     купим биг мак
// } иначе {
//     купим шаурму
// }


// если (300₽) {
//     купим биг мак
// } иначе если (200₽) {
//     купим шаурму
// } иначе {
//     купим доширак
// }

let money = 500;

if (money >= 300) {
    console.log('купим биг мак');
}

if (money >= 300) {
    console.log('купим биг мак');
} else {
    console.log('купим шаурму');
}

if (money >= 300) {
    console.log('купим биг мак');
} else if (money >= 100) {
    console.log('купим шаурму');
} else {
    console.log('купим доширак');
}

let discount = 0;

const price = 1000;

const clientStatus = 'Лучший друг';


// Вариант реализации сравнения с помощь if ... else

// if (clientStatus === 'Приятель') {
//     discount = price * 0.05;
// }

// if (clientStatus === 'Друг') {
//     discount = price * 0.08;
// }

// if (clientStatus === 'Лучший друг') {
//     discount = price * 0.1;
// }

// Предпочтителеный вариант реализации сравнения с помощь switch ... case
// Лучше писать switch если 3 и больше case, если меньше, то лучше if ... else. 

switch (clientStatus) {
    case 'Приятель':
        discount = price * 0.05;
        console.log('Приятель');
        break; // Обязательно писать в конце
    case 'Друг':
        discount = price * 0.08;
        console.log('Друг');
        break; // Обязательно писать в конце
    case 'Лучший друг':
        discount = price * 0.1;
        console.log('Лучший друг');
        break; // Обязательно писать в конце
    default: // Обязательно писать в конце, чтобы код сработал, если не подошел не один из case. 
        discount = 0;
        break;
}

const totalPrice = price - discount;
console.log('totalPrice: ', totalPrice);


// ТЕРНАРНЫЙ ОПЕРАТОР

// КОНСТРУКЦИЯ:

// const res = условие ? операнд true : операнд false;

// НАПРИМЕР:

const a = 5;
const b = 15;

// const res = a > b ? 'операнд true' : 'операнд false';
// Получим операнд false, потому что a меньше b

//const res = a < b ? a : b;
// усли условие true, то вернется а, если false то вернется b

//console.log('res: ', res);

// Можно выводить сразу в консоль

console.log(a < b ? a : b);

// А так делать нельзя
// Потому что мы получим res: undefined

const res = a < b ? console.log(a) : console.log(b);
console.log('res: ', res);