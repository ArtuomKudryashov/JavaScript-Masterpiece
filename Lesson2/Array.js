const myArray = new Array(1, 2, 3, 4, 5);
console.log(myArray)
myArray[5] = true;
console.log(myArray)
console.table(myArray)
myArray.length = 8;
console.log(myArray)
console.table(myArray)

//Foreach

myArray.forEach(el => console.log(el * 2))
console.log(myArray)

//Map

const myArray2 = [1, 2, 3, 4]
console.log(myArray2)

const newArray2 = myArray2.map(el => el * 3)
console.log(myArray2)
console.log(newArray2)

const myArray3 = [10, 20, 30, 40]
console.log(myArray2)

const newArray3 = myArray3.map((el) => { return el * 3 })
console.log(myArray3)
console.log(newArray3)

const myArray4 = [100, 200, 300, 400]
console.log(myArray2)

const newArray4 = myArray4.map(function (el) { return el * 3 })
console.log(myArray4)
console.log(newArray4)


