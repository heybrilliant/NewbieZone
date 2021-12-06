const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecated((x,y) =>{
  console.log(x+y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) =>{
    console.error(error);
  });

  // util.deprecate : 함수가 deprecated 처리 되었음을 알려줌 
  // 첫번째 인자로 넣은 함수를 사용했을 때, 경고 메세지가 출력됨
  // 두번째 인자로 경고메세지를 넣으면 됨. 함수가 조만간 사라지거나 변경될 때 알려줄 수 있어 유용

  // util.promisify : 콜백 패턴을 프로미스 패턴으로 바꿔줌 
  // 바꿀 함수를 인자로 제공하면 됨, 이렇게 바꾸어두면 async/await 패턴까지 사용할 수 있어 좋음. 단, 콜백이 (error, data) => {} 형식이어야 함 
  