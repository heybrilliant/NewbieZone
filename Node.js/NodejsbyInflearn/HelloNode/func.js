const value = require('./var');
// == import {odd, even} from './var'; 이렇게 require 대신에 from 사용 후 괄호 제거

console.log(value);

const {odd, even} = require('./var');
function checkOddEven(number){
  if(number % 2){
    return odd;
  } else {
    return even;
  }
}

module.exports = checkOddEven; // 내보내기 가능
// module.exports는 파일에서 단 한 번만 써야함

// == export default checkOddEven;