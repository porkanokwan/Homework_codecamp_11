// Lab 1
// const person = {
//   name: "kanokwan",
//   age: 23,
//   gender: "female",
//   address: "bangkok",
//   phoneNumber: "111111111",
// };

// Lab 2
// const user = {
//   name: "John",
//   surname: "Doe",
// };
// console.log(user);
// user.name = "Matt";
// console.log(user);
// delete user.name;
// console.log(user);

// Lab 3
// const obj = {};
// function isEmpObj(obj) {
//   for (let key in obj) {
//     if (key in obj) return false;
//   }
//   return true;
// }
// console.log(isEmpObj(obj));

// Lab 4
// let salary = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;
// for (let name in salary) {
//   total += salary[name];
// }
// console.log(total);

// เฉลย
// const calcSalary = (salary) => {
//   let sum = 0;
//   for (let key in salary) {
//     sum += salary[key];
//   }
//   return sum;
// };
// console.log(calcSalary(salary));

// Lab 5
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// Obj ใน menu จะถูก pass reference มาใส่ใน obj เท่ากับว่า menu กับ obj อ้างอิงไปที่ memory เดียวกัน
// function multiplyNumeric(obj, num) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       //   console.log(obj[key]);
//       obj[key] = obj[key] * num;
//     }
//   }
//   console.log(obj);
//   return obj;
// }
// const result = multiplyNumeric(menu, 2);
// console.log(result)

// ถ้าไม่อยากให้ menu เปลี่ยน
// function multiplyNumeric(obj, num) {
//   const result = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       result[key] = obj[key] * num;
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// Lab 6
// const username = prompt("Enter username");
// const email = prompt("Enter your email");
// const password = prompt("Enter your password");

// const user = {
//     username,
//     email,
//     password
// };

// Lab 7
// let obj = {};
// while (true) {
//   const key = prompt("Put key");
//   if (key === "stop") {
//     break;
//   }
//   const value = prompt("Put value");
//   if (value === "stop") {
//     break;
//   }
//   obj[key] = value;
// }

// console.log(obj);

// Lab 8
// let fruits = {};
// while (true) {
//   const nameFruit = prompt("What is your favor fruits");
//   const fruit = +prompt(`Amount of ${nameFruit}`);
//   if (fruit > 1) {
//     fruits[nameFruit + "s"] = fruit;
//   } else {
//     fruits[nameFruit] = fruit;
//   }
//   if (nameFruit === "stop") break;
// }

// console.log(fruits);

// Lab 9
// const names = prompt("name product");
// const amount = +prompt(`Amount of ${names}`);
// const price = +prompt(`How much of ${names}`);
// const discount = +prompt("discount");

// let product = {
//   names,
//   amount,
//   price,
//   discount,
// };
// if (discount === 0) {
//   delete product.discount;
// }
// console.log(product);
// function calPrice(obj) {
//   if (obj.discount) {
//     return obj.amount * obj.price * (1 - obj.discount / 100);
//   }
//   return obj.amount * obj.price;
// }
// console.log(calPrice(product));

// เฉลย
// let product = {
//   names,
//   amount,
//   price,
// };
// if (discount > 0) {
//   product.discount = discount;
// }
// function calPrice(obj) {
//   return obj.amount * obj.price * (1 - (obj.discount || 0) / 100);
// }

// Lab 10
// const employees = {
//   john: {
//     salary: 1000,
//     address: { district: "Ratchathewi", province: "Bangkok" },
//   },
//   peter: {
//     salary: 1500,
//     address: { district: "Pathumwan", province: "Bangkok" },
//   },
//   mike: {
//     salary: 800,
//     address: { district: "Pakkret", province: "Nonthaburi" },
//   },
//   sarah: {
//     salary: 2200,
//     address: { district: "Sriraja", province: "Chonburi" },
//   },
// };

// const username = prompt("Enter your name");
//   if (employees[username]) {
//     console.log(
//       `Name: ${username}, salary: ${employees[username].salary}, address: ${employees[username].address.district},${employees[username].address.province}`
//     );
//   } else {
//     console.log("Not Found");
//   }

// Lab 11
// const user = {
//   email: "cc@gmail.com",
//   isActive: true,
// };
// user.isActive = false;
// console.log(user); //  { email: "cc@gmail.com", isActive: false };
// user = {};
// console.log(user); // error

// Lab 12
// const product1 = { name: "Coke", price: 18, size: "500mL" };
// const product2 = product1;
// product2.name = "Pepsi";
// product2.price = 19;
// console.log(product1); // { name: "Pepsi", price: 19, size: "500mL" }; เพราะ product1 และ product2 เป็นการ copy by reference จะอ้างอิงไปที่ memory เดียวกัน
// console.log(product2); // { name: "Pepsi", price: 19, size: "500mL" };
// console.log(product1 === product2); // true

// Lab 13
// const user = { name: "Jack", role: "ADMIN" };
// const admin = { name: "Jack", role: "ADMIN" };
// console.log(user === admin); // false เพราะ user กับ admin จะไปสร้าง memory แยกกัน จึงไม่เกี่ยวข้องกัน

