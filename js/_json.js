// JSON = JavaScript Object Notation
// là định dạng dữ liệu (kiểu chuỗi)
// quy ước chung để giao tiếp giữa các hệ thống, các ngôn ngữ

// JSON thể hiện các kiểu dữ liệu:
// Number
// Boolean
// Null
// Array
// Object

// Encode = Chuyển kiểu dữ liệu javascript => JSON 
console.log(JSON.stringify(12));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify({key: 'value'}));
// {"key": "value"}
console.log('----------');
// Decode = Chuyển JSON thành kiểu dữ liệu trong javascript
console.log(JSON.parse('12'));
console.log(JSON.parse('true'));
console.log(JSON.parse('null'));
console.log(JSON.parse('[1,2,3]'));
console.log(JSON.parse('{"key":"value"}'));
