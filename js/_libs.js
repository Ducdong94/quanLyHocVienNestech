// Jquery
// Thay thế cho DOM elements
// $('css_selector')
// let inp1 = jQuery('#username');
// let inp2 = $('#username');
const $ = document.getElementById.bind(document);
console.log();
$('editor').innerText = 'otoke';

// // function
// console.log(typeof jQuery);
// console.log(typeof $);
// // lấy dữ liệu từ form
// let val = inp2.val(); // .value
// // Thay đổi nội dung
// $('#label').text('Đã thay đổi'); // .innerText
// $('#label').html('Đã thay đổi'); // .innerHTML
// // event
// // addEventListener
// $('button').on('click', function (event) {
//     alert();
// });

// // ajax ~ fetch
// $.ajax({
//     url: "test.html",
//     context: document.body
// }).done(function () {
//     $(this).addClass("done");
// }).fail(function () {
//     alert("error");
// }).always(function () {
//     alert("complete");
// });

// Chart (Biểu đồ)
// Echart.js 

// gọi api để lấy dữ liệu

let label = ['Module 1', 'Module 2', 'Module 3', 'Moduke 4']
let data = [120, 200, 150, 80];

var chartDom = document.getElementById('echart');
var myChart = echarts.init(chartDom);
var option;

option = {
    xAxis: {
        type: 'category',
        data: label
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: data,
            type: 'line',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
};

option && myChart.setOption(option);
// Map
// /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.555144948323!2d105.79944381264039!3d21.010462066185486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad6e471e39cd%3A0xdd8d24faae61c66f!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggTmVzdGVjaA!5e0!3m2!1svi!2s!4v1685370588318!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

// Text editor
// CkEditor5

// Youtube
// Chia sẻ >> Embed >> Lấy link iframe

// Tw, FB
// https://developers.facebook.com/docs/plugins/like-button