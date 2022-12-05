//temperature of today in kelvin
const kelvin=0;
//temperature of today in celsius
let celsius=kelvin-273;
//temperature of today in fahrenheit
let fahrenheit=celsius*(9/5)+32;
//rounded down temperature of today in fahrenheit
fahrenheit=Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton=celsius*(33/100);
newton=Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);