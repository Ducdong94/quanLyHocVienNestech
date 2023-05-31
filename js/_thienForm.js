// 2
var button = document.querySelector("button");
button.onclick = function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var telephone = document.getElementById("telephone").value;
  var add = document.getElementById("add").value;
  var elms = document.getElementsByClassName("form-control");
  var listSpan = document.getElementsByTagName("small");

  let phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  for (let index = 0; index < listSpan.length; index++) {
    const element = listSpan[index];
    element.innerText = "";
  }
  let countError = 0;
  if (!username) {
    countError++;
    document.getElementById("username-err").innerText =
      "Vui lòng nhập tên học viên";
  }
  if (!telephone) {
    countError++;
    document.getElementById("telephone-err").innerText = "Vui lòng nhập sđt";
  }
  if (!phoneRegex.test(telephone)) {
    countError++;
    document.getElementById("telephone-err").innerText = "Số điện thoại không đúng định dạng";
  }
  if (!add) {
    countError++;
    document.getElementById("add-err").innerText = "Vui lòng nhập địa chỉ";
  }
  if (countError > 0) {
    return;
  }
  for (let index = 1; index < elms.length; index++) {
    const element = elms[index];
    console.log(element.id + ": " + element.value);
  }

  // https://64648c59127ad0b8f8a16c75.mockapi.io/api/v1/students
  //1. tổng hợp dữ liệu trên form thành dạng object

  //2. encode object => json

  //3. gọi api với method POST để gửi json đi

  //4. thông báo tạo thành công hoặc thất bại

};