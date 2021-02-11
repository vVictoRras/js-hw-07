// Напиши скрипт который, при наборе текста
// в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let inputRef= document.querySelector('input#name-input');
console.log(inputRef);

let outputRef= document.querySelector('span#name-output');
console.log(outputRef);

inputRef.addEventListener('input', (event)=>{
    
     outputRef.textContent = event.target.value;
     if(event.target.value===""){
        outputRef.textContent='незнакомец'; 
     }
}
);
   
    
  

