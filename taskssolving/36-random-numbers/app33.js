/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

// const MIN = 1
// const MAX = 10
const MIN = 1000
const MAX = 9999
const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
// const myNumbers = [1,3,5,7,9,10]
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// console.log(randomNumber(MIN,MAX))
// console.log(Math.random())

const addRandomNumberToArray = (arr, min, max) => {
    let newRandomNumber     
    const updatedArr = [...arr]

    let count = 0;

    do {
        newRandomNumber = randomNumber(min,max)
        console.log(newRandomNumber)
        count++;
        console.log('inside',count)

    }while (updatedArr.includes(newRandomNumber))
    updatedArr.push(newRandomNumber)
    console.log('outside',count)

    return updatedArr
}
const updatedArray = addRandomNumberToArray(myNumbers, MIN,MAX)
console.log('UPPDATE ARRAY ', updatedArray)
console.log('ORIGINAL ARRAY ', myNumbers)
console.log (myNumbers.includes(2357))