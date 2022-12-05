const input = 'programming is awesome';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++){
  if (input[i] === 'e'){
    resultArray.push('e');
  } else if (input[i] === 'u'){
    resultArray.push('u');
  }
  for (let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
}
let resultString = resultArray.join('');
resultString = resultString.toUpperCase();
console.log(resultString);