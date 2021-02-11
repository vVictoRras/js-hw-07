// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается 
// в его атрибуте data-length.
// Если введено подходящее количество, то border инпута
//  становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы 
// valid и invalid.

let inputRef = document.querySelector("input");
//console.log(inputRef);
inputRef.addEventListener("blur", (event) => {
  if (event.target.value.length == 6) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
  //console.log(event.target);
});
