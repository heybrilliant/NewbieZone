// 호출스택, 백그라운드, 태스크 큐 이해
function oneMore(){
  console.log('one more');
}
function run(){
  console.log('run run');
  setTimeout(()=> {
    console.log('wow');
  },0)
  new Promise((resolve) => { 
    resolve('hi');
  })
    .then(console.log); 
    oneMore();
}

setTimeout(run,5000);

// 순서대로 호출이 아닌 이벤트루프 때문에 선언되는 순서가 다름을 유의하고 볼 것
// 백그라운드는 C++ 혹은 운영체제 쪽