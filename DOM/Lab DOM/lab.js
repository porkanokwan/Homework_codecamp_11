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
// const li = document.querySelectorAll("li");
// console.log(li);
// for (let i = 0; i < li.length; i++) {
//   console.log(typeof li[i]);
//   alert(li[i].innerHTML);
// }

// Lab Modify 2
// const ul = document.createElement("ul");
// let input = prompt("Enter your list");
// while (input) {
//   ul.insertAdjacentHTML("afterbegin", `<li>${input}</li>`);
//   input = prompt("Enter your list");
// }
// console.log(ul);
// document.body.append(ul);

// เฉลย
// const ul = document.createElement("ul");
// let input = prompt("Enter your list");
// console.log(input);
// while (input !== null && input !== "") {
//   const li = document.createElement("li");
//   li.innerText = input;
//   ul.append(li);
//   input = prompt("Enter your list");
// }
// console.log(ul);
// document.body.append(ul);

// Lab Modify 3
// function clear(elem) {
//   console.log(elem);
//   for (let i of elem) {
//     i.remove();
//   }
// }
// const li = document.querySelectorAll("li");
// console.log(li);
// clear(li); // clears the list

// เฉลย
// const ol = document.getElementById("elem");
// ol.innerHTML = "";

// Lab Modify 4
// const btn = document.querySelector(".btn");
// setTimeout(() => (btn.style.backgroundColor = "red"), 3000);
// setTimeout(() => (btn.style.backgroundColor = ""), 6000);
// setTimeout(() => btn.classList.add("red"), 3000);
// setTimeout(() => btn.classList.remove("red"), 6000);

// เฉลย
// setInterval(() => btn.classList.toggle("red"), 3000);

// Lab event 1
// const button = document.querySelector(".btn");
// button.addEventListener("click", () => alert("1")); // (1) ทำงาน
// button.removeEventListener("click", () => alert("1")); // (2) ไม่ทำงาน
// button.onclick = () => alert(2); // (3) ทำงาน

// Lab event 2
// const form = document.querySelector("form");
// DOM property
// form.onsubmit = () => alert("Form is sumitted");

// การยกเลิกคำสั่ง
// form.onsubmit = null;

// addEventListener
// const handler = () => alert("Form is sumitted");
// form.addEventListener("submit", handler);

// removeEventListener
// form.removeEventListener("submit", handler);

// Lab event 3
// const form = document.getElementById("form");
// form.addEventListener("submit", (e) => e.preventDefault());

// Lab event 4
// const a = document.querySelector("a");
// const redirect = (event) => {
//   const cf = confirm("Leave for http://google.com ?")
//   if (cf) {
//     location.href = "http://google.com";
//   }
//   event.preventDefault();
// };
// a.addEventListener("click", redirect);

// Lab event 5
// const nickName = document.getElementById("nickName");
// const job = document.getElementById("job");
// nickName.addEventListener("click", (e) => {
//   console.log(e.target.name);
// });
// job.addEventListener("click", (e) => {
//   console.log(e.target.name);
// });
// nickName.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });
// job.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// Lab event 6
// const button = document.querySelector("button");
// button.addEventListener("click", (e) => (e.target.style.display = "none"));
// button.addEventListener("click", (e) => e.target.remove());
// button.addEventListener("click", () => (document.body.innerHTML = ""));

// เฉลย
// const btn = document.querySelector("button");
// button.addEventListener("click", () => (this.style.display = "none"));

// Lab event 7
// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// button.addEventListener("click", () => (h1.style.display = "none"));
// button.addEventListener("click", () => h1.remove());

// เฉลย
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   const text = document.querySelector("h1");
//   text.style.display = "none";
// });

// Lab event 8
// const hide = document.getElementById("hide");
// const h1 = document.querySelector("h1");
// hide.onclick = () => {
//   h1.classList.toggle("block");
//   if (h1.className === "") {
//     hide.innerText = "Show";
//   } else {
//     hide.innerText = "Hide";
//   }
// };

// เฉลย
// const btn = document.querySelector("button");
// console.log(btn);
// btn.addEventListener("click", () => {
//   const text = document.querySelector("h1");
// if (text.style.display === "none") {
//   text.style.display = "block";
//   btn.textContent = "Show";
// } else {
//   text.style.display = "none";
//   btn.textContent = "Hide";
// }

//   if (text.classList.contains("hidden")) {
//     btn.textContent = "Hide";
//   } else {
//     btn.textContent = "Show";
//   }
//   text.classList.toggle("hidden");
// });

// Lab event 9
// const input = document.getElementsByName("phoneNumber");
// const button = document.querySelector("button");
// const p = document.querySelector("p");
// let value = "";

// const checkInput = (e, value) => {
//   e.preventDefault();
//   p.className = "error";
//   if (value.trim() === "") {
//     input[0].className = "errorInput";
//     p.innerHTML = "Phone Number is required";
//   } else if (isNaN(value)) {
//     input[0].className = "errorInput";
//     p.innerHTML = "Phone Number is invalid";
//   } else if (value.length !== 10) {
//     input[0].className = "errorInput";
//     p.innerHTML = "Invalid length";
//   } else {
//     input[0].className = "";
//     p.className = "";
//     p.innerHTML = "";
//     alert("Your number is valid");
//   }
// };

// input[0].addEventListener("change", (e) => {
//   value = e.target.value;
//   console.log(value);
// });
// button.addEventListener("click", (e) => checkInput(e, value));

// เฉลย
// const btn = document.querySelector("button");
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const input = document.querySelector("input");
//   let value = input.value;
//   console.log(value);
//   const pTag = document.querySelector("p");

