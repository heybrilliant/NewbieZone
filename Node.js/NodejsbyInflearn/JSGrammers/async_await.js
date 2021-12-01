// promise를 사용해서 코드를 분리할 수 있는지 없는지가 매우 큰 차이임
// async/a
//>> 콜백 패턴(3중첩)을 프로미스로 바꾸는 예제 
function findAndSaveUser(Users){
  Users.findOne({}, (err, user) => { // 첫 번째 콜백
    if(err){
      return console.error(err);
    }
    user.name = 'zero';
    user.save((err) => { // 두 번째 콜백
      if(err){
        return console.error(err);
      }
      Users.findOne({gender : 'm'}, (err, user) => { // 세 번째 콜백
        // 생략 
      })
    })
  })
}

// >> findOne, save 메소드가 프로미스를 지원한다고 가정 
function findAndSaveUser(Users){
  Users.findOne({})
  .then((user) =>{
    user.name = 'zero';
    return user.save();
  })
  .then((user) => {
    return Users.findOne({ gender : 'm'});
  })
  .then((user) => {
    return
  })
  .catch(err => {
    // 생략
  })
}

// 콜백 헬은 줄였지만 만약 .then, .then, .then을 더 줄이고 싶다면 
async function findAndSaveUser(Users){
  let user = await Users.findOne({}); // await이 then역할을 한다고 보면됨
  // 결과값을 앞에서 받는 것임 = 실행순서가 오른쪽에서 왼쪽으로 간다
  // 아까 promise에서는 .then((user) => return 어쩌고) 였다면
  // 
  user.name = 'zero';
  user = await user.save();
  user = await Users.findOne({gender : 'm'});
}

// async도 promise의 일종이기 때문에 async에서 return해주면 무조건 .then or await으로 받아야함
// 예시

async function main(){
  const result = await promise;
  return 'zerocho';
}

//이렇게 .then으로 받아야함
//main().then((name)=>)

// 혹은 이렇게 await으로 받기
const name = await main()
// 대신 await 쓸 때 조심해야 할 점!!!! catch가 없음
// 그러면 try-catch로 감싸줘야함
async function main(){
  try{
  const result = await promise;
  return 'zerocho';
  } catch(error) {

  }
}
// async/await이 promise와 똑같은데 resolve를 처리하는 부분만 있고 
// reject를 처리할 부분이 없어서 reject를 처리하려고 한다면 try-catch로 감싸주고 catch에서 처리해줘야한다 


async function findAndSaveUser(Users){
  //생략
}
findAndSaveUser().then(()=>{ /* 생략 */});
// 또는
// async fucntion other(){
//   const result = await findAndSaveUser();
// }



promise
  .then((message)=>{
    return new Promise((resolve, reject) => {
      resolve(message);
    })
  })
  .then((message2)=> {
    console.log(message2);
    return new Promise((resolve,reject)=> {
      resolve(message2);
    });
  })
  .then((message3)=> {
    console.log(message3)
  })
  .catch((error)=>{
    console.log(error);
  });