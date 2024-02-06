//    Мутируем объект  изменяется  и person и Person2 так как  это ссылки на  объект

const person = {
    name: 'Bob',
    age: 25

}
console.log(person)
const person2 = person
person2.age = 26
person2.isAdult = true
console.log(person.age)
console.log(person.isAdult)
console.log(person2)
// не  изменяем объект
const personA = {
    name: 'Bob',
    age: 25
}
const personA2 = Object.assign({}, person)
person2.age = 26
console.log(personA2.age)
console.log(person.age)
console.log(personA)
console.log(personA2)
console.dir(personA2)

// Разделение объекта на св-ва
const button = {
    width: 200,
    text: 'Buy'
}
const redButton = {
    ...button,
    color: 'red'
}
console.log("First")
console.log(button)
console.log("Second")
console.log(redButton)
console.table(redButton)
//Объединение Объектов
const buttonInfo = {
    text: 'Buy'
}
const buttonStyle = {
    color: ' yellow',
    width: 200,
    height: 300
}
const buttonCon = {
    ...buttonInfo,
    ...buttonStyle
}
console.table(buttonInfo)
console.table(buttonStyle)
console.table(buttonCon)