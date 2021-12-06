getAll(key)
// 키에 해당하는 모든 값들을 가져옴 
get(key) 
// 키에 해당하는 첫 번째 값만 가져옴 
has(key)
// 해당 키가 있는지 없는지 검사 
keys() 
// searchParams의 모든 키를 반복기(iterator, ES2015문법) 객체로 가져옴 
values() 
// searchParams의 모든 값을 반복기 객체로 가져옴
append(key, values) 
// 해당 키를 추가함, 같은 키의 값이 있다면 유지하면서 하나 더 추가 
set(key, values)
//append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가함
delete(key) 
// 해당 키를 제거 
toString() 
// 조작한 searchParams 객체를 다시 문자열로 만듬-> 이 문자열을 search에 대입하면 주소 객체에 반영됨