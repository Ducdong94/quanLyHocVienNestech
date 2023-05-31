

let url = 'https://64648c59127ad0b8f8a16c75.mockapi.io/api/v1/students';

function getStudent() {
    // đọc từ trong cookie ra xem đã có dữ liệu chưa

    // Coolkies là mơi lưu trữ dữ liệu tạm thời trên trình duyệt
    // Dữ liệu trong cookies thường được tự động thêm vào request để truyền 
    // thông tin giữa BE & FE
    // Không thay đổi được dữ liệu nếu HttpOnly = true
    // Cookies sẽ tự động xóa khi hết hạn

    // Lấy dữ liệu từ cookie
    let cookie = document.cookie;
    console.log('cookie: ', cookie);

    // Lấy dữ liệu từ localstorage
    let storage = window.localStorage;
    console.log('localStorage: ', storage);


    if (!storage.data) {
        // chưa có thì mới gọi api để lấy dữ liệu
        let promise = fetch(
            url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        )

        promise
            .then(async function (susscesResp) {
                let listStudent = await susscesResp.json();
                // ghi dữ liệu vào cookies
                // document.cookie = `students=${JSON.stringify(listStudent)}`;

                // ghi dữ liệu vào localstorage
                storage.setItem('data', JSON.stringify(listStudent));
                showStudent(listStudent);
            })
            .catch(function (errorResp) {
                console.log(errorResp);
            });
    } else {
        // lấy dữ liệu từ cookies và hiển thị lên
        // let cookieStudents = cookie.split('=')[1];
        // let listStudent = JSON.parse(cookieStudents);
        let json = storage.getItem('data');
        let listStudent = JSON.parse(json);
        showStudent(listStudent);
    }

}

function showStudent(sturentArr) {
    let tbody = '';
    for (let i = 0; i < sturentArr.length; i++) {
        let student = sturentArr[i];
        tbody += `<tr>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.address}</td>
                    <td>${student.avg}</td>
                    <td>${moment(student.createdAt).format('DD/MM/YYYY')}</td>

                </tr>`;
    }
    // DOM API
    let tbodyTbl = document.getElementById('tbody');
    tbodyTbl.innerHTML = tbody;
}

getStudent();
