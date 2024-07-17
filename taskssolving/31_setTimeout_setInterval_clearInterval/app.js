// setInterval(()=>console.log('message'),2000)

// let count = 0;
// function printMessage() {
//     if (count < 4) {
//         console.log('message');
//         count++;
//         setTimeout(printMessage, 2000);
//     }
// }
// printMessage();
let i =1
const messageIntervalId = setInterval(()=>{
    
    console.log('Message number ' + i)
    i = i + 1

},2000)

setTimeout(()=>clearInterval(messageIntervalId),11010)