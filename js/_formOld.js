//A. Lấy dữ liệu từ form
// Các loại input trong form

let buttons = document.getElementsByTagName('button');
let submitBtn = buttons[0];
submitBtn.onclick = function () {
    // text, password, email, number,...
    let usernameInp = document.querySelector('input[type=text]');
    let passwordInp = document.querySelector('input[type=password]');
    let emailInp = document.querySelector('input[type=email]');

    let username = usernameInp.value;
    let password = passwordInp.value;
    let email = emailInp.value;

    let elms = document.getElementsByClassName('form-control');
    for (let index = 0; index < elms.length; index++) {
        const element = elms[index];
        // console.log(element.value);
    }

    // checkbox, radio
    let genders = document.getElementsByName('gender');
    for (let index = 0; index < genders.length; index++) {
        const element = genders[index];
        if (element.checked) {
            // console.log(element.value);
        }
    }

    let levels = document.getElementsByName('level');
    for (let index = 0; index < levels.length; index++) {
        const element = levels[index];
        if (element.checked) {
            // console.log(element.value);
        }
    }

    // select
    let select = document.querySelector('select');
    console.log(select.value);

    // textarea
    let listTextarea = document.getElementsByTagName('textarea');
    let textarea = listTextarea[0];
    console.log(textarea.value);

    // file
    let inputFile = document.querySelector('input');
    console.log(inputFile.files);

    // date
    let date = document.querySelector('input[type=date]');
    console.log(date.value);
    // month
    let datetime = document.querySelector('input[type=month]');
    console.log(datetime.value);
    // datetime-local
    let datetimeLocal = document.querySelector('input[type=datetime-local]');
    console.log(datetimeLocal.value);
    //B. Validate dữ liệu
    // Validate là kiểm tra dữ liệu nhập vào có đúng yêu cầu của hệ thống hay không
    // username, password, email bắt buộc nhập
    console.clear();

    if (!username) {
        usernameInp.nextElementSibling.textContent = 'Please enter username';
    } else {
        usernameInp.nextElementSibling.textContent = '';
    }

    // password tối thiểu 8 ký tự
    // password chỉ bao gồm chữ hoặc số a-z A-Z 0-9 (regext)
    let errorMessage = passwordInp.nextElementSibling;
    if (!password) {
        errorMessage.innerText = 'Please enter password';
    } else if (password.length < 8) {
        errorMessage.innerText = 'Password must greater or equal 8';
    } else if (!/^[0-9a-zA-Z]*$/.test(password)) {
        errorMessage.innerText = 'Password must in range a-z A-Z 0-9';
    } else {
        errorMessage.innerText = '';
    }

    // Nhập email không đúng định dạng
    if (!email) {
        emailInp.nextElementSibling.innerText = 'Please enter email';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailInp.nextElementSibling.innerText = 'Email format invalid';
    } else {
        emailInp.nextElementSibling.innerText = '';
    }
}


