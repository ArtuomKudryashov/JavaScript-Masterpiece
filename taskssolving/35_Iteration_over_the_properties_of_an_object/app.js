const myObject = {
    key1: true,
    key5: 10,
    key3:'abc',
    key4: null,
    key10: NaN,
}
for(const key in myObject) {
    console.log(key, myObject[key])
}
for(const key in myObject) {
    console.log(`${key}  ${myObject[key]}`)
}
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

const objectKeys = Object.keys(myObject)

objectKeys.forEach((key)=>{
    if(key === 'key1' ||key == 'key3'){
        console.log(myObject[key])
    }
})