//   if (value === "") {
//     input.classList.add("errorInput");
//     pTag.classList.remove("hidden");
//     pTag.classList.add("error");
//   } else if (
//     isNaN(value.trim()) ||
//     value.startsWith("0x") ||
//     value.startsWith("0b") ||
//     value.startsWith("0o")
//   ) {
//     input.classList.add("errorInput");
//     pTag.classList.add("error");
//     pTag.classList.remove("hidden");
//     pTag.innerHTML = "Phone Number is invalid";
//   } else if (value.length !== 10) {
//     input.classList.add("errorInput");
//     pTag.classList.add("error");
//     pTag.classList.remove("hidden");
//     pTag.innerHTML = "Invalid length";
//   } else {
//     input.classList.remove("errorInput");
//     pTag.classList.add("hidden");
//     alert("Valid Phone Number");
//   }
// });

// Lab event 10
// const districts = {
//   bangkok: ["Bangkoknoi", "Ratchathewi", "Ladprao"],
//   cnx: ["Saraphi", "Mae Rim", " Chiang Dao"],
//   chonburi: ["Sattahip", "Mueang", "Sriracha"],
// };

// const province = document.getElementById("province");
// const district = document.getElementById("district");

// province.addEventListener("change", (e) => {
//   district.innerHTML = '<option value="">select</option>';
//   let nameDistrict = districts[e.target.value] ?? [];
//   console.log(nameDistrict);
//   nameDistrict.forEach((item) => {
//     district.insertAdjacentHTML(
//       "beforeend",
//       `<option value=${item}>${item}</option>`
//     );
//   });
// });

// เฉลย
// const province = document.querySelector("#province");
// province.addEventListener("change", () => {
//   const district = document.querySelector("#district");
//   const provinceSelected = province.value;
//   console.log(provinceSelected);
//   const showDistricts = districts[provinceSelected] || [];
//   let str = '<option value="">select</option>';
//   for (let el of showDistricts) {
//     str += `<option value=${el}>${el}</option>`;
//   }
//   district.innerHTML = str;
// });

// Lab event 11
// const increase = document.getElementById("increase");
// const decrease = document.getElementById("decrease");
// const resetButton = document.getElementById("reset");
// const span = document.querySelector("span");

// console.log(resetButton);

// increase.addEventListener("click", () => {
//   span.innerHTML = +span.innerHTML + 1;
//   console.log(span.innerHTML);
// });

// decrease.addEventListener("click", () => {
//   if (+span.innerHTML !== 0) {
//     span.innerHTML = +span.innerHTML - 1;
//   }
//   console.log(span.innerHTML);
// });

// resetButton.addEventListener("click", () => {
//   span.innerHTML = 0;
// });

// เฉลย
// const btnAdd = document.querySelector(".btn-add");
// const btnSubtract = document.querySelector(".btn-subtract");
// const btnReset = document.querySelector(".btn-reset");
// const count = document.querySelector("span");

// btnAdd.addEventListener("click", function () {
//   count.innerHTML = +count.innerHTML + 1;
// });
// btnSubtract.addEventListener("click", function () {
//   if (+count.innerHTML !== 0) {
//     count.innerHTML = +count.innerHTML - 1;
//   }
// });
// btnReset.addEventListener("click", function () {
//   count.innerHTML = 0;
// });

// Lab event 12
// const addButton = document.getElementById("addTodo");
// const ul = document.getElementById("listTodo");
// let count = 1;

// addButton.addEventListener("click", () => {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = `Task ${count}`;
//   span.style.marginRight = "4px";
//   const editButton = document.createElement("button");
//   editButton.id = "editTodo";
//   editButton.innerText = "edit";
//   editButton.style.margin = "4px";
//   const delButton = document.createElement("button");
//   delButton.id = "delTodo";
//   delButton.innerText = "del";
//   li.append(span);
//   li.append(editButton);
//   li.append(delButton);
//   // ul.insertAdjacentHTML(
//   //   "beforeend",
//   //   `<li>Task ${count} <button id="editTodo">Edit</button> <button id="delTodo">Del</button> </li>`
//   // );
//   editButton.onclick = () => {
//     const input = document.createElement("input");
//     input.value = span.innerText;
//     const button = document.createElement("button");
//     button.innerText = "done";
//     span.replaceWith(input);
//     input.after(button);
//     input.onchange = (e) => {
//       // const text = document.createTextNode(e.target.value);
//       // console.log(text);
//       span.innerText = e.target.value;
//       input.replaceWith(span);
//       button.remove();
//     };
//   };
//   delButton.onclick = () => {
//     // li.remove();
//     li.style.display = "none";
//   };
//   span.onclick = () => {
//     span.classList.toggle("toggleText");
//   };
//   ul.append(li);
//   count += 1;
// });

// เฉลย
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", function () {
  const input = prompt("Enter your task");
  const li = document.createElement("li");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  const span = document.createElement("span");
  span.innerHTML = input;
  btnEdit.innerHTML = "edit";
  btnDel.innerHTML = "del";

  btnDel.addEventListener("click", function () {
    // this จะหมายถึง btnDel ส่วน closest method คือการถอยหลังไปหาตัวที่เรากำหนด อย่างอันนี้ closest("li") จะถอยหลังไปหา li ที่ใกล้กับปุ่ม btnDel ที่สุด
    this.closest("li").remove();
  });

  btnEdit.addEventListener("click", function () {
    const editText = prompt("Enter edit task");
    const currentSpan = this.previousElementSibling;
    currentSpan.innerHTML = editText;
  });

  span.addEventListener("click", function () {
    this.classList.toggle("toggleText");
  });

  li.append(span);
  li.append(btnEdit);
  li.append(btnDel);

  const ul = document.querySelector("ul");
  ul.append(li);
});
