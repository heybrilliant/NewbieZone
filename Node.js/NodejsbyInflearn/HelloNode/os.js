const os = require('os');
// os란 파일을 만들지 않았지만 노드에서 미리 모듈로 만들어 두어서 제공을 해줌

os.uptime();
// os : operation system = 운영체제에 대한 정보

//os 모듈 메서드
os.arch() // process.arch와 동일
os.platform() // process.platform 과 동일 
os.type() // 운영체제의 종류를 보여줌 
os.uptime() // 운영체제 부팅 이후 흐른 시간(초단위)을 보여줌 
os.hostname() // 컴퓨터의 이름을 보여줌
os.release() // 운영체제의 버전을 보여줌
os.homedir() // 홈 디렉토리 경로를 보여줌 
os.tmpdir() // 임시 파일 저장경로를 보여줌 
os.cpus() // 컴퓨터의 코어 정보를 보여줌 
os.freemem() // 사용 가능한 메모리(RAM)를 보여줌
os.totalmem() // 전체 메모리 용량을 보여줌

// nodejs.org 접속 후 docs의 os참고