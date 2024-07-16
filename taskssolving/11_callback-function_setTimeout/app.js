setTimeout(() => console.log('Привет, мир!-1'), 5000)




setTimeout(function() {
    console.log('Привет, мир!-1');
}, 5000);


setTimeout(function() {
    console.log('Привет, мир!-2');
}, 5000);


function sayHello() {
    console.log('Привет, мир!-3');
}

setTimeout(sayHello, 5000);

