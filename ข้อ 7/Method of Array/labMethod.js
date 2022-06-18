// Reduce method
// const numbers = [3, 7, 2, 9, 6, 20, 11, 1, 0, 5];

// let acc = 0;
// for (let i = 0; i < numbers.length; i++) {
//   acc += numbers[i];
// }
// console.log(acc);

// const accumulate = numbers.reduce((previousValue, el, index, arr) => {
// การทำงานในรอบแรก previousValue จะมีค่าเท่ากับค่าของ initial value แล้วรอบต่อมาค่าของ previousValue จะถูกส่งมาจาก callback function ของรอบก่อน คือทุกครั้งที่ callback ทำงานเสร็จจะ return element ออกมาซึ่ง element ที่ return ออกมาจะไปเก็บใน previousValue
// return previousValue + el;
// }, 0);

// Iteration 1: reduce((0, 3, 0, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5])) ค่าที่ return = 3 จะไปเป็น previousValue ของ Iteration ถัดไป
// Iteration 2: reduce((3, 7, 1, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5])) ค่าที่ return = 10
// Iteration 3: reduce((10, 2, 2, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5])) ค่าที่ return = 12
// Iteration 4: reduce((12, 9, 3, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5])) ค่าที่ return = 21
// Iteration 5: reduce((21, 6, 4, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5])) ค่าที่ return = 27
// Iteration 6: reduce((27, 20, 5, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5])) ค่าที่ return = 47
// Iteration 10(สุดท้าย): reduce((59, 5, 9, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5])) ค่าที่ return = 64 (ค่าที่ return ในรอบสุดท้ายนี้จะไปเป็นค่า return ของ function reduce แล้วเอาไปเก็บในตัวแปร accumulate)

// console.log(accumulate); // 64

// const alphabets = ["b", "c", "a", "a", "f", "c", "h", "c", "g"];
// const result = [];
// for (let i = 0; i < alphabets.length; i++) {
//   if (!result.includes(alphabets[i])) {
//     result.push(alphabets[i]);
//   }
// }
// const result = alphabets.reduce((previousValue, el, index, arr) => {
//   if (!previousValue.includes(el)) {
//     previousValue.push(el);
//   }
//   return previousValue;
// }, []);

// console.log(result);

// Lab 1
// let fruits = ["Apples", "Pear", "Orange"];
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// console.log(fruits.length); // 4 เพราะ shoppingCart กับ fruits reference ไปที่ memory เดียวกัน

// Lab 2
// let arr = ["a", "b"];
// arr.push(function () {
//   alert(this);
// });
// arr[2](); // alert(a,b,function() {alert(this)}) เพราะ this นี้หมายถึง obj ที่เรียกใช้งาน ก็คือ arr

// Lab 3
// const animal = ["Dog", "Cat", "Rat"];
// animal.push("Fish");
// console.log(animal); // ['Dog', 'Cat', 'Rat', 'Fish']
// animal.unshift("Horse");
// console.log(animal); // ['Horse', 'Dog', 'Cat', 'Rat', 'Fish']
// animal.push("Giraffe", "Snake");
// console.log(animal); // ['Horse', 'Dog', 'Cat', 'Rat', 'Fish', 'Giraffe', 'Snake']
// animal.shift();
// console.log(animal); // ['Dog', 'Cat', 'Rat', 'Fish', 'Giraffe', 'Snake']
// animal.pop();
// console.log(animal); // ['Dog', 'Cat', 'Rat', 'Fish', 'Giraffe']
// animal.shift();
// console.log(animal); // ['Cat', 'Rat', 'Fish', 'Giraffe']

// Lab 4
// function first(arr, n) {
//   if (n === undefined || n === 1) {
//     return arr.shift();
//   }
//   return arr.slice(0, n);
// }

// console.log(first([7, 9, 0, -2])); // 7
// console.log(first([], 3)); // []
// console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]

// Lab 5
// function clone(arr) {
// const newArr = [...arr]
// return newArr
//   const newArr = [];
//   for (let item of arr) {
//     newArr.push(item);
//   }
//   return newArr;
// }

// console.log(clone([1, 2, 3, 4]));

// Lab 6
// const a = [1, 5, 7, 11];
// const b = [2, 3, 6];
// const result = a.concat(b);
// console.log(result);

