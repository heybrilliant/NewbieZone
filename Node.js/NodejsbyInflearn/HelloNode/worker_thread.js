const { Worker, isMainThread, parentPort, wokerData} = require('worker_threads');

if(isMainThread){ // 메인스레드 : isMainThread로 분기 처리 가능
  const threads = new Set(); // Set = 중복되지 않는 배열

  threads.add(new Worker(__filename, {
      workerData : { start : 1 },
  }));
  threads.add(new Worker(__filename, {
      workerData : { start : 2 },
  }));
  for (let worker of threads) {
    worker.on('message',(value) => console.log('워커로부터', value));
    worker.on('exit', () => {
      threads.delete(worker);
        if(threads.size === 0) {
          console.log('워커 끝~');
        }
    });
  }

} else { // 워커스레드 
    const data = workerData;
    parentPort.postMessage(data.start + 100);
  
  // parentPort.on('message', (value)=>{
  //   console.log('부모로부터',value);
  //   parentPort.postMessage('pong'); // 부모로 쏴주고 
  //   parentPort.close(); // 종료
  // })
}