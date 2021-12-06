// 모듈 : 변수선언 후 다른 파일에서 사용 가능
const odd = '홀수입니다';
const even = '짝수입니다';

module.exports = { odd, even }
// == export default {odd, even};

// module은 생략 가능함 
// -> 대신 exports.odd = odd; 와 같이 선언해줘야함 
// == exports.even = even;


// module.exports === exports === 객체