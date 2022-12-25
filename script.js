//Завдання 1:

/*let array = [
    5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78
];
function calc() {
    console.log((5 + 66 + 7 + 99 + 78) / 5)
}
calc();*/


//Завдання 2:

/*const x = prompt('Enter your first number');
const y = prompt('Enter your second number');
const znak = prompt(`what to do: + - * / % ^`);

function doMath(x, znak, y) {
  
  return eval(x + znak.replace('^', '**') + y)
};

alert(doMath(x, znak, y));*/


//Завдання 3:

function showArr() {
    let arr1 = [];
    let message1 = prompt('how many items do you want to enter main arr?');

    for(let i=0; i < message1; i++) {
        arr1[i] = prompt('enter you elements', +i); 
        };

    let arr2 = [];
    let message2 = prompt('how many items do you want to enter second arr?');

    for(let i=0; i < message2; i++) {
        arr2[i] = prompt('enter you elements', +i); 
        };

    Array.prototype.push.apply(arr1, arr2);
    console.log(arr1);
};
showArr();














  


  















