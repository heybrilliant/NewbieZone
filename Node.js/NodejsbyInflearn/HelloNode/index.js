const{odd, even} = require('./var');
const checkNumber = require('./func');
// checkNumber? -> 변수명은 마음대로 지을 수 있으니까

function checkStringOddOrEven(str){
  if(str.length % 2){
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
