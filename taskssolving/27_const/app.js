let arr = [1, 2] // <-- Объявление переменной используя const

arr.push(3)

console.log(arr)
// [1, 2, 3]

arr = [1, 2, 3, 4]
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr)
// [1, 2, 3, 4]