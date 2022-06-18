// ใช้ JS ในการจัดการ DOM
// document.body.style.background = 'red'

// setTimeout(() => {
//     document.body.style.background = 'lightblue'
// }, 5000)

// console.log(location.href) // ใช้บอก URL ของหน้าเว็บที่อยู่ในปัจจุบัน http://127.0.0.1:5500/DOM/index.html

// setTimeout(() => {
//     location.href = 'http://youtube.com'; // หลัง 6 วินาที จะไปที่หน้า youtube โดยตรง (การ redirect)
// }, 6000)

const elem = document.body;
elem.childNodes[1].style.fontSize = '60px'; // childNodes[1] == <div> ดังนั้น ให้ใน div ขนาดตัวอักษร = 60px ซึ่ง tag ul กับ li ที่อยู่ภายใต้ div จะ inherited ทุกอย่างใน div ไป ทำให้ ขนาดตัวอักษร = 60px

// การเข้าถึงแบบซ้อนกัน elem.childNodes[1] == div.childNodes[1] == ul.childNodes[1] == li ตัวที่ 1 คือ Home
elem.childNodes[1].childNodes[1].childNodes[1].style.color = 'red';

console.log(elem.childNodes[1].nextSibling) // text node
console.log(elem.childNodes[1].nextSibling.nextSibling) // tag h1

// การเข้าถึง element โดยไม่สนใจ text กับ comment node
const ul = elem.firstElementChild.firstElementChild;
// elem.firstElementChild == ลูกคนแรกของ body คือ div.firstElementChild == ลูกคนแรกของ div คือ ul 
console.log(ul)

// elem.children[0] == div.children[0] == ul เพราะ tag div, h1, script รวมกันเป็น children ซึ่ง tag div อยู่ตำแหน่ง 0 และ tag ul อยู่ตำแหน่งที่ 0 ของ div
console.log(elem.children[0].children[0])

console.log(elem.firstElementChild.nextElementSibling) // <h1>Document Object Model</h1>

// การเข้าถึง Element ที่ง่ายขึ้นแบบไม่ต้อง นั่งไล่ที่ละตัว
// const id = document.getElementById('menu');
// console.log(id)

// const li = document.querySelectorAll('h1'); // เอา tag h1 ทุกอันใน document เก็บใน NodeList(array)
// console.log(li)

// const ele = document.querySelectorAll('#menu'); // เอาทุก tag ที่มี idชื่อ menu เก็บใน NodeList(array)
// console.log(ele)

// const ele1 = document.querySelectorAll('.menu-item'); // เอาทุก tag ที่มี classชื่อ menu-item เก็บใน NodeList(array)
// console.log(ele1)

// const ele2 = document.querySelectorAll('#menu .menu-item'); // เลือก tag ที่มี id ชื่อ menu แล้วภายใน idชื่อ menu มี tag ที่มี classชื่อ menu-item เอามาเก็บใน NodeList(array) ทุกอัน ถ้าทำแบบนี้ tag ที่มี classชื่อ menu-item แต่ไม่อยู่ใน tag id ชื่อ menu จะไม่ถูกนับรวมเข้ามาด้วย
// console.log(ele2)

// const q1 = document.querySelector('#menu'); // ได้ <ul></ul> 
// const qul = q1.querySelectorAll('.menu-item'); // หา classชื่อ menu-item ใน <ul><ul> แล้วเอามาทั้งหมด
// console.log(qul) // จะได้ผลลัพธ์เหมือนใช้ document.querySelectorAll('#menu .menu-item');
// console.log(qul[0]) // <li class="menu-item">Home</li>
// console.log(qul[0].nextElementSibling) // <li class="menu-item">Contact</li>
// console.log(qul[0].nextElementSibling.parentElement) // <ul></ul>


// const q2 = document.querySelector('.menu-item'); // เอา tag ที่มี classชื่อ menu-item ที่เจออันแรกออกมา
// console.log(q2)


// Modify the Document
// const newDiv = document.createElement('div');
// newDiv.className = 'main-content';
// const text = document.createTextNode('Hello JS Create')
// newDiv.innerText =text.textContent; // ใส่ข้อมูล text 'Hello JS Create' ลง div 
// newDiv.innerHTML = '<h2>This is main content</h2>' // ใส่ tag HTML ลง div
// console.log(newDiv)

// การใช้ append, prepend จะเป็นการแทรกซึมเข้าไปใน tag ที่เลือก
// การจะโชว์ Text เข้าไปใน HTML ตรงไหน ขึ้นอยู่กับว่าเราเลือก tag ไหน ใน document ในตัวอย่างนี้อยากแทรกไปตรงกลาง เลยเลือก tag h1
// const h1 = document.querySelector('h1');
// h1.prepend(newDiv)

// การใช้ before วางเหนือ tag ที่เลือก, after วางใต้ tag ที่เลือก, replaceWith แทนที่ tag ที่เลือก
// h1.before(newDiv)
// h1.after(newDiv)
// h1.replaceWith(newDiv)

// insertAdjacentHTML/Text/Element
const p = document.createElement('p');
p.innerHTML = 'Insert Adjacent Element before tag footer';
const footer = document.querySelector('footer');
footer.insertAdjacentElement('beforebegin', p);

const mainHeader = document.getElementById('main-header');
mainHeader.insertAdjacentHTML('beforebegin', '<h1> Insert Adjacent Before begin </h1>');
mainHeader.insertAdjacentHTML('afterend', '<h1> Insert Adjacent After end </h1>');

// การเอา element ออกจาก DOM
// const menu = document.getElementById('menu'); 
// setTimeout( () => menu.remove(), 5000); // การลบ tag ที่มี idชื่อ menu ออกจาก DOM 

// เลือก tag ใหญ๋คือ tag ที่มี idชื่อ main-header แล้วมา set ค่าให้ภายใน tag เป็น '' ก็คือ innerHTML เป็นการอ้างอิงถึงข้อมูลภายใน tag ในนี้ก็คือ tag ul
// setTimeout( () => { mainHeader.innerHTML = '' } , 5000);

// การปรับแต่ง style
mainHeader.style.backgroundColor = 'lightblue';
mainHeader.style.padding = '20px';
// เปลี่ยน display เป็น none === tag นี้จะไม่มีอยู่
// setTimeout( () => { mainHeader.style.display = 'none' } , 5000);

mainHeader.className = 'add-class mt-0 fs-1'
console.log(mainHeader.className); // อ่านค่า class ที่มีอยู่
console.log(mainHeader.classList);

// mainHeader.classList.add('abcd');
// setTimeout( () => {mainHeader.classList.add('hidden')}, 3000);
// setTimeout( () => {mainHeader.classList.toggle('hidden')}, 6000); // มี hidden อยู่แล้วมันจะลบออก แต่ถ้าไม่มีจะเพิ่ม hiddden เข้าไป

//  Event handler: DOM property 
// const btn = document.querySelector('button');
// btn.onclick = function () {
//     console.log(this); // <button name="btn-name">Click to alert</button>
//     console.log(this.name); // btn-name เรียกดูได้เพราะ this = btn ซึ่ง btn เป็นเหมือน obj ที่มี property(attribute ใน html) 
    // alert('Alert from DOM property');
// }

// remove event handler 
// setTimeout( () => {btn.onclick = null}, 7000 );

// const li = document.querySelector('li');
// li.onclick = function() {
//     console.log(this); // <li class="menu-item">Home</li>
//     console.log(this.className); // menu-item
// }

function clickBtn() {
    alert('Event Listener done!');
}

const btn = document.querySelector('button');
btn.addEventListener( 'click', function(event) {
    console.log(this.name); // btn-name เรียกดูได้เพราะ this = btn ซึ่ง btn เป็นเหมือน obj ที่มี property(attribute ใน html) 
    console.log(event);
});
btn.addEventListener('click', clickBtn);
btn.removeEventListener('click', clickBtn); // alert จะไม่ขึ้น

const div = document.getElementById('main-header');
div.addEventListener('click', function(event) {
    console.log(event);
})

const input = document.querySelector('input');
input.addEventListener('change', function(event) {
    console.log(event); // event obj มี target เป็น input ใน target มี value
    console.log(event.target.value); // เรียกเอาค่า value ใน input มาดู ซึ่งสามารถเอาค่าในนี้ไปทำอย่างอื่นต่อได้
})

// const atag = document.querySelector('a');
// atag.addEventListener('click', function(event) {
//     event.preventDefault(); // กันการเกิด default action คือ click ที่ tag a แล้วไม่ไปตาม href 
//     const cf = confirm('Do you want to go?');
//     if(cf) {
//         location.href = 'http://google.com';
//     }
// })

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // ไม่ส่งข้อมูลไปที่ web mี่อยู่ใน action
    console.log('Has been clicked')
})

const h1 = document.getElementById('drag');
h1.addEventListener('drag', function(e) {
    e.preventDefault();
})