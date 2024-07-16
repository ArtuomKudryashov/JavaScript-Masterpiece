setTimeout(function myFn() {
    console.log ('Привет из функции myFn')},2000);



// Вызов myFn() здесь не нужен, так как функция будет вызвана через 2000 миллисекунд (2 секунды).
function myName(){
    console.log(`My name is Artuom`)
}

setTimeout(myName,2000)
myName()


function myName(){
    console.log(`My name is Artuom `)
}

setTimeout(myName,2000)
myName()