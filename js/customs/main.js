console.log('Hello World 1!');
var inp = prompt(`==== Quản lý học viên 1.0 ====\n
1. Danh sách học viên\n
2. Tìm kiếm học viên\n
3. Thêm học viên\n
4. Sửa thông tin học viên\n
5. Xóa học viên\n
Vui lòng chọn chức năng: `);

// Ctrl + B
// **)
// typeof: kiểm tra kiểu dữ liệu của biến
// object == array == null vì đều trả ra kiểu là object

// A. Kiểu dữ liệu, biến & hằng số
// A1: Primitive type: kiểu nguyên thủy
// khi khởi tạo giá trị sẽ được lưu vào vùng nhớ và không thể sửa giá trị tại vùng nhớ
// 1. Number
// 1.1. Khai báo và khởi tạo giá trị
var numberObj = new Number(3);
var number = 'abc.4'; //
let number2 = 1.54423543254325754;
const NUMBER_CONST = 1;
let tong;

// NaN: 1 số không hợp lệ (not a number)
// isNaN để kiểm tra 1 chuỗi có là số ko
// Number(number): chuyển kiểu chuỗi sang số
if (!isNaN(number)) {
    tong = Number(number) + number2;
}
// chuyển từ số => chuỗi
let convert1 = number2 + '';
let convert2 = number2.toString();
// gioi hạn phần thập phân ( tu dong lam tron)
let convert3 = number2.toFixed(1);
// **) Lưu ý 1
let convert4 = 1.1 * 10 - 0.5 * 10; // 1.1 - 0.6 = 0.6000000000001
let res = convert4 / 10;

if (convert4 === '0.6') {
    console.log('OK');
}
// **) Lưu ý 2: giới hạn số sau dấu , 
// là 15 số, sẽ bị sai số ở số thứ 16
let maxFloat = 1.1234567890123459;

// 2. String
var strObj = new String("Day la chuoi 1");
// Độ dài tối đa của chuỗi không quá 80 ký tự
var str2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    + " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    + " when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    + " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    + " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,"
    + " and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// Dùng escaped để trích dẫn "Trich dan"
let str3 = "Day ''''''''' la \"trich dan\" 3";
// console.log(str3);
let str4 = 'Day \'\'\'\'\'\'\'\'\' la "trich dan" 4';
// console.log(str4);
const STRING_CONST = 'Day la chuoi 4';

// Template string str6
var num4 = 4;
var num3 = 3;
var num2 = 2;

var str5 = 'Giá trị của num4: ' + num4 +
    ' num3: ' + num3 + ' num2: ' + num2;
var str6 = `      Giá trị của num4: ${num2} num3: ${num3} num2: ${num2}    `;
// console.log(str5);
// console.log(str6);

// Một số thao tác cơ bản với chuỗi
// console.log(str6.length);
// console.log(str6.toUpperCase());
// console.log(str6.toLowerCase());
// // cắt chuỗi
// var cut = str6.split(':');
// console.log(cut);
// // nối chuỗi
// console.log(cut.join('-'));
// // tìm kiếm chỉ số của ký tự trong chuỗi
// console.log(str6.indexOf('num3'));
// // tìm chuỗi theo chỉ số
// console.log(str6.charAt(23));
// // lạo bỏ khoảng trắng ở 2 đầu
// console.log(str6.trim());
// // thay đổi chuỗi
// console.log(str6.replace('Giá trị', 'Đã thay đổi').trim());

// 3. Boolean (true | false)
var b = new Boolean(true);
var b2 = true;
let b3 = false;
const BOOLEAN_CONST = true;

// 4. Null (không có gì)
var n2 = null;
let n3 = null;

// 5. Undefined (chưa được khởi tạo | không tồn tại)
var u;

// 6. Symbol (unique: là duy nhất)
var s1 = Symbol(1);
let s2 = Symbol(2);
console.clear();
// A2: Complex type: kiểu dữ liệu phức tạp
// khi khởi tạo giá trị sẽ được lưu vào vùng nhớ và có thể gọi và thay đổi giá trị
// 1. Object (Struct)
var obj = {
    width: "100", // thộc tính của object (properties)
    age: 1,
    obj2: {
        key2: 'value2',
        obj3: {
            key3: 'value3',
            arr: [1, 2, 3]
        }
    },
    'full-name1': 'Nguyen Van A',
    'full-name2': 'Nguyen Van B',
    'full-name3': 'Nguyen Van C',
    getFullname1: function () { // phương thức (method)
        return this["full-name1"];
    },
    getFullname2: function () {
        return this["full-name2"];
    },
    getFullname3: function () {
        return this["full-name3"];
    }
};

// lấy giá trị
let objKey = 'full-name1';
// console.log(`${obj[objKey]} \n ${obj['full-name2']}`);
// console.log(obj.width);
// console.log(obj.obj2.obj3.key3);
// console.log(obj.obj2.obj3.arr[2]);

// d/s key của obj
// let keyArr = Object.keys(obj);
// console.log(keyArr);

// xóa theo key
// delete obj['full-name2'];
// delete obj['full-name3'];
// delete obj.obj2;
// delete obj['obj2'];

// them gia tri
// obj['full-name2'] = 'Nguyen Van B';

// gọi ham trong obj
// console.log(obj.getFullname1());
// console.log(obj.getFullname2());
// console.log(obj.getFullname3());

var author = {
    fullname: 'Nguyen Van A',
    age: 50,
    address: 'Lào Cai',
    org: 'Nestech2023'
}

var editor = {
    fullname: 'Nguyen Van B',
    age: 30,
    address: 'Hà Nội',
    org: 'Nestech2023'
}

var reviewer = {
    fullname: 'Nguyen Van C',
    age: 20,
    address: 'Hà Nam',
    org: 'Nestech2023'
}

// Object constructor
// declaration function
function User(fullname, age, address, org) {
    this.fullname = fullname;
    this.age = age;
    this.address = address;
    this.org = org;
}

// expresstion function
var User2 = function (fullname, age, address) {
    this.fullname = fullname;
    this.age = age;
    this.address = address;
    //this.org = org;
}

// Object prototype
User2.prototype.org = 'Nestech2023';
User2.prototype.getOrg = function () {
    console.log(this.fullname);
}

var author2 = new User2('Nguyen Van A', 50, 'Lào Cai');
var editor2 = new User2('Nguyen Van B', 30, 'Hà Nội');
var reviewer2 = new User2('Nguyen Van C', 20, 'Hà Nam');
User2.prototype.org = 'Nestech';

// console.log(author2);
// console.log(editor2);
// console.log(reviewer2);

// author2.getOrg();
// editor2.getOrg();
// reviewer2.getOrg();

//.. 9 kiểu dữ liệu

// đối tượng Date
// dd/mm/yyyy ~ 10/10/2023
// mm/yyyy ~ 10/2023
// yyyy ~ 2023
// ...
var date1 = new Date(); // khai bao theo cach nay
var date2 = Date(); // string
var date3 = Date.now(); // trả ra milisecond
// console.log(date1);
// console.log(typeof date1);

// console.log(date2);
// console.log(typeof date2);

// console.log(date3);
// console.log(typeof date3);

// console.log(date1.getHours());
// console.log(date1.getMinutes());
// console.log(date1.getSeconds());
// console.log(date1.getMilliseconds());
// console.log(date1.getDate());
// console.log(date1.getMonth()); // 0-11
// console.log(date1.getFullYear());
// console.log(`${date1.getDate()}/${date1.getMonth()+1}/${date1.getFullYear()}`);

// console.log(moment().format('MM/YYYY'));  

// if-else, switch-case
// vòng lặp
// for, while, do-while
// for/in: lặp qua các key của obj bao gồm cả trong prototype
for (const key in author2) {
    // console.log(key);
}
// console.log('======');
// lặp qua các key không bao gồm prototype
let kArr = Object.keys(author2);
for (let index = 0; index < kArr.length; index++) {
    const element = kArr[index];
    // console.log(element);
}
// for/of: lặp qua toàn bộ các giá trị của mảng
let arr3 = [1, 2, 3, 4, 5];
for (const iterator of arr3) {
    // console.log(iterator);
}

// forEach: lặp qua toàn bộ các giá trị của mảng
// và ko return gia tri nao
let resArr = arr3.forEach((a, b, c) => {
    // console.log(a); // giá trị
    // console.log(b); // chỉ số
    // console.log(c); // giá trị mảng ban đầu
    //console.log('====');
    //....
});

// map lặp qua toàn bộ các giá trị của mảng
// và trả ra mảng các gia tri
resArr = arr3.map((a, b, c) => {
    // console.log(a); // giá trị
    // console.log(b); // chỉ số
    // console.log(c); // giá trị mảng ban đầu
    return a + 2;
});
resArr = arr3.filter((x, y, z) => {
    if (x <= 3) {
        return true;
    } else {
        return false;
    }
    // console.log(x); // giá trị
    // console.log(y); // chỉ số
    // console.log(z); // giá trị mảng ban đầu
}).map((a, b, c) => {
    // console.log(a); // giá trị
    // console.log(b); // chỉ số
    // console.log(c); // giá trị mảng ban đầu
    return a;
});

let gt = arr3.reduce(function (a, b, c, d) {
    console.log(a); // biến tích lỹ
    console.log(b); // phần tử của mảng đang được xử lý
    console.log(c); // chỉ số   
    console.log(d); // giá trị mảng ban đầu
    return b;
});

// Hàm xử lý với mảng
// forEach
// map
// filter
// reduce
//...
// some: tra ra kq là true nếu 1 phần tử bên trong mảng đáp ứng điều kiện
console.clear();
let someArr = [1, -3, 5, 7];
let resultSomeArr = someArr.some(function (value, index, raw) {
    if (value < 0) { // dk
        return true;
    }
    return false;
});
console.log('resultSomeArr: ', resultSomeArr);

// every: tra ra true nếu toàn bộ các phần tử trong mảng đáp ứng điều kiện
let resultEvery = someArr.every(function (value, index, raw) {
    if (value <= 7) { // dk
        return true;
    }
    return false;
});
console.log('resultEvery:', resultEvery);

// find: tra ra 1 ket qua dung dau tien theo dieu kien
let findResult = someArr.find(function (value, index, raw) {
    if (value <= 7) { // dk
        return true;
    }
    return false;
});
console.log('findResult: ', findResult);

// includes
// kiểm tra giá trị có trong mảng hay ko
// kiểm tra giá trị có trong chuỗi hay ko
console.log(someArr.includes(1, 2));
console.log('day la string'.includes('l', 5));

// Math: xử lý số liệu
// Math.PI; //3.14
console.log(Math.PI);
console.log(Math.round(1.5));
console.log(Math.floor(1.9));
console.log(Math.ceil(1.1));
console.log(Math.abs(-5)); // abs ~ absolute
console.log(Math.min('3', '4', '6'));
console.log(Math.max(6, '9', ' 6', 5, 7));
console.log(Math.random());


// Đệ quy
console.clear();
function deQuy(inpNum) {
    if (inpNum <= 0) {
        return;
    }
    deQuy(--inpNum);
    console.log('inpNum: ', inpNum);
}

deQuy(10);

// Regex: Regular Expresstion
// Regex là các mẫu (pattern) thay vì các chuỗi cụ thể được sử dụng
var strRe = 'day la string nhe';
// strRe = strRe.replaceAll('string', 'string da thay doi');
// strRe = strRe.replace(/string/, 'string da thay doi');
strRe = strRe.replace(/\w{6}/, 'string da thay doi');

console.log(strRe);


// 2. Array
var arr = [1, 'a', 2, 'b', 3, 'c'];

// Một số hàm thao tác với mảng
// kiem tra do dai
// console.log(arr.length);
// kiem tra bien co phai kieu mang ko
// console.log(Array.isArray(arr));
// chuyển kiểu mảng => string
let toStr = arr.toString();
// console.log(toStr);
// chuyển kiểu mảng => string có dấu phân cách
let joinedStr = arr.join('+');
// console.log(joinedStr);
// chuyển kiểu string => mảng. Được cắt bởi 1 ký tự
let splArr = joinedStr.split('+2+b');
// console.log(splArr);
// thêm phần tử vào phía sau mảng
// arr.push(4);
// arr.push('d');
// arr[10] = 4;
// arr[11] = 'd';
// xóa phần tử cuối cùng và trả về giá trị đó
let poped = arr.pop();
// thêm phần tử vào đầu mảng
arr.unshift('abc');
// xóa phần tử vào đầu mảng
let shifted = arr.shift();
// xóa 1 tập hợp phần tử trong mảng 
// trả ra 1 mảng các phần tử bị xóa
// let removed = arr.splice(2, 2);
// gộp (nối) 2 mảng (concat)
let arr2 = [10, 11, 12];
let concated = arr.concat(arr2).concat(arr);
// sao chep 1 tập hợp các giá trị trong mảng
let result = arr.slice(-9, -3);
// arr.slice(1, 3);
// console.log(arr);
// console.log(result);

// 3. Function
var fn = function name() { }
// console.log(typeof fn);
// 3 loại hàm
// - declaration funtion
function declared(number) {
    console.log('declaration funtion');
    console.log('Gia tri cua number: ' + number);
}

// - exprestion function
var exprestion = function (number) {
    console.log('exprestion funtion');
    console.log('Gia tri cua number: ' + number);
}
// - arrow function
var arrow = (number) => {
    console.log('arrow funtion');
    console.log('Gia tri cua number: ' + number);
}

// Callback (hàm được truyền vào đối số khi gọi hàm khác =)
function tinhTong(a, b, c) {
    let giaTriTinhDuoc = c(a, b);
    console.log(giaTriTinhDuoc);
}
function tinh(a, b) {
    let tong = a + b;
    return tong;
}
// tinhTong(2, 4, tinh);
// tinhTong => tinh 
// tinhTong => c => tinh  (callback)
let intervalIns = function () {
    if (count === 0) {
        clearInterval(intervalId);
    }
    // console.log("interval... "+ count);
    count--;
}
setInterval(intervalIns, 1000);
// setInterval(() => {
//     // do something
//     if (count === 0) {
//         clearInterval(intervalId);
//     }
//     if (count === 2) {
//         clearTimeout(timeoutId);
//     }
//     // console.log("interval... "+ count);
//     count--;
// }, 1000);

// Đối tượng arguments
function printLog() {
    function doneNotif() {
        console.log('done');
    }
    let log = '';
    // Mặc định khi khai báo hàm sẽ có đối tượng arguments
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        // if(i >= 5){
        //     // có thể return bất cứ kiểu dữ liệu nào, biểu thức
        //     return 4+6;
        // }
        log += arguments[i] + ' ';
    }
    // scoped
    console.log(log.trim());
    doneNotif();
}

// polifill







// nếu hàm ko có return 
// thì mặc định trả về undefined


var resultPrint = printLog(1, 2, 3, 4, 5, 6);


// console.log(resultPrint);





// fn = 'str';
// console.log(typeof fn);
// fn = 1;
// console.log(typeof fn);

// khác nhau giữa let & var
// khác 1: phạm vi của biến (scope)
// var: không bị giới hạn bởi phạm vi
// let: bị giới hạn bởi phạm vi
if (true) {
    var var1 = 'Khai bao dung var';
    let let1 = 'Khai bao dung let';
    //..
    //..
    // console.log(let1);
}
// console.log(var1);

// khác 2: hoisting - sử dụng trước và khai báo sau
// let: không có cơ chế hoisting
// var: có cơ chế hoisting
// console.log(hoisting);
var hoisting = 'Giá trị';
// console.log(hoisting);

// sâu hơn về hoisting
// code
// console.log(h);
var h;
h = 'str';
// khi biên dịch sẽ chuyển đổi thành
var h;
//..
// console.log(h);
h = 'str';

// B. Một số hàm build-in trong js
// console.log('In thông tin ra màn hình');
// console.warn('In cảnh báo ra màn hình');
// console.error('In lỗi ra màn hình');
// console.table([1,2,3]);
// alert('Day la 1 popup thong bao');
// var inp = prompt('Nhap vao ten cua ban');
// console.log(inp);
// var inp2 = confirm('Ban co chac chan ko');
// console.log(inp2);
// console.clear();


// timeout: thuc hien 1 viec sao 1 khoang thơi gian

let timeoutId = setTimeout(() => {
    // do something
    // console.log("runed... ");
}, 5000);

// interval: thuc hien 1 viec lap di lap lai
let count = 4;
let intervalId = setInterval(() => {
    // do something
    if (count === 0) {
        clearInterval(intervalId);
    }
    if (count === 2) {
        clearTimeout(timeoutId);
    }
    // console.log("interval... "+ count);
    count--;
}, 1000);








// C. Toán tử
// 1. Toán tử so sánh (Comparition) > < == ===
let x = '4';
let y = 4;
// ==) Chỉ so sánh giá trị
let kq = x == y;
// console.log('kq1: ' + kq);

// ===) So sánh giá trị & kiểu dl
let kq2 = x === y;
// console.log('kq2: ' + kq2);
// console.log(typeof x);
// console.log(typeof y);

// 2. Toán tử gán (Assignment) = += -=
// 3. Toán tử số học (Arithmetic) + - * / % **(lũy thừa)
let z = 2;
let kq3 = z ** 3;

// 4. Toán tử logic (logical) || && !
// AND(&&): trả ra giá trị vế phải nếu vế trái = true
// hoặc sẽ trả về false 
// Các giá trị tương ứng với false
// - fasle
// - ''
// - null
// - undefined
// - 0
// - NaN
let boolean1 = 3 < 4 && 'A' && NaN && 'C';
// OR (||) : trả ra giá trị đúng đầu tiên
let boolean2 = null || -5 || NaN || 'C';











