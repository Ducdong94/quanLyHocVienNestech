var button = document.querySelector("button");
button.onclick = function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var telephone = document.getElementById("telephone").value;
    var add = document.getElementById("add").value;
    var elms = document.getElementsByClassName("form-control");

    let phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

    var listSpan = document.getElementsByTagName("small");
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
        document.getElementById("telephone-err").innerText = "Vui lòng nhập số điện thoại";
    } else if (!phoneRegex.test(telephone)) {
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
    //1. tổng hợp dữ liệu trên form dạng object
    //2.gọi api với method post để gửi json đi
    //3. thông báo thành công hoặc thất bại
    let obj = {
        name: username,
        age: telephone,
        address: add
    };

    let jsonData = JSON.stringify(obj);



    let url = 'https://64648c59127ad0b8f8a16c75.mockapi.io/api/v1/students';
    function postStudent() {
        let promise = fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: jsonData,
            // body: JSON.stringify({
            //     name: username,
            //     phone: telephone,
            //     address: add,
            // })
        });

        promise
            .then(function (response) {
                if (response.status === 201) {
                    // thông báo tạo thành công
                    document.getElementById('form-err').innerText = 'Thên học viên thành công';
                    document.getElementById('form-err').classList.add('text-success');
                    // reset dữ liệu đã nhập trên form
                    resetForm();
                } else {
                    document.getElementById('form-err').innerText = 'Thên học viên thất bại';
                    document.getElementById('form-err').classList.add('text-danger');
                }
            }).catch((error) => {
                // không gọi được api
                // api trả mã lỗi khác 2xx
                document.getElementById('form-err').innerText = 'Thên học viên thất bại';
                document.getElementById('form-err').classList.add('text-danger');
            });
    }
    postStudent();


};

function resetForm() {
    document.getElementById("username").value = '';
    document.getElementById("telephone").value = '';
    document.getElementById("add").value = '';

}