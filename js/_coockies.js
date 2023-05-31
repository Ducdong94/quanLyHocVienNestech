// A. Cookies
// Coolkies là mơi lưu trữ dữ liệu tạm thời trên trình duyệt
// Dữ liệu trong cookies thường được tự động thêm vào request để truyền 
// thông tin giữa BE & FE
// Không thay đổi được dữ liệu nếu HttpOnly = true
// Cookies sẽ tự động xóa khi hết hạn

// Lấy dữ liệu từ cookie
let cookie = document.cookie;
console.log('cookie: ', cookie);

// ghi dữ liệu vào cookies
document.cookie = `students=${'abc'}`;

// B. LocalStorage
// Lấy tất cả dữ liệu từ localstorage
let storage = window.localStorage;
console.log('localStorage: ', storage);

// ghi dữ liệu vào localstorage
storage.setItem('data', JSON.stringify(listStudent));

// lấy dữ liệu từ localstorage theo key
// nếu sai key thì trả ra null
let json = storage.getItem('data');





