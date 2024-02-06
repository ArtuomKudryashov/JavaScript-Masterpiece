uttonStyle = {
    color: ' yellow',
    width: 200,
    height: 300
}
console.table(userProfile)

const art = {
    ...userProfile,
    ...buttonStyle
}
console.log(art)
console.table(art)

//Деструктуризация массивов

const fruits = ['Apple', 'Banana']
const [fruitOne, fruitTwo] = fruits
console.table(fruitOne)
console.log(fruitTwo)

