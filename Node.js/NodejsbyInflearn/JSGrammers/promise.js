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

promise // 실행은 바로 하되, 결괏값은 나중에 받는 객체
  .then((message) => {
    console.log(message); // 성공(resolve)한 경우 실행 
  })
  .catch((error) => {
    console.error(error); // 실패(reject)한 경우 실행 
  })
  .finally(() =>{ 
    console.log('무조건') // 끝나고 무조건 실행
  })
// 결괏값은 실행이 완료된 후 then 이나 catch 메소드를 통해 받음 



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

// 비동기인 애들은 항상 실패할 가능성을 염두에 둬야하기 때문에 reject 호출이 나눠져있는것

// Node10 버전부터는 for문과 async/await문법을 같이 써서 프로미스를 순차적으로 실행 가능
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async()=>{
  for await(promise of [promise1, promise2]){
    console.log(promise);
  }
})();

// for await of 는 promise들이 여러번 나올때 사용하는 문법(반복문 사용)