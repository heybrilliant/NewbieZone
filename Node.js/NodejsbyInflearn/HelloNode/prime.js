// 2부터 1000만 까지의 소수를 찾는 예제

const min = 2; 
const max = 10_000_000;
const primes = [];

// 에라토스테네스의 체 알고리즘을 이용해서 찾기
function generatePrime(start, range) {
  let isPrime = ture;
  const end = start + range;
  for(let i = start; i <end; i++){
    for(let j = min; j <Math.sqrt(end); j++){
      if ( i !== j && i % j === 0) {
        isPrime = false;
        break;
      } 
    }
    if(isPrime){
      primes.push(i);
    }
    isPrime = true;
  }
}

console.time('prime');
generatePrime(min, max);
console.timeEnd('prime');
console.log(primes.length);
