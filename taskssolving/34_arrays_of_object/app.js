let cars = [
    {
      carBrand: "Toyota",
      price: 30000,
      isAvailableForSale: true
    },
    {
      carBrand: "BMW",
      price: 50000,
      isAvailableForSale: false
    },
    {
      carBrand: "Audi",
      price: 45000,
      isAvailableForSale: true
    }
  ];
  cars.unshift({
    carBrand: "Mercedes",
    price: 55000,
    isAvailableForSale: true
  });
  
  
  console.log(cars);
  const newCar = {
    carBrand:"Tesla",
    price: 20000,
    isAvailableForSale:false
  }
  console.log(cars.push(newCar))
  console.log(cars)

  cars[1].year = 2024
  console.log(cars)