// Lab 7
// function deleteEl(arr) {
//   arr.splice(0, arr.length);
//   return arr;
// }
// let fish = ["angel", "clown", "mandarin", "sturgeon"];
// console.log(deleteEl(fish));

// Lab 8
// const person = ["John", "Jay", "Jim", "Jame"];
// person.splice(1, 1, "Jack", "Joe");
// console.log(person);

// Lab 9
// const sports = ["football", "volleyball", "tennis", "basketball", "judo"];
// const newSports = sports.slice(1, 4);
// console.log(newSports);

// Lab 10
// const cars = ["volvo", "toyota", "honda", "ford"];
// cars.splice(3, 0, "mazda", "bmw", "nissan");
// console.log(cars);

// Lab 11
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// array.forEach((el) => {
//   sum += el;
// });

// console.log(sum); // 160

// Lab 12
// const names = ["Mike", "Sid", "Jack", "Bill"];
// names.forEach((el, i) => {
//   console.log(`${i + 1}. ${el}`);
// });

// Lab 13
// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// console.log(beasts.indexOf("bison")); // 1
// console.log(beasts.indexOf("bison", 2)); // 4
// console.log(beasts.indexOf("giraffe")); // -1

// Lab 14
// const alphabets = ["a", "b", "a", "c", "a", "d"];
// let result = [];
// for (let i = 0; i < alphabets.length; i++) {
//   const idx = alphabets.indexOf("a", i);
//   if (
//     !result.includes(alphabets.indexOf("a", i)) &&
//     alphabets.indexOf("a", i) !== -1
//   ) {
//     result.push(idx);
//   }
// }
// const idx1 = alphabets.indexOf("a");
// const idx2 = alphabets.indexOf("a", 1);
// const idx3 = alphabets.indexOf("a", 3);
// const result = [].concat(idx1, idx2, idx3);
// console.log(result);

// Lab 15
// console.log([1, 2, 3].includes(2)); // true
// console.log([1, 2, 3].includes(4)); // false
// console.log([1, 2, 3].includes(3, 3)); // false
// console.log([1, 2, 3].includes(3, -1)); // true
// console.log([1, 2, NaN].includes(NaN)); // true
// console.log(["1", "2", "3"].includes(3)); // false เพราะ data type ไม่ตรง

// Lab 16
// const nums = [7, 9, -5, -1, 0, 3];
// const min = nums.find((el) => el < 0);
// console.log(min);

// Lab 17
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// const el = inventory.find((el) => el.name === "cherries");
// console.log(el);

// Lab 18
// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// const idx = tasks.findIndex((el) => el.id === 2);
// console.log(idx);

// Lab 19
// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// function updateTask(id, newName) {
//   const el = tasks.find((el) => el.id === id);
//   if(el){
//     el.name = newName;
//   }
//   return tasks;
// }

// console.log(updateTask(2, "Travelling"));

// Lab 20
// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// function deleteTask(id) {
//   const idx = tasks.findIndex((el) => el.id === id);
//   if (idx !== -1) {
//     tasks.splice(idx, 1);
//   }
//   return tasks;
// }

// console.log(deleteTask(1));

// Lab 21
// const array = [9, 17, 23, 5];
// const filterd = array.filter((item) => item > 10);
// console.log(filterd);

// const array = [1, 2, 3, 4];
// const filterd = array.filter((item) => item % 2 === 1);
// console.log(filterd);

// const array = [1, "1", 2, {}];
// const filterd = array.filter((item) => typeof item === "number");
// console.log(filterd);

// const array = ["apple", "banana", "orange", "pineapple", "watermeon"];
// const filterd = array.filter((item) => item.length > 6);
// console.log(filterd);

// const array = [1, -3, 2, 8, -4, 5];
// const filterd = array.filter((item) => item > 0);
// console.log(filterd);

// const array = [1, 3, 4, 5, 6, 7, 8];
// const filterd = array.filter((item) => item % 3 === 0);
// console.log(filterd);

// const array = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
// const filterd = array.filter((item) => item.startsWith("E"));
// console.log(filterd);

// const array = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
// const filterd = array.filter((item) => item === item.toLocaleUpperCase());
// console.log(filterd);

// const array = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
// const filterd = array.filter((item) =>
//   item.toLocaleLowerCase().includes("buri")
// );
// console.log(filterd);

// const array = [
//   { name: "Ben", age: 14 },
//   { name: "Phil", age: 18 },
//   { name: "John", age: 32 },
//   { name: "Ann", age: 16 },
//   { name: "Paul", age: 24 },
// ];
// const filterd = array.filter((item) => item.age > 18);
// console.log(filterd);

// const array = [
//   { id: 1, name: "Pepsi" },
//   { id: 2, name: "Mirinda" },
//   { id: 3, name: "Coke" },
//   { id: 4, name: "Fanta" },
//   { id: 5, name: "Sprite" },
// ];
// const filterd = array.filter((item) => item.id !== 4);
// console.log(filterd);

// const array = [
//   { name: "John", birth: "2001-07-31" },
//   { name: "Jack", birth: "1990-06-24" },
//   { name: "Jim", birth: "1984-12-13" },
//   { name: "Jeff", birth: "1996-02-05" },
//   { name: "Joe", birth: "2002-06-13" },
// ];
// const filterd = array.filter(
//   (item) => new Date(item.birth).getMonth() + 1 === 6
// );
// console.log(filterd);

// Lab 22
// function filterRange(arr, a, b) {
//   const filterd = arr.filter((item) => item > a && item < b);
//   return filterd;
// }

// console.log(filterRange([1, 3, 5, 4, 7, 9, 2], 1, 5)); // [3, 4, 2]

// Lab 23
// const array = [1, 2, 30, 400];
// const map = array.map((item) => item * 2);
// console.log(map);

// const array = [1, 2, 3, 4];
// const map = array.map((item) => item + "");
// console.log(map);

// const array = [1, "1", 2, {}];
// const map = array.map((item) => typeof item);
// console.log(map);
// console.log(array);

// const array = ["apple", "banana", "orange"];
// const map = array.map((item) => item.toUpperCase());
// console.log(map);

// const array = [1, 3, 4, 5, 6, 7, 8];
// const map = array.map((item) => {
// if (item % 2 === 0) {
//   return "even";
// }
// return "odd";
//   return item % 2 === 0 ? "even" : "odd";
// });
// console.log(map);

// const array = [1, -3, 2, 8, -4, 5];
// const map = array.map((item) => Math.abs(item));
// console.log(map);

// const array = [100, 200.25, 300.84, 400.3];
// const map = array.map((item) => String(item.toFixed(2)));
// console.log(map);

// const array = [0, 5, 10, 7, 6, 5, 0];
// const map = array.map((item) => {
//   let month = new Date(2020, item);
//   console.log(month.toDateString());
//   console.log(typeof month.toDateString());
//   return month.toDateString().slice(4, 8);
// });
// console.log(map);

// เฉลย
// const MONTH = ['Jan', 'Feb', "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// const map = array.map((item) => {
//   return MONTH[item]
// })

// const array = [1, 16, 81, 256, 625, 1296];
// const map = array.map((item) => Math.sqrt(Math.sqrt(item)));
// console.log(map);

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// const map = array.map((item) => item.name);
// console.log(map);

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// const map = array.map((item) => item.age);
// console.log(map);

// const array = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ];
// const map = array.map((item) => item.name + " " + item.surname);
// console.log(map);

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ];
// const map = array.map((item) => {
//   const dateNow = new Date().getFullYear();
//   let year = new Date(item.birth).getFullYear();
//   let age = dateNow - year;
//   return { name: item.name, birth: item.birth, age };
// });
// console.log(map);

// เฉลย
// const result = array.map((item) => {
// return {
//   name: item.name,
//   birth: item.birth,
//   age: 2022 - item.birth.slice(0, 4),
// };
//   return {
//     ...item,
//     age: 2022 - item.birth.slice(0, 4),
//   };
// });
// console.log(result);

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
// ];
// const map = array.map((item) => {
//   let date = new Date(item.birth);
//   console.log(date);
//   let month = date.toDateString().toLocaleLowerCase();
//   return `<tr><td>${item.name}</td><td>${date.getDate()} ${month.slice(
//     4,
//     8
//   )}${date.getFullYear()} </td></tr>`;
// });
// console.log(map);

// เฉลย
// const MONTH = ['Jan', 'Feb', "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// function formatDate(date) {
//   return date.slice(8, 10) + ' ' + MONTH[+date.slice(5, 7) - 1].toLowerCase() + ' ' + date.slice(0, 4)
// }

