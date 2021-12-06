const path = require('path');

path.join(__dirname, 'var.js');
path.resolve(__dirname, '..', '/var.js');
// resolve는 join이랑 비슷한데 resolve는 /를 절대경로로 처리, join은 상대경로로 처리
path.normalize()
// path경로를 정렬해줌