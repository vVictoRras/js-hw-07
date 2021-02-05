// Напиши скрипт, который для каждого 
// элемента массива ingredients создаст 
// отдельный li, после чего вставит все 
// li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
   let liNew;
  ingredients.forEach(el=>{
     liNew = document.createElement('li');
     liNew.append(el);
     console.log(liNew);
      let ul = document.querySelector('ul');
       ul.append(liNew);
        });
  console.log(liNew);
    
  