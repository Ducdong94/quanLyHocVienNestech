// B.Các loại DOM:
// 1.DOM document: 
// 2.DOM elements:
// - Truy xuất trực tiếp
let h4 = document.getElementById('heading4');
let headings = document.getElementsByClassName('heading');
let listH3 = document.getElementsByTagName('h3');
let listGetByName = document.getElementsByName('custom');
let querySelector = document.querySelector('h3');
let querySelectorAll = document.querySelectorAll('h3');

console.log(h4);
console.log(headings);
console.log(listH3);
console.log(listGetByName);
console.log(querySelector);
console.log(querySelectorAll);

// - Truy xuất gián tiếp
let box = document.getElementById('box');

// Truy cập đến phần tử cha
console.log(h4.parentElement);
console.log(h4.parentNode);

// Truy cập đến phần tử con
console.log(box.hasChildNodes());
let child;
let childNodes = box.childNodes;
console.log(childNodes);
for (let index = 0; index < childNodes.length; index++) {
    const element = childNodes[index];
    if (element.nodeName === 'H2') {
        child = element;
        break;
    }
}
console.log(child);
console.log(box.firstChild);
console.log(box.lastChild);
// Truy cập đến phần tử anh em (siblings)
console.log(box.firstChild.nextSibling.nextSibling);
console.log(box.lastChild.nextSibling);

// 3.DOM HTML: thay đổi giá trị nội dung và giá trị thuộc tính của các thẻ HTML

// - Thay đổi thuộc tính (attributes)
console.log(h4.attributes);
console.log(h4.getAttribute('class'));
// setTimeout(() => {
//     h4.setAttribute('class', 'custom-heading');
// }, 5000);

// - Thay đổi nội dung text (textContent - innerText)
console.log(h4.innerText);
console.log(h4.textContent);
h4.innerText = "Custom Heading";
h4.textContent = "Custom Heading";

// - Thay đổi nội dung HTML
console.log(box.innerHTML);
console.log(box.outerHTML);
// setTimeout(() => {
//     // box.innerHTML = '<h1>Cleared</h1>';
//     box.outerHTML = '<h1>Cleared</h1>';
// }, 5000);

// So sánh Node item vs Element item (tương đương nhau)
console.log(headings);
console.log(querySelectorAll);
// 4.DOM CSS:
console.clear();
console.log(h4.style);

// setTimeout(() => {
//     h4.style.color = 'red';
//     h4.style.fontSize = '20px';
// }, 5000);

// - Class list
console.log(h4.classList);
h4.classList.add('class-3');
h4.classList.remove('class-1');
console.log(h4.classList.contains('class-2'));
setTimeout(() => {
    h4.classList.toggle('toggle');
}, 1000);

// 5.DOM event:
// h4.onclick = function (event) {
//     console.log('click');
//     this.innerText = new Date();
//     console.log(event);
// }
// h4.onmouseover = function () {
//     console.log('hover');
// }
// h4.onmouseout = function () {
//     console.log('out');
// }

// 6.DOM Listener:
let callBack1 = function (event) {
    event.stopPropagation(); // loại bỏ nổi bọt các sự kiện lên các elm cha
    event.preventDefault() ; // loại bỏ hành vi mặc định của HTML
    console.log('hover1');
}
let callBack2 = function (event) {
    console.log('hover2');
}
h4.addEventListener("mouseover", callBack1);
h4.addEventListener("mouseover", callBack2);

setTimeout(() => {
    console.log('removeEventListener');
    h4.removeEventListener('mouseover', callBack1);
}, 5000);

// 7.DOM Navigation:
// 8.DOM Node, NodeList: