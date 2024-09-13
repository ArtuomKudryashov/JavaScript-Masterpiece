/**Rewrite the if .. else statement without using else.
Rewrite the function content using a ternary operator.
Replace the regular function with an arrow function.
*/
function isArrayEmpty(inputArray) {
    if (inputArray.length > 0) {
      return 'Array is not empty';
    }
    return 'Array ia empty';
  }
  function isArrayEmptyDouble(inputArray) {
    return inputArray.length > 0 ? 'Array is not empty' : 'Array ia empty';
  }

const isArrayEmpty = (inputArray) => inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой';

  console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

console.log(isArrayEmptyDouble([1, 3]))
console.log(isArrayEmptyDouble([]))
  
  