let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let runnerAge = 23;

if (early === true && runnerAge >= 18){
  raceNumber += 1000;
  console.log(`You will run at 9:30 am, and your number is ${raceNumber}.`);
}
else if (early === false && runnerAge >= 18){
  console.log(`You will run at 11:00 am, and your number is ${raceNumber}.`);
}
else if (runnerAge < 18){
  console.log(`You will run at 12:30 pm, and your number is ${raceNumber}.`);
}
else{
  console.log('Please check the registration desk.');
}