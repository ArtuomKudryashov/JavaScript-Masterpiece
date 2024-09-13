const myCities = ['London', 'New York', 'Singapore']

// function cityInfo(city, index){
//     for (let index = 0; index < array.length; index++) {
//         return `{citi}is at the index{index} in the my cities array`
        
//     }
   

// }
const cityInfo = ( city, index)=>
    `${city}is at the index${index} in the my cities array`

myCities.forEach((city,index)=> console.log(cityInfo(city, index)))    



function cityInfo(city, index) {
    return `${city} is at the index ${index} in the my cities array`;
}


myCities.forEach(function(city, index) {
    console.log(cityInfo(city, index));
});
