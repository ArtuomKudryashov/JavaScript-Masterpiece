function myName(firstName) {
    console.log(`My name is ${firstName}`);
}

// Передаем функцию как аргумент в setTimeout, чтобы она выполнилась через 2000 миллисекунд
setTimeout(() => myName('Artuom'), 2000);

// Немедленно вызываем функцию
myName('Veranika');
