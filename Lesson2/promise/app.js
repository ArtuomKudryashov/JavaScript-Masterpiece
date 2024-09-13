const myPromise = new Promise((resolve, reject) => {});

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response);
    return response.json();
  })

  .then((data) => console.log(data))
  .catch((error) => console.error("Ошибка:", error));
  

  fetch("https://jsonplaceholder.typicode.com/todos")
   .then((response) => response.json()) 
    .then (json=> console.log(json))
    .catch(error=>console.error("Ошибка:",error))
  