// Lab 14
// const notebook = {
//   brand: "ASUS",
//   model: "Vivobook D413IA-EB303TS",
//   processor: "AMD Ryzen 7 4700U 3.6GHz",
//   graphics: "Integrated Graphics : AMD Radeon Graphics",
//   ram: "8GB DDR4 Onboard",
//   storage: "512GB PCIe NVMe M.2 SSD",
// };

// const copyByLoop = {};
// for (let key in notebook) {
//   copyByLoop[key] = notebook[key];
// }
// console.log(copyByLoop);

// const copyByAssign = Object.assign({}, notebook);
// console.log(copyByAssign);

// Lab 15
// const state1 = { username: "john", point: 100, loading: true };
// const copyState1 = Object.assign({}, state1, {
//   point: 75,
//   loading: false,
//   success: true,
// });
// console.log(copyState1);
// console.log(state1);

// Lab 16
// const permission1 = { canView: false, canDelete: false };
// const permission2 = { canUpdate: true, canCreate: true };
// const permission3 = { canCreate: false, canDelete: true };
// const permission4 = { canView: true };

// const permission = Object.assign(
//   {},
//   permission1,
//   permission2,
//   permission3,
//   permission4
// );
// console.log(permission);

// Lab 17
// let user = {
//   name: "John",
//   sayHi: function () {
//     console.log(this.name);
//   },
// };
// user.sayHi(); // John เพราะ this จะหมายถึง Obj ที่เรียกใช้ก็คือ user ทำให้ this.name === user.name เลยได้ John มา

// Lab 18
// var name = "Joe";
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }
// let user = makeUser(); // === window.makeUser() เลยทำให้ this หมายถึง window obj
// console.log(user.ref.name); // Joe เพราะ this จะหมายถึง window obj(Global obj) และการประกาศ var name = 'Joe' (Global variable) เป็นเหมือนการประกาศเพิ่ม property ลงใน window ทำให้การเรียก user.ref.name === window.name

// const obj = {
//   name: "Jack",
//   makeUser: function () {
//     return {
//       name: "John",
//       ref: this,
//     };
//   },
// };

// console.log(obj.makeUser()); // { name: "John", ref: { name: 'Jack', makeUser: function() {} } } เพราะ this ในนี้จะหมายถึง obj ที่เป็นตัวเรียก

// Lab 19
// let calculator = {
//   read() {
//     this.value1 = +prompt("Enter your number1");
//     this.value2 = +prompt("Enter your number2");
//   },
//   sum() {
//     return this.value1 + this.value2;
//   },
//   mul() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// console.log(calculator);

// เฉลย
// let calculator = {
// ใส่ค่าเริ่มต้นไว้เผื่อในกรณีที่ไม่ได้เรียกใช้ function read จะได้มีค่าไปคำนวณใน function อื่น เพราะถ้าไม่ใส่ค่าเริ่มต้นไว้แล้วไม่ได้เรียกใช้ function read ค่าที่เอาไปคำนวณมันจะเป็น undefined ทำให้คำนวณค่าออกมาไม่ได้
//   number1: 0,
//   number2: 0,
//   read() {
//     this.number1 = +prompt("Enter your number1");
//     this.number2 = +prompt("Enter your number2");
//   },
//   sum() {
//     return this.number1 + this.number2;
//   },
//   mul() {
//     return this.number1 * this.number2;
//   },
// };

// Lab 20
// function Cal() {
//   this.read = function () {
//     this.value1 = +prompt("Enter your number1");
//     this.value2 = +prompt("Enter your number2");
//   };
//   this.sum = function () {
//     return this.value1 + this.value2;
//   };
//   this.mul = function () {
//     return this.value1 * this.value2;
//   };
// }

// const calculator = new Cal();
// console.log(calculator); // Cal {read: ƒ, sum: ƒ, mul: ƒ}
// calculator.read();
// console.log(calculator); // Cal {value1: 20, value2: 5, read: ƒ, sum: ƒ, mul: ƒ}
// alert(calculator.sum());
// alert(calculator.mul());

// เฉลย
// function Cal() {
//   this.number1 = 0;
//   this.number2 = 0;
//   this.read = function () {
//     this.number1 = +prompt("Enter your number1");
//     this.number2 = +prompt("Enter your number2");
//   };
//   this.sum = function () {
//     return this.number1 + this.number2;
//   };
//   this.mul = function () {
//     return this.number1 * this.number2;
//   };
// }

// Lab 21
// function Accumulator(startingValue) {
//   this.currentValue = +startingValue;
//   this.read = function () {
//     this.currentValue += +prompt("Enter number");
// อีกวิธี
// const num = +prompt("Enter number");
// this.currentValue += num
//   };
//   this.show = function () {
//     alert(this.currentValue);
//   };
// }

// const acc = new Accumulator(100);
// console.log(acc);
// acc.read();
// console.log(acc);
// acc.show();

// Lab 22
const product1 = {
  name: "Water",
  distributor: {
    name: "Giraffe Water Company",
    address: {
      street: "Phetchaburi",
      subdistrict: "Thanonphetchaburi",
      district: "Ratchathewi",
      province: "Bangkok",
    },
  },
};

console.log(product1.distributor.address.province);
const product2 = {};
console.log(product2.distributor?.address?.province);
