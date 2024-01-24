'use strict';

// Задание 2

{
    const rain = Math.round(Math.random());
    console.log(rain);

    if (rain === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    }
    if (rain === 0) {
        console.log('Дождя нет!');
    }
}

// Задание 3

{
    const numPoints = 265;

        prompt('Введите кол-во баллов по математике:');
        prompt('Введите кол-во баллов по русскому языку:');
        prompt('Введите кол-во баллов по информатике:');
    
    if (numPoints >= 265){
        alert('Поздравляю, вы поступили на бюджет!');
    }
}



let mathResult = prompt('Введите количество баллов по математике');
let rusResult = prompt('Введите количество баллов по русскому языку');
let infResult = prompt('Введите количество баллов по информатике');

if (mathResult + rusResult + infResult >= 265) {
alert('Вы поступили на бюджет!');
} else {
alert('К сожалению, вы не прошли на бюджет. Но не отчаивайтесь, всегда есть платные места!');
}



// Задание 4

{
  const user = prompt('Сколько денег вы хотите снять?');
  let sum;
 
  if (sum = 100, sum++) {
       console.log('Получите деньги!');   
    }     
  }  