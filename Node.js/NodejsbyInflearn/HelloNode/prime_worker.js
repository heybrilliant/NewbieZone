const { Worker, isMainThread, parentPort, wokerData} = require('worker_threads');

const min = 2;
let primes = [];

function findPrime(start, range) {
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
  