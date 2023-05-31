// RESFUL API

// API là viết tắt của Application Programing Interface
// API trung gian cho phép hai ứng dụng có thể giao tiếp với nhau
// Cách thức làm việc của API:
// - FE gửi yêu cầu (request)
// - BE nhận yêu cầu
// - BE lấy dữ liệu từ DB và xử lý
// - BE phản hồi lại yêu cầu (response)

// Resful API là tiếu chuẩn dùng trong việc thiết kế API cho các ứng dụng web
// API được xây dựng trên 2 thành phần chính:

// 1. Request (yêu cầu)

// - URL: là địa chỉ duy nhất cho 1 request, thường là dẫn tới 1 hàm xửu lý logic (địa chỉ nhà)
// http://127.0.0.1:5500/_promise.html#
// https://app.diagrams.net/#G1DIu06Tc8icqxVR8KiJ-aHeFlJ7BC_TO1
// https://64648c59127ad0b8f8a16c75.mockapi.io/api/v1/students

// - Method
// https://viblo.asia/p/cung-tim-hieu-ve-http-request-methods-djeZ1xBoKWz

// * GET - Lấy dữ liệu
// * POST - Tạo mới
// * PUT - Sửa
// * DELETE - Xóa

// * OPTIONS
// * HEAD
// * TRACE
// * CONNECT
// * PATH

// - Header
// Là nơi chứa các thông tin cần thiết của 1 request nhưng người dùng không biết
// về sự tồn tại của nó. Ví dụ (Cookie, Authorization, Referer, Xsrf-Token,.. ) 

// - Body
// Là nơi chưa thông tin mà client sẽ gửi 

// 2. Response (phản hồi)

// - Status Code (mã phản hồi từ BE)
// https://viblo.asia/p/tim-hieu-ve-http-status-code-lA7GKwx5GKZQ
// - 1xx: Infomation (Thông tin)
// - 2xx: Susscess (Thành công)
// - 3xx: Redirection (Chuyển hướng)
// - 4xx Client Error (Lỗi phía client)
// - 5xx: Server Error (Lỗi server)

// - Header
// Là nơi chứa các thông tin cần thiết của 1 response nhưng người dùng không biết
// về sự tồn tại của nó. Ví dụ (Cookie,... ) 

// - Body
// Là nơi chưa thông tin mà BE phản hồi

// https://64648c59127ad0b8f8a16c75.mockapi.io/api/v1/students
// XMLHttpRequest, fetch
let url = 'https://64648c59127ad0b8f8a16c75.mockapi.io/api/v1/students';

function getStudents() {
    let promise = fetch(
        url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    promise
        .then(async function (successResp) {
            // Khi gọi API thành công
            console.log('successResp: ', successResp);
            let listStudents = await successResp.json();
            console.log('successResp.body: ', listStudents);
            // sử dụng DOM API để đưa dữ liệu lên màn hình
            return successResp;
        })
        .catch(function (errorResp) {
            // Khi gọi API thất bại
            console.log('errorResp: ', errorResp);
        });
}
getStudents();

// 1. Tạo tài khoản và api trên https://mockapi.io/
// 2. Call api đã tạo để lấy dữ liệu về
// 3. Sử dụng DOM API để đưa dữ liệu lên màn danh sách







