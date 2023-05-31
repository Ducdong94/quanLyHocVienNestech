// Đề bài: Xây dựng chương trình quản lý học viên.
// Có các chức năng như menu
// ==== Quản lý học viên 1.0 ====
// 1. Danh sách học viên
// 2. Tìm kiếm học viên (tìm theo tên học viên)
// 3. Thêm học viên (tên học viên, tuổi, địa chỉ)
// 4. Sửa thông tin học viên (tên học viên, tuổi, địa chỉ)
// 5. Xóa học viên
// 6. Thoát

// https://www.w3schools.com/html/default.asp
// ==================== Frontend-step-1
// Mọi người sửu dụng các thẻ đã học để xây dựng giao diện cho 
// chương trình này nhé

// Gợi ý:
// Sử dụng thẻ ol để hiển thị danh sách menu
// Sử dụng input có type = number để cho người dùng nhập lựa chọn
// Chức năng 1: Sử dụng bảng để hiển thị danh sách học viên
// Chức năng 2: Sử dụng input có type = text để nhập tên cần tìm và nút tìm kiếm
// Chức năng 3: Sử dụng form và các thẻ input
// Chức năng 4: Sử dụng form và các thẻ input
// Chức năng 5: Sử dụng input có type = text để nhập tên cần xóa và nút xóa
// Chức năng 6: Sử dụng thẻ p để hiển thị lời xác nhận và 2 nút "Đồng ý" và "Đóng"
// ***) Mọi người về nhà bổ sung thêm giao diện chức năng 7,8,9 


// ===================== Frontend-step-2
// Căn chỉnh, css

// ===================== Frontend-step-3
// JS xử lý 









// B1: Hiện menu chức năng
// ==== Quản lý học viên 1.0 ====
// 1. Danh sách học viên
// 2. Tìm kiếm học viên (tìm theo tên học viên)
// 3. Thêm học viên (tên học viên, tuổi, địa chỉ)
// 4. Sửa thông tin học viên (tên học viên, tuổi, địa chỉ)
// 5. Xóa học viên
// 6. Thoát

// B2: Cho người dùng lựa chọn chức năng

// B3: Kiểm tra giá trị người dùng nhập vào có hợp lệ hay không
// Ko hợp lệ thì yêu cầu nhập lại

// B4: Xây dựng các hàm tương ứng với các chức năng

//**) Khởi tạo Template String bằng ký tự ``
var danhSachHocVien = [
    {
        ten: 'Dong',
        tuoi: 30,
        diaChi: 'HN'
    },
    {
        ten: 'Tay',
        tuoi: 20,
        diaChi: 'TB'
    }
];
function HocVien(ten, tuoi, diaChi) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.diaChi = diaChi;
}
// B1
let menu = `==== Quản lý học viên 1.0 ====\n
1. Danh sách học viên\n
2. Tìm kiếm học viên (tìm theo tên học viên)\n
3. Thêm học viên (tên học viên, tuổi, địa chỉ)\n
4. Sửa thông tin học viên (tên học viên, tuổi, địa chỉ)\n
5. Xóa học viên\n
6. Dừng chương trình\n
Vui lòng chọn chức năng: `;
// B2
// Ko hợp lệ thì cho nhập lại
let input;

