// Счетчик состоит из спана и кнопок, которые должны 
// увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет 
// хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения
//  и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы
//  функций и обновление интерфейса

let counterValue = document.querySelector('span#value');
//console.log (counterValue);
let buttonRef = document.querySelectorAll('button');
//console.log(buttonRef[0]);
//console.log(buttonRef[1]);

let increment = function (){
    counterValue.textContent ++;
};
let decrement = function (){
    counterValue.textContent --;
 };

buttonRef[0].addEventListener("click",(event)=>{
    decrement();
    event.preventDefault();
});

buttonRef[1].addEventListener("click",(event)=>{
    increment();
    event.preventDefault();
});
