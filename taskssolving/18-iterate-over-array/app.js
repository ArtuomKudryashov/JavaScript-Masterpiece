let allTypes = [
    'string',
    'number',
    'boolean',
    'undefined',
    'null',
    'symbol',
    'object',
    'function',
    100
   
];
allTypes.push(true)
allTypes.push(false)
allTypes.push("string")
allTypes.push(5)
console.log(allTypes)

allTypes.forEach((element)=>{
    console.log(element)
})
allTypes.forEach((element)=>
    console.log(element))

console.log('<<<<<<<<<<>>>>>>>>>')

allTypes.forEach(function(element) {
    console.log(element);
});



