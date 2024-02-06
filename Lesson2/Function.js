let a = 10;
let b = 15
function summ(a, b) {
    c = a + b
    return { result: c };
}
console.log(summ(10, 15.6))
console.dir(summ(10, 20))

const personOne = {
    name: 'Bob',
    age: 21
}
function increasePersonAge(person) {
    const updatedperson = Object.assign({}, person)
    updatedperson.age += 1
    return updatedperson
}
const updatedpersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedpersonOne.age)

function multByFactor(value, multiplier = 1) {
    return value * multiplier
}
multByFactor(10, 2)
multByFactor(5)

const AFu = function (value, multiplier) {
    return value * multiplier;

}
console.log(AFu(10, 3))

// Просто вызываем анонимную функцию без сохранения в переменную
console.log((function (value, multiplier = 4) {
    return value * multiplier;
})(10));

console.log((function (value, multiplier = 1) {
    return value * multiplier;
})(5));


const ITAF = (value, multiplier) => {
    return value * multiplier
}
console.log(ITAF(30, 5))
// Просто вызываем анонимную функцию без сохранения в переменную
console.log((function(value, multiplier = 1) {
    return value * multiplier;
})(10, 2));

console.log((function(value, multiplier = 1) {
    return value * multiplier;
})(5));
// Значение параметров функции по умолчанию
const newPost = (post, addedAt = Date())=>({
    ...post,
    addedAt,
})
const firstPost ={
    id:1,
    author: 'Artuom',

}
 newPost(firstPost)
 console.log(newPost(firstPost))
 console.table(newPost(firstPost))


 const newPost1 = (post, addedAt = Date()) => {
    return {
        ...post,
        addedAt,
    };
};

const firstPost1 = {
    id: 1,
    author: 'Artuom',
};

newPost(firstPost1);
console.log(newPost(firstPost1));
console.table(newPost(firstPost1));
