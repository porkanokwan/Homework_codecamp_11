// Lab 1
// const price = 1.375e12;
// const price = 1_375_000_000_000;

// Lab 2
// const n = 255;
// แปลงเป็นฐาน 2
// console.log(n.toString(2));
// แปลงเป็นฐาน 8
// console.log(n.toString(8));
// แปลงเป็นฐาน 16
// console.log(n.toString(16));

// Lab 3
// function calc(price) {
//   return Math.floor(price / 100);
// }

// console.log(calc(1203));

// // Lab 4
// function convert(number) {
//   return number.toFixed(2);
//   เฉลย;
//   return (Math.floor((number * 100).toFixed(2)) / 100).toFixed(2);
// }

// console.log(convert(10));
// console.log(convert(5.1));
// console.log(convert(3.1289));

// Lab 5
// let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i);
// }
// ทำงานไม่ปกติเกิด infinite loop เพราะ การบวกเลขแบบมีทศนิยมมันจะมี precision error ทำให้ไม่ได้เลขจำนวนเต็มแบบเป๊ะๆ

// Lab 6
// function random(min, max) {
//   return Math.trunc(Math.random() * (max - min) + min);
// }

// console.log(random(1, 9));

// Lab 7
// function dice() {
//   return Math.trunc(Math.random() * (6) + 1);
// }

// console.log(dice());

// เฉลย
// function randomDice() {
// 6 * Math.random() => ถ้าปัดขึ้นโอกาสจะได้ 0-1, 1.0000001-2, 2.000001-3 .... 5.00001-5.999999 โอกาสจะได้ฝั่งเลข 5 จะน้อยกว่าเพราะเลขหายไป 0.000001 ตัว
// 6 * Math.random() => ถ้าปัดลงโอกาสจะได้ 0-0.9999999, 1.00001-1.9999999, .... 5.000001-5.99999 จะเท่ากันหมด
//   return Math.floor(Math.random() * 6 + 1);
// }
// console.log(randomDice());

// Lab 8 (2pir)
// function circle(r) {
//   return 2 * Math.PI * r;
// }

// console.log(circle(10));

// Lab 9
// function calc(x, y) {
// x^2 + y^2 = z^2
//   return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
// }

// console.log(calc(3, 4));

// Lab 10
// 180 องศา == 3.14เรเดียน (pi)
// function calc(degree) {
//   return (Math.PI * degree) / 180;
// }
// console.log(calc(300));
