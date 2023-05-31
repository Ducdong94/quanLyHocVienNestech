var button = document.querySelector('button');

button.onclick = function (event) {
    event.preventDefault(); // loại bỏ hành vi mặc định của HTML
    // B1. lấy dữ liệu từ form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('re-password').value;
    var email = document.getElementById('email').value;
    var birthdate = document.getElementById('birthdate').value;
    var gender = document.getElementById('gender').value;
    var elms = document.getElementsByClassName('form-control');
    //check
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;

    // các giá trị tương ứng với false
    // false, NaN, null, '', undefined, 0
    // username = '' ~ false
    // B2. xóa message lỗi cũ
    var listSpan = document.getElementsByTagName('small');
    for (let index = 0; index < listSpan.length; index++) {
        const element = listSpan[index];
        element.innerText = '';
    }

    // B3. Validate các trường dữ liệu
    let countError = 0;
    if (!username) {
        countError++;
        document.getElementById('username-err').innerText = 'Vui lòng nhập tên đăng nhập';
    }

    if (!emailRegex.test(email)) {
        countError++;
        document.getElementById('email-err').innerText = 'Email không đúng định dạng';
    }

    if (!passwordRegex.test(password)) {
        countError++;
        document.getElementById('pwd-err').innerText = 'Mật khẩu bao gồm số chữ và chữ cái viết hoa và không chứa ký tự đặc biệt';
    }

    if (password !== password2) {
        countError++;
        document.getElementById('re-pwd-err').innerText = 'Mật khẩu không khớp, vui lòng nhập lại';
    }

    if (!birthdateRegex.test(birthdate)) {
        countError++;
        document.getElementById('birthday-err').innerText = 'Ngày sinh không hợp lệ';
    }

    // gender
    if (!gender) {
        countError++;
        document.getElementById('gender-err').innerText = 'Vui lòng chọn gới tính';
    }

    var level = document.getElementsByName('level');
    var element; // undefined
    for (let i = 0; i < level.length; i++) {
        if (level[i].checked) {
            element = level[i].value;
        }
    };
    console.log('level: ' + element);

    if (!element) {
        countError++;
        document.getElementById('level-err').innerText = 'Vui lòng chọn level';
    }

    // B4. kiểm tra có lỗi thì return;
    if (countError > 0) {
        return;
    }

    

    // get data
    for (let index = 1; index < elms.length; index++) {
        const element = elms[index];
        console.log(element.id + ': ' + element.value);
    };

    //send data to backend
};
