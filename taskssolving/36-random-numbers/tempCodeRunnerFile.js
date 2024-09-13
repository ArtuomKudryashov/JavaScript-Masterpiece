const MIN = 1000
const MAX = 9999
const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumber(MIN,MAX))
console.log(Math.random())
const addRandomNumberToArray = (arr, min, max) => {
    const newRandomNumber = randomNumber(min,max)
    arr.push(newRandomNumber)
    // let newRandomNumber
    // const updatedArr = [...arr]
    return arr
}
const updatedArray = addRandomNumberToArray(myNumbers, MIN,MAX)
console.log('UPPDATE ARRAY ', updatedArray)
console.log('ORIGINAL ARRAY ', myNumbers)