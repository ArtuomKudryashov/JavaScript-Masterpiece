const myFunction = () => {
  return "Привет Мир!";
};

const result = myFunction();
console.log(result);

// Неявный возврат результата
const helloWorld = () => "Привет, Мир!";

console.log(helloWorld());

// Стрелочная функция сложения с явным возвратом
const addExplicit = (a, b) => {
  return a + b;
};

// Вызываем функцию с явным возвратом
const resultExplicit = addExplicit(3, 5);
console.log("С явным возвратом:", resultExplicit);

// Стрелочная функция сложения с неявным возвратом
const addImplicit = (a, b) => a + b;

// Вызываем функцию с неявным возвратом
const resultImplicit = addImplicit(3, 5);
console.log("С неявным возвратом:", resultImplicit);
