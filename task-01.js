// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, 
//найдет и выведет в консоль текст заголовка элемента (тега h2)
 //и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

let itemRef = document.querySelectorAll('li.item');
let  itemArr= [...itemRef];
console.log(itemRef);
console.log(`В списке ${itemArr.length} категории`);

let title='';
let itemsLength  = 0;
itemRef.forEach(element=>{
title = element.querySelector('h2').innerHTML;
itemsLength = element.querySelectorAll('li').length;
console.log(`Категория: ${title} 
Количество элементов: ${itemsLength}`);
});