// const map = array.map((item) => {
//   return `<tr><td>${item.name}</td><td>${formatDate(item.birth)}</td></tr>`;
// })

// Lab 24
// function camelCase(str) {
//   const arr = str.split("-");
// console.log(arr);
// let word = arr[0];
// let word;
// for (let i = 1; i < arr.length; i++) {
// arr[1][0].toUpperCase() + arr[1].slice(1);
// word += arr[i][0].toUpperCase() + arr[i].slice(1);

//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     word = arr.join("");
//   }
//   return word;
// }

// console.log(camelCase("background-color-red"));

// เฉลย
// function firstUc(str) {
//   return str.slice(0, 1).toUpperCase() + str.slice(1);
// }

// function convertToCamelCase(dashSeperate) {
//   return dashSeperate
//     .split("-")
//     .map((item, index) => {
//       return index ? firstUc(item) : item;
//     })
//     .join("");
// }

// Lab 25
// const arr = [11, 17, 23, 13, 7, 19];
// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr);

// Lab 26
// const arr = [-3, 2, 0, -7, 4, 6];
// arr.sort((a, b) => {
//   return a ** 2 - b ** 2;
// });
// console.log(arr);

// Lab 27
// const arr = [
//   { name: "John", age: 25 },
//   { name: "Leon", age: 26 },
//   { name: "Mick", age: 29 },
//   { name: "Pete", age: 30 },
//   { name: "Mary", age: 28 },
// ];
// arr.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(arr);

// Lab 28
// let arr = ["React", "Vue", "Angular"];

// function copySorted(arr) {
//   return arr.slice().sort();
//   return [...arr].sort();
// }

// let sorted = copySorted(arr);
// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

// Lab 29
// const nums = [-3, 2, 11, -7, 4, 6];
// const sum = nums.reduce((prev, el, idx, arr) => {
//   return prev * el;
// }, 1);
// console.log(sum);

// Lab 30
// const scores = [
//   { score: 90, subject: "HTML", weight: 0.2 },
//   { score: 95, subject: "CSS", weight: 0.3 },
//   { score: 85, subject: "JavaScript", weight: 0.5 },
// ];
// const sum = scores.reduce((prev, el, idx, arr) => {
//   return prev + el.score * el.weight;
// }, 0);
// console.log(sum);

// Lab 31
// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// const maxAndMin = arr.reduce((prev, el) => {
//   let max = Math.max(arr[0], el);
//   let min = Math.min(arr[0], el);
//   prev.max = max;
//   prev.min = min;
//   return prev;
// }, {});
// console.log(maxAndMin);

// เฉลย
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(max);
// console.log(min);

// const initialValue = { max: arr[0], min: arr[0] };
// const { max, min } = arr.reduce((acc, el) => {
//   if (acc.max < el) {
//     acc.max = el;
//   }
//   if (acc.min > el) {
//     acc.min = el;
//   }
//   return acc;
// }, initialValue);
// console.log(max);
// console.log(min);

// Lab 32
// let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// const obj = {};
// for (let n of names) {
//   if (n in obj) {
//     obj[n] += 1;
//   } else {
//     obj[n] = 1;
//   }
// }
// console.log(obj);

// const result = names.reduce((acc, el) => {
//   if (acc[el]) {
//     acc[el] += 1;
//   } else {
//     acc[el] = 1;
//   }
//   return acc;
// }, {});
// console.log(result);

// เฉลย
// let result = {};
// for (let i = 0; i < names.length; i++) {
//   if (result[names[i]]) {
//     result[names[i]] += 1;
//   } else {
//     result[names[i]] = 1;
//   }
// }
// console.log(result);

// Lab 33
// let str = "I live in Thailand";
// const obj = {};
// for (let i of str.replaceAll(" ", "")) {
//   let word = i.toLowerCase();
//   console.log(word);
//   if (obj[word]) {
//     obj[word] += 1;
//   } else {
//     obj[word] = 1;
//   }
// }
// console.log(obj);

// const splited = str.toLowerCase().split("");
// const result = splited.reduce((acc, el) => {
//   if (el !== " ") {
//     if (acc[el]) {
//       acc[el] += 1;
//     } else {
//       acc[el] = 1;
//     }
//   }
//   return acc;
// }, {});
// console.log(result);

