const myArr= ['first', 'second', 'therd']
myArr.forEach((element,index)=> {
    console.log(element,index)
})
for(let v of myArr){
    console.log(v)
}

const numbers = [1, 2, 3, 4, 5];

function handleElement(element, index) {
    console.log(element, index);
}

numbers.forEach(handleElement);


let i= 0;
while (i < 5) {
    console.log("Artuom " + i)
    i++
}

//for in for objecs

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
for(const key in myObject) {
    console.log(key, myObject[key])
}
for(const key in myObject) {
    console.log(`${key}  ${myObject[key]}`)
}
console.log("Short")
console.log(Object.keys(myObject))
console.log(Object.values(myObject))
console.log(myObject)
//Массив
console.log ("Массив ключей и значений")
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})
console.log ("Массив ключей")
Object.keys(myObject).forEach(key => {
    console.log(key)
})
console.log ("Массив значений")
Object.values(myObject).forEach(values => {
    console.log(values)
})
console.log("Массив ключей и значений");
console.table(myObject);

console.log("Массив ключей");
console.table(Object.keys(myObject));

console.log("Массив значений");
console.table(Object.values(myObject));


//for in  для массива

const myArray = [true,10, 'abc', null]

for (const key in myArray) {
    console.log(myArray[key])
}

/**
 * For of для строк
 */
const myString = 'Hey'

for(const letter of myString){
    console.log(letter)
}
    

