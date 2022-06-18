// Lab DOM 1
// console.log(document.body.children[0]);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].firstElementChild);
// console.log(document.body.children[1].lastElementChild);

// Lab DOM 2
// const selector =document.querySelector('h2');
// console.log(selector)
// const selectorAll =document.querySelectorAll('.title-1');
// console.log(selectorAll)
// const getClass =document.getElementsByClassName('title-1');
// console.log(getClass)
// const getTag =document.getElementsByTagName('h2');
// console.log(getTag)

// Lab DOM 3
// const li = document.querySelector('ul li:last-child');
// console.log(li)
// const li1 = document.querySelectorAll('[id = "3"]');
// console.log(li1)
// const li2 = document.getElementById('3');
// console.log(li2)
// const li3 = document.getElementsByTagName('li')[1];
// console.log(li3)

// Lab DOM 4
// const li = document.querySelector('[id = "2"]'); // ใน HTML ห้ามใช้เลขจำนวนเต็มมาเป็นค่าใน CSS selector
// const li1 = document.querySelectorAll('[id = "2"]');
// console.log(li1);
// const li2 = document.getElementsByClassName('active');
// console.log(li2);
// const li3 = document.getElementById('2');
// console.log(li3);
// const li4 = document.getElementsByTagName('li');
// console.log(li4[1]);

// Lab Modify 1
const li = document.querySelectorAll('li');
console.log(li)
for (let i = 0; i < li.length; i++) {
    console.log(typeof li[i])
    alert(li[i].innerHTML);
}