// เฉลย
// const splited = str.toLowerCase().split("");
// const result = {};
// for (let i = 0; i < splited.length; i++) {
//   if (splited[i] !== " ") {
//     if (result[splited[i]]) {
//       result[splited[i]] += 1;
//     } else {
//       result[splited[i]] = 1;
//     }
//   }
// }
// console.log(result);

// Lab 34
// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const result = flattened[0].concat(flattened[1], flattened[2]);
// console.log(result);
// console.log(flattened);

// เฉลย
// const result = [];
// for (let i = 0; i < flattened.length; i++) {
//   result.push(...flattened[i]);
// }
// console.log(result);

// const result = flattened.reduce((acc, el) => {
// return [...acc, ...el];
//   acc.push(...el);
//   return acc;
// }, []);

// Lab 35
// let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// const unique = [];
// for (let i of alphabets) {
//   if (!unique.includes(i)) {
//     unique.push(i);
//   }
// console.log(unique);
// }
// console.log(unique);

// const unique = alphabets.reduce((acc, el) => {
//   if (!acc.includes(el)) {
//     acc.push(el);
//   }
//   return acc;
// }, []);

// เฉลย
// console.log(Array.from(new Set(alphabets)));

// Lab 36
// const products = [
//   { id: 1, name: "Crystal" },
//   { id: 4, name: "Namthip" },
//   { id: 5, name: "Nestle" },
// ];
// const obj = {};
// products.forEach((item, index) => {
//   obj[item.id] = { name: item.name };
// });
// console.log(obj);

// const result = products.reduce((acc, el) => {
//   acc[el.id] = { name: el.name };
//   return acc;
// }, {});
// console.log(result);

// เฉลย
// const result = products.reduce((acc, { id, ...rest }) => {
// acc[id] = rest ;
// return acc;
//   return { ...acc, [id]: rest };
// }, {});
// console.log(result);

// Lab 37
// let john = { name: "John", age: 27 };
// let jo = { name: "Jo", age: 21 };
// let jin = { name: "Jin", age: 25 };
// let mary = {};
// let arr = [john, jo, jin];

// function getAverageAge(arr) {
//   let avg = 0;
//   arr.forEach((item) => {
//     if (item.age) {
//       avg += item.age;
//     } else {
//       const idx = arr.indexOf(item);
//       arr.splice(idx, 1);
//     }
//   });
//   return (avg / arr.length).toFixed(2);
// }

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

// เฉลย
// function getAverageAge(arr) {
//   const totalAge = arr.reduce((acc, el) => acc + el.age, 0);
//   const avg = totalAge / arr.length;
//   return avg;
// }

// Lab 38
// const persons = [
//   { name: "John", sex: "M" },
//   { name: "Jody", sex: "M" },
//   { name: "Susan", sex: "F" },
//   { name: "Kate", sex: "F" },
//   { name: "Sid", sex: "M" },
// ];
// function groupGender(arr) {
//   const obj = {};
//   for (let item of arr) {
// if (!obj[item.sex]) {
//   obj[item.sex] = [];
// }
// for (let i in obj) {
//   if (item.sex === i) {
//     obj[i].push(item.name);
//   }
// }

// เฉลย
// if (obj[item.sex]) {
//   obj[item.sex] = [...obj[item.sex], item.name];
// } else {
//   obj[item.sex] = [item.name];
// }
//   }
//   return obj;
// }
// console.log(groupGender(persons));

// const result = persons.reduce((acc, el) => {
// if (el.sex) {
//   acc[el.sex] = [...acc[el.sex], el.name];
// } else {
//   acc[el.sex] = [el.name];
// }
// return acc;
//   return {
//     ...acc,
//     [el.sex]: acc[el.sex] ? [...acc[el.sex], el.name] : [el.name],
//   };
// }, {});
// console.log(result);

// Lab 39
// let str = "31 45 12 67 34 86 23 37 19 41";
// const arr = str.split(" ");
// console.log(arr);
// const filterd = arr.filter((item) => item < 40);

// function sum(arr) {
//   const result = arr.reduce((prev, item) => {
//     return prev + +item;
//   }, 0);
//   return result;
// }

// console.log(sum(filterd));

// เฉลย
// const arr = str
//   .split(" ")
//   .filter((el) => el < 40)
//   .reduce((acc, el) => {
//     return acc + +el;
//   }, 0);

// console.log(arr);

// Lab 40
function isArray(input) {
  return Array.isArray(input);
}

console.log(isArray([]));
