const myObject = {
    name: 'Mike',
    age: 30,
    city: 'London',
  }
  console.log(myObject)

  const myCar = {
    name: 'Lamba ',
    age: 1,
    city: 'Italy',
  }
  console.log(myCar)
  
  Object.prototype.country = 'England'
  
  for (let key in myObject) {
    console.log(myObject[key])
  }
   
  for (let key in myCar) {
    console.log(myCar[key])
  }
  console.log(myObject.country)
  console.log()
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(myObject[key])
        console.log(key)
    }
}