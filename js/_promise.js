// sync (synchronize): xử lý đồng bộ
// async (asynchronize): xử lý bất đồng bộ

// acsync setTimeout, setInterval
// XMLHttpRequest, fetch, ...

// setTimeout(function () {
//     console.log('b');
// }, 500);

// setTimeout(function () {
//     console.log('c');
// }, 500);

// console.log('a');

// Promise
// Khởi tạo
let promise = new Promise(
    function (resolve, reject) {
        //
        // ... thực hiện việc gì đó
        // (xử lý data, call api,..)

        setTimeout(() => {
            // Data type
            // A. Kiểu nguyên thủy
            // - String
            // - Number
            // - Boolean
            // - undefined
            // - null
            // - Symbol
            // B. Kiểu phức
            // - Object
            // - Array
            // - Funtion
            reject(function (params) {
                console.log('ok bro');
            });
            // reject('Thất bại');
        }, 1000);
    }
);


let promiseResult = promise
    .then(function (data) {
        // nhận dữ liệu khi promise trả thành công
        console.log('Gọi vào .then1 với data: ', data);
        // xử lý data nhận được
        console.log(typeof data);
        //**) this.data == promise.data
        data();
        return 1;
    })
    // promise chain
    .then(function (data) {
        console.log('Gọi vào .then2 với data: ', data);
        // xử lý data mà .then bên trên trả xuống
        return 2;
    })
    .then(function (data) {
        console.log('Gọi vào .then3 với data: ', data);
        // xử lý data mà .then bên trên trả xuống
        return 3;
    })
    .catch(function (data) {
        // nhận dữ liệu khi promise trả thất bại
        console.log('Gọi vào .catch1 với data: ', data);
        return 9;
    })
    .finally(function () {
        // luôn gọi vào đây
        console.log('Promise complted!');
        return 10;
    });

// ****)

async function getPromise() {
    console.log('promiseResult: ');
    console.log(await promiseResult);
}

// console.log('promiseResult: ', promiseResult == promise);
getPromise();


// Promise.all
// Job 1
let promise1 = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            reject('Thất bại promise1');
        }, 3000);
    }
);
// Job 2  
let promise2 = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            resolve('Thất bại promise2');
        }, 5000);
    }
);

//Chờ cho đến khi job1 & job2 thực hiện xong
let promiseAll = Promise.all([promise1, promise2]);
let promiseAllResult = promiseAll
    .then(function (data) {
        // data là mảng các giá trị trả ra khi thành công
        console.log('promiseAll.then có data: ', data);
        let dataPromise1 = data[0];
        let dataPromise2 = data[1];
        console.log('dataPromise1: ', dataPromise1);
        console.log('dataPromise2: ', dataPromise2);
        return dataPromise1;
    })
    // promise chain
    .then(function (data) {
        // data là giá trị trả ra trong .then trước đó
        console.log('promiseAll.then2 có data: ', data);
        return 1;
    })
    .catch(function (data) {
        // data là giá trị trả ra tại promise
        // trả lỗi sớm nhất
        console.log('promiseAll.catch có data: ', data);
        return 2
    }).finally(function () {
        console.log('promiseAll.finally');
    });
async function getPromiseAllRes() {
    let res = await promiseAllResult;
    console.log('getPromiseAllRes: ', res);
}
getPromiseAllRes();

// async, await
console.log('-=========-');
function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
}

async function printData() {
    // 
    // .. xử lý đồng bộ
    //
    // dừng ở await cho đến khi hàm getData trả ra dữ liệu (resolve, reject)
    let dataResult = await getData();
    console.log('dataResult: ', dataResult);
}

printData();






