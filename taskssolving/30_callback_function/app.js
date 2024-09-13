
// setTimeout(function myFn() {
//     console.log ('Привет из функции myFn'),2000;
//     console.log ('Привет из функции 1')},2000);



// // Вызов myFn() здесь не нужен, так как функция будет вызвана через 2000 миллисекунд (2 секунды).
// function myName(){
//     console.log(`My name is Artuom1`)
//     console.log("GПривет из функции2")
// }

// setTimeout(myName,2000)
// myName()


// function myName(){
//     console.log(`My name is Artuom2 `)
// }

// setTimeout(myName,2000)
// myName()


function greeting(name, callback) {
    // Основная функция выполняет действие - создание приветствия
    const message = "Привет, " + name + "!";
    
    // Вызов функции обратного вызова (callback) с результатом
    callback(message);
}

// Определяем функцию, которая будет использоваться как callback
function showMessage(message) {
    console.log(message);
}

// Вызов функции greeting с передачей имени и функции обратного вызова
greeting("Артём", showMessage);






// Функция, которая принимает число и функцию обратного вызова
function processNumber(number, callback) {
    console.log("Обработка числа:", number);
    
    // Имитация задержки в обработке с помощью setTimeout
    setTimeout(function() {
        const result = number * 2; // Умножаем число на 2
        callback(result); // Вызываем функцию обратного вызова с результатом
    }, 2000); // Задержка в 2 секунды
}

// Функция обратного вызова для вывода результата
function displayResult(result) {
    console.log("Результат после обработки:", result);
}

// Вызов функции processNumber с числом и функцией обратного вызова
processNumber(5, displayResult);
