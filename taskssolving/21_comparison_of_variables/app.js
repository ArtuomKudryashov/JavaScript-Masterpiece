let myVariable1 =10
let myVariable2 = '5'
let myVariable3 ='15'


myVariable2 =Number(myVariable2)


console.log(typeof(myVariable2))

myVariable3= parseInt(myVariable3)
console.log(typeof(myVariable3))

if ( myVariable1<=myVariable2){
    console.log(true)
}else{
    console.log('Unfortunately  No')
}
console.log(parseInt(myVariable1)<=parseInt(myVariable2))

myVariable1='20'
myVariable2=100
console.log(parseInt(myVariable1)<=parseInt(myVariable2))