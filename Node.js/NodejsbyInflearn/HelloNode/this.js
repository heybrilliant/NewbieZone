console.log(this); // {} 출력 -> 빈객체가 나옴 

function a(){
  console.log(this === global);
}
a();
// true 출력 
// this scope의 빈 객체만 전역 객체가 된다