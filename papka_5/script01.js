'use strict';

// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
// Результат функции: массив из всех студентов, которые сдали экзамен.

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, failedStudents) => { 
   const passedStudents = allStudents.filter((student) => failedStudents.indexOf(student) === -1);
   
   return passedStudents; 
}

console.log(filter(allStudents, failedStudents)); // Output: [‘Иванов’, ‘Петров’, ‘Кузнецов’, ‘Соколов’]


// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа
// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = arr => {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
   sum += Math.floor(arr[i]);
   }
   return Math.floor(sum / arr.length);
}
      
   console.log(getAverageValue(allCashbox));

// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

// ----- Первый вариант -----

// const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

// const addPrefix = (names, prefix) => {
//    return names.map(name => prefix + ' ' + name);
// };

// console.log(addPrefix(names, 'Mr'));
// // ['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];

// ----- Второй вариант -----

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


const addPrefix = names.map(prefix => `Mr ${prefix}`);

console.log(addPrefix);