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
console.log(allTypes.length)
allTypes.push(5, undefined)
console.log(allTypes)
console.log(allTypes.length)