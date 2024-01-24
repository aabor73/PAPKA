'use strict';

// —— Функции - главный строительный блок ——

// ------- Как это выглядит в жизни: -------

// 'сходить в магазин за молоком и хлебом'('держи деньги') {
//     'пришел в молочный магазин'

//     'покупаю молоко'('плачу деньги') {
//         'получаю молоко'
//     }

//     'пришел в хлебный магазин'

//     'покупаю хлеб'('плачу деньги') {
//         'получаю хлеб'
//     }

//     'принес хлеб и молоко домой'
// }

// ------- Как это выглядит в Javascript: -----

// const goToShop = (money) => {
//     console.log('пришел в молочный магазин');

//     const getMilk = (money) => {
//         return 'получаю молоко';
//     };

//     console.log('пришел в хлебный магазин');

//     const getBread = (money) => {
//         return 'получаю хлеб';
//     };

//     return 'принес хлеб и молоко домой';
// }

// const result = goToShop();

// console.log('result: ', result);

// ------ Схема функции () => {}; -----

// const goToShop = (money) => {
//     console.log('пришел в молочный магазин');

//     const getMilk = (cash) => {
//         // if (cash >= 60) {
//         //     cash -= 60;
//             // return 'молоко';
//         // }
//         return 'молоко';
//     };

//     const milk = getMilk(money);

//     console.log('пришел в хлебный магазин');

//     const getBread = (cash) => {
//         // if (cash >= 40) {
//         //     cash -= 40;
//             // return 'хлеб';
//         // }
//         return 'хлеб';
//     };

//     const bread = getBread(money);

//     console.log(money);

//     return `${milk} ${bread}`;
// }

// const result = goToShop(100);

// console.log('result: ', result);

// ----- Синтаксис объявления функции ----

// const foo = () => {
//     console.log('foo');
// }; // Стрелочная функция - объвление -Нужно так делать-
// foo(); // Вызов функции

// const bar = function() {
//     console.log('bar');
// }; // С помощью ключевого слова function - объвление -Устарело-
// bar(); // Вызов функции

// function bad() {
//     console.log('bad');
// }; // Можно вызывать до ее объявления - объвление -Устарело-
// bad(); // Вызов функции

// Анонимные функции

// () => {

// };

// или

// function() {

// };

// --- Самовызывающие ----

// (() => {
//     console.log('John Doe');
// })(); // С дополнительными круглыми кавычками

// (function() {
//     console.log('anonimus');
// })();

// --- Параметры функции записываются в ее скобках  ----

// const calc = (a) => {
//     console.log(a);
// }

// calc(5);

// -- Параметров может быть сколько угодно --

// const calc = (a, b, c, d, e) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d); // не объявлена
//     console.log(e); // не объявлена
// }

// calc(5, 10, 15); // Если не объявить то получим undefined

// -- Аргументов может быть тоже сколько угодно --

// const calc = (a, b, c, ...arg) => { // чтобы показать все аргументы нужно поставить 3 точки и имя
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(arg); // ...arg
    
// }

// calc(5, 10, 15, 25, 35, 45, 55, 65);


// -- А еще можно записать вот так, чтобы вывести весь массив --
// Это REST оператор

// const calc = (...arg) => { // чтобы показать все аргументы нужно поставить 3 точки и имя
//     console.log(arg); // ...arg
// }

// calc(5, 10, 15, 25, 35, 45, 55, 65);

// --- Что будет если мы передадим не все параметры ---

// const calc = (a, b, c) => {
//     console.log(a + b + c);
// };

// calc(5, 15, 25); // получим 45 — Это 5 + 15 + 25
// calc(5, 15); // получим NaN — Это 5 + 15 + undefined, поэтому NaN
// calc(5); // получим NaN — Это 5 + undefined + undefined, поэтому NaN


// // --- А если параметрам присвоить значение 0, то получим вычисление ---
// // В программировании это уже не функция, а --- процедура ---
// const calc = (a = 0, b = 0, c = 0) => {
//     console.log(a + b + c);
// };

// calc(5, 15, 25); // получим 45 — Это 5 + 15 + 25
// calc(5, 15); // получим 20 — Это 5 + 15 + 0
// calc(5); // получим 5 — Это 5 + 0 + 0

// --- Чтобы это была правильная функция нужно записать так ---

// const calc = (a = 0, b = 0, c = 0) => {
//     return a + b + c; // return возвращает результат
// };

// const res1 = calc(5, 15, 25);
// console.log('res1: ', res1); // получим 45
// const res2 = calc(5, 15);
// console.log('res2: ', res2); // получим 20
// const res3 = calc(5);
// console.log('res3: ', res3); // получим 5

// Напишем функцию которая принимает любое значение например х
// и возводит его в квадрат

// const pow2 = (x) => {
//     return x ** 2;
// };

// console.log(pow2('четыре')); // передали не те данные что ожидали и получили NaN

// const pow2 = (x) => {
//     if (Number.isNaN(parseFloat(x))) { // Это будет приводить любое значение к числу
//         return `${x} — не число`; // Если не сможетпривести к числу
//     }
//     return x ** 2;
// };

// console.log(pow2('четыре')); // получим четыре — не число

// console.log(pow2({})); // получим [object Object] — не число

// console.log(pow2(4)); // получим 16


// --- Еще про суперспособности стрелочной функции ---

// const pow2 = x => { // если один параметр, то можно убрать скобки
//     return x ** 2;
// };

// const pow2 = x => x ** 2; // если после стрелки идет выражение, то можно убрать
// // и фигурные скобки и return. Результат не изменится   

// console.log(pow2(4));

// --- Еще про параметры стрелочной функции ---

// const getToPrice = money => {
//     return money * 0.95;
// } // Когда пишем функцию никогда нельзя менять значение параметров
// // которые получили   

// console.log(getToPrice(500));

// Так делать нельзя

// const getToPrice = money => {
//     money *= 0.95;

//     money -= 100;

//     return money;
// } 

// console.log(getToPrice(500));


// // === Так нужно ===

// const getToPrice = money => {
//     let resultMoney = money; // Нужно создать переменную (копию параметра money)
//     //  и работать уже с ней
//     resultMoney *= 0.95;

//     resultMoney -= 100;

//     return resultMoney; //Так будет правильно
// } 

// console.log(getToPrice(500));

// === Про CallBeck. Функция может принимать другу функцию ===
// Функция fn внутри функции, которая была указана в параметрах
const getTotalPrice = (money, fn) => {
    let resultMoney = fn(money);

    return resultMoney;
} 
const result = getTotalPrice(1000, (n) => n * 0.8)
console.log('result: ', result);