/*let array = [
    5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78
];
function calc() {
    console.log((5 + 66 + 7 + 99 + 78) / 5)
}
calc();*/


const x = prompt('Enter your first number');
const y = prompt('Enter your second number');
const znak = prompt(`what to do: + - * / % ^`);

function doMath(x, znak, y) {
  
  return eval(x + znak.replace('^', '**') + y)
};

alert(doMath(x, znak, y));










  


  















