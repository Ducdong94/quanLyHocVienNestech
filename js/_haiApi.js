// RESPUL API

// API( Application Programing Interface)
// API trung gian cho phép hai ứng dụng có thể giao tiếp vs nhau
// Cách thức làm việc của API
// FE gửi yêu cầu (request)
// BE nhận yêu cầu
// BE xử lí dữ liệu từ DB và xử lí
// BE phản hồi lại yêu cầu (RESPONSE)

// resful API là tiêu chuẩn dùng trong việc thiết kế API cho các ứng dụng web
// API được xây dựng trên hai thành phần chính :

// 1 Request ( yêu cầu)
// URL: là địa chỉ duy nhất cho 1 request, thường dẫn tới 1 hàm xử lý logic 

// Method: 
// * GET (lấy dữ liệu ra)
// * POST (Tạo mới dữ liệu )
// * PUT (cập nhật dữ liệu)
// * DELETE (xóa dữ liệu)
// * OPTIONS
// * HEAD ()
// * TRACE
// * CONNECT (thiết lập kết nối)
// * PATH

// Header 
// Là nơi chứa các thông tin cần thiết của 1 request nhưng người dùng kb và sự tồn tại của nó
// vd(coockie, Referer , Authoriation...)

// Body
// Là nơi chứa thông tin mà client sẽ gửi

// 2 Response(phản hồi )
// - Status code(mã phản hồi từ BE)
// 1xx : Information 
// 2xx : Sussces (thành công)
// 3xx : Redirection (lỗi chuyển hướng)
// 4xx : Client Error (Lỗi phía client)
// 5xx : Server Error (Lỗi server)


// - Header
// Là nơi chứa các thông tin cần thiết của 1 response nhưng người dùng kb và sự tồn tại của nó
// vd(coockie, Referer , ...)

// - Body
// Là nơi chứa thông tin mà BE phản hồi 

let url = 'https://646b70fd7d3c1cae4ce3cdba.mockapi.io/hocvien';

function getStudent() {
    let promise = fetch(
        url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }
    )

    promise
        .then(async function (susscesResp) {
            let listStudent = await susscesResp.json();
            showStudent(listStudent);
        })
        .catch(function (errorResp) {
            console.log(errorResp);
        })
}
getStudent();

function showStudent(sturentArr) {
    let tbody = '';
    for (let i = 0; i < sturentArr.length; i++) {
        let student = sturentArr[i];
        console.log(student.name);
        tbody+= `<tr>
                    <td>${student.name}</td>
                    <td>${student.avatar}</td>
                    <td>${student.createdAt}</td>
                </tr>`;
    }
    // DOM API
    let tbodyTbl = document.getElementById('tbody');
    tbodyTbl.innerHTML = tbody;
}
