//CLASS ONE
const kelvin = 293;
const celsius = kelvin - 273;
let fahrenheit = celsius *(9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degress fahrenheit `)

var myAge = 26;
var earlyYears = 2;
earlyYears *=10.5; 
console.log(earlyYears)

//CLASS TWO 
let sale = true;
if(sale){
    console.log('Time to Buy')
}
isNightTime= true
isNightTime ?
 console.log('Turn on the lights!') : 
 console.log('Turn off the lights!');

//baba ade 08038424111
 var userName = 'Deen';
 userName === ''?
 console.log('Hello!'):
 console.log(`Hello, ${userName}!`)
 const userQuestion ='How did you learn js';
 console.log(userName + ' asked that,' + userQuestion)
var randomNumber = Math.floor(Math.random()*8);
let eightBall = '';
if(randomNumber == 0){
    eightBall = 'It is certain';
}
else if(randomNumber == 1){
    eightBall = 'It is decidedly so'
}
else{
    eightBall = 'Signs point to yes'
}

console.log(eightBall)


