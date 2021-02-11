// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр 
// amount - число. Функция создает столько div, сколько указано 
// в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше
//  предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

let inputRef = document.querySelector('#controls [type="number"]');
//console.log(inputRef);
let createRef = document.querySelector('#controls [data-action="render"]');
//console.log(createRef);
let destroyRef = document.querySelector('#controls [data-action="destroy"]');
//console.log(destroyRef);
let boxesRef = document.querySelector("#boxes");
//console.log(boxesRef);

function createBoxes(amount) {
  let newBoxes = [];
  for (let i = 0; i <= amount; i += 1) {
    let divs = document.createElement("div");
    divs.style.width = `${30 + i * 10}px`;
    divs.style.height = `${30 + i * 10}px`;
    divs.style.background = randomColor();
    newBoxes.push(divs);
  }
  boxesRef.append(...newBoxes);
}

createRef.addEventListener("click", () => createBoxes(inputRef.value));

destroyRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