function danhSachHocVien() {
    let hienThi = '';
    // for
    for (var index = 0; index < danhSachHocVien.length; index++) {
        let hv = danhSachHocVien[index];
        let ten = hv.ten;
        let tuoi = hv.tuoi;
        let diaChi = hv.diaChi;
        hienThi += `Tên: ${ten}\nTuổi: ${tuoi}\nĐịa chỉ: ${diaChi}\n=====\n
                            `; // hienThi = hienThi + `123`
    }
    alert(hienThi);
}
do {
    do {
        input = prompt(menu);
        console.log('input: ', input);
        // B3: Kiểm tra giá trị có hợp lệ hay không
        // Gái trị hợp lệ là tập hợp các số 1,2,3,4,5,6
        var hopLe;
        // Cách 1: ép về kiểu số
        let inputNumber = Number(input);
        if (inputNumber <= 6 && inputNumber >= 1) {
            hopLe = true;
        } else {
            hopLe = false
        }
        // Cách 2: sử dụng mảng
        if (input !== null && ['1', '2', '3', '4', '5', '6'].includes(input.trim())) {
            hopLe = true;
        } else {
            hopLe = false
        }
        console.log('hopLe: ', hopLe);
    } while (!hopLe);
    // B4:
    if (hopLe) {
        switch (input) {
            // Khi người dùng bấm chọn 1 (switch-case || if-else)
            // Hiển thị danh sách học viên có trong danhSachHocVien (alert, vòng lặp for)
            case '1':
                danhSachHocVien();
                break;
            case '2':
                let kq = '';
                // Tìm kiếm học viên trong mảng danh sách
                let tenTimKiem = prompt('Nhập tên học viên:');
                // for
                // for (let index = 0; index < danhSachHocVien.length; index++) {
                //     let hv = danhSachHocVien[index];
                //     if(hv.ten === tenTimKiem){
                //        kq += `Tìm thấy học viên:\nTên: ${hv.ten}\nTuổi: ${hv.tuoi}\nĐịa chỉ: ${hv.diaChi}`; 
                //         break;
                //     }
                // }
                // find
                let hvTimThay = danhSachHocVien.find(function (value, index, raw) {
                    if (value.ten === tenTimKiem) {
                        return true;
                    }
                });
                kq += `Tìm thấy học viên:\nTên: ${hvTimThay.ten}\nTuổi: ${hvTimThay.tuoi}\nĐịa chỉ: ${hvTimThay.diaChi}`;
                alert(kq);
                break;
            // Khi người dùng bấm chọn 3 (switch-case || if-else)
            // Thì hiện các ô nhập để người dùng nhập vào promt(tên học viên, tuổi, địa chỉ)
            // Khởi tạo đối tượng HocVien sử dụng object constructor
            // Push đối tượng vừa khởi tạo vào mảng lưu trữ
            case '3':
                // Nhập tên
                let ten = prompt('Nhập tên học viên:');
                // Nhập tuổi
                let tuoi = prompt('Nhập tuổi học viên:');
                // Nhập địa chỉ
                let diaChi = prompt('Nhập địa chỉ học viên:');
                let hv = new HocVien(ten, tuoi, diaChi);
                danhSachHocVien.push(hv);
                // []
                // [{ten: 'NguyenVan A', tuoi: '12', 'diaChi': 'Hà Nội'}, {ten: 'NguyenVan A', tuoi: '12', 'diaChi': 'Hà Nội'}]
                break;
            case '4':
                // Tìm học viên
                let tenHvCanSua = prompt('Nhập tên học viên:');
                let hvCanSua = danhSachHocVien.find(function (value, index, raw) {
                    if (value.ten === tenHvCanSua) {
                        return true;
                    }
                });
                if (hvCanSua) {
                    // Nhập tuổi
                    let tuoi = prompt('Nhập tuổi học viên:');
                    // Nhập địa chỉ
                    let diaChi = prompt('Nhập địa chỉ học viên:');

                    // map
                    let daCapNhat = danhSachHocVien.map(function (value, index, raw) {
                        if (value.ten === tenHvCanSua) {
                            value.tuoi = tuoi;
                            value.diaChi = diaChi;
                        }
                        return value;
                    });
                    danhSachHocVien = daCapNhat;
                } else {
                    alert('Không có học viên nào với tên đã nhập');
                }
                // Sửa học viên
                break;
            case '5':
                // Xóa học viên
                let tenHvCanXoa = prompt('Nhập tên học viên:');
                // for + slice
                // filter, map, for
                let hvConLai = danhSachHocVien.filter(function (value, index, raw) {
                    if (value.ten !== tenHvCanXoa) {
                        return true;
                    }
                    return false;
                });
                danhSachHocVien = hvConLai;
                break;
        }
    }
} while (input != '6');
