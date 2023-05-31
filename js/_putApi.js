let hvId;
var button1 = document.getElementById("btn1");
button1.onclick = function (event) {
    event.preventDefault();
    var search = document.querySelector("input[type=text]").value;
    var elms = document.getElementsByClassName("form-control");
    var listSpan = document.getElementsByTagName("small");
    // reset
    for (let index = 0; index < listSpan.length; index++) {
        const element = listSpan[index];
        element.innerText = "";
    }
    document.getElementById("search-err").innerText = '';
    document.getElementById("search-err").classList = [];

    for (let index = 1; index < elms.length; index++) {
        const element = elms[index];
        console.log(element.id + ": " + element.value);
    }
    let url = "https://646b70e67d3c1cae4ce3cd73.mockapi.io/api/DSHV";
    function getStudent() {
        let promise = fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
        });

        promise
            .then(async function (SuccessResp) {
                console.log("SuccessResp:", SuccessResp);
                let listStd = await SuccessResp.json();
                console.log("SuccessResp.body:", listStd);
                Timkiem(listStd);
                return SuccessResp;
            })
            .catch(function (ErrorResp) {
                console.log("ErrorResp:", ErrorResp);
            });
    }
    getStudent();
    // Khai báo 1 biến để lưu giá trị id của học viên cần sửa
    function Timkiem(arr) {
        let user = "";
        let phon = "";
        let add = "";
        let timThay = false;
        for (let index = 0; index < arr.length; index++) {
            let hv = arr[index];
            if (!search) {
                document.getElementById("search-err").innerText =
                    "Vui lòng nhập tên học viên";
            } else if (hv.name.includes(search.trim())) {
                user += `${hv.name}`;
                phon += `${hv.phone}`;
                add += `${hv.address}`;
                // Gán giá trị id của học viên tìn được
                hvId = hv.id;
                document.getElementById("search-err").innerText = "Tìm thấy học viên!";
                document.getElementById("search-err").classList.add("text-primary");
                timThay = true;
                break;
            }
        }

        if (!timThay) {
            document.getElementById("search-err").innerText =
                "Không tìm thấy học viên!";
            document.getElementById("search-err").classList.add("text-danger");
        }

        var kq1 = document.getElementById("username");
        kq1.value = user;
        var kq2 = document.getElementById("telephone");
        kq2.value = phon;
        var kq3 = document.getElementById("add");
        kq3.value = add;
    }
};
var button = document.getElementById("btn2");
button.onclick = function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var phone = document.getElementById("telephone").value;
    var add = document.getElementById("add").value;
    var elm = document.getElementsByClassName("form-control");

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
            "Vui lòng nhập tên hv";
    }
    if (!phone) {
        countError++;
        document.getElementById("phone-err").innerText = "Vui lòng nhập sđt";
    } else if (!phoneRegex.test(phone)) {
        countError++;
        document.getElementById("phone-err").innerText = "Nhập sai định dạng";
    }
    if (!add) {
        countError++;
        document.getElementById("add-err").innerText = "Vui lòng nhập địa chỉ";
    }
    if (countError > 0) {
        return;
    }
    for (let index = 1; index < elm.length; index++) {
        const element = elm[index];
        console.log(element.id + ": " + element.value);
    }

    // Thay vì fix cứng số 8 ở đây thì e thay bằng cộng với biến hvId. biến này hiện đang lưu giá trị Id của hv cần sửa
    let url = "https://646b70e67d3c1cae4ce3cd73.mockapi.io/api/DSHV/" + hvId;
    function PutStudent() {
        let promise = fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: username,
                phone: phone,
                address: add,
            }),
        });
        promise
            .then(function (response) {
                if (response.status === 200) {
                    document.getElementById("form-err").innerText =
                        "Sửa học viên thành công!";
                    document.getElementById("form-err").classList.add("text-success");
                    resetForm();

                } else {
                    document.getElementById("form-err").innerText =
                        "Sửa học viên thất bại!";
                    document.getElementById("form-err").classList.add("text-danger");
                }

                return response.json();
            })
            .catch((error) => console.error("Error:", error));
    }
    PutStudent();
    function resetForm() {
        document.getElementById("username").value = "";
        document.getElementById("telephone").value = "";
        document.getElementById("add").value = "";
    }
};
// };