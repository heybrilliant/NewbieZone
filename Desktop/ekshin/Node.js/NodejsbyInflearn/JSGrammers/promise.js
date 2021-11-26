// 프로미스 

const condition = ture; 
// true 면 reslove, false 면 reject 
const promise = new Promise((resolve, reject) => {
  if (condition){
    resolve('성공'); //동기실행
  } else {
    reject('실패'); //동기실행
  }
});
// 여기까지는 동기로 진행됨
// callback이랑 다른점은 callback은 항상 이부분에 코드가 붙어있음
// 다른 코드가 들어갈 수 있음 

promise 
  .then((message) => {
    console.log(message); // 성공(resolve)한 경우 실행 
  })
  .catch((error) => {
    console.error(error); // 실패(reject)한 경우 실행 
  })
  .finally(() =>{ 
    console.log('무조건') // 끝나고 무조건 실행
  })


// Promise.resolve(성공리턴값) & Promise.reject(성공실패값)
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
  .then((result) =>{
    console.log(result); //[성공1, 성공2];
  })
  .catch((result) =>{
    console.error(error);
  })
  