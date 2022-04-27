//my age in human years
const myAge=23;
//my first two years of life
let earlyYears=2;
earlyYears=2*10.5;
//my age minus the years of the earlyYears
let laterYears=myAge-2;
laterYears*=4;

console.log(earlyYears);
console.log(laterYears);
//My age in dog years
const myAgeInDogYears=earlyYears+laterYears;
//my name in lower case
let myName='Ratinho'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)