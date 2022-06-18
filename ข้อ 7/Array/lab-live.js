// Lab 1
// const nameFriends = ["min", "v", "may", "got", "pee"];

// Lab 2
// const arr = [1, 2, 4];
// const newArr = arr;
// arr[0] = 3;
// console.log(newArr[0]); // 3 เพราะ newArr กับ arr อ้างอิงไปที่ memory เดียวกัน

// Lab 3
// const styles = ["Jazz", "Blues"];
// styles[styles.length] = "Rock-n-Roll";
// styles[1] = "Classic";
// console.log(styles);
// delete styles[0]; // คำสั่งนี้ใช้กับ array แล้วไม่ค่อยมีประโยชน์
// console.log(styles.length); // 3

// Lab 4
// const arr = [];
// let sum = 0;
// while (true) {
//   const input = prompt("Enter number");
//   // console.log(input); // ถ้ากด esc หรือ cancle จะได้ค่า null
//   if (input === null) break;
//   if (!input.trim()) {
//     break;
//   }
//   if (isNaN(input)) break;
//   arr[arr.length] = input;
// }
// // console.log(arr);
// for (let num of arr) {
//   sum += +num;
// }
// console.log(sum);

// เฉลย
// function isNumber(num) {
//   const strInput = "" + num;
//   if (!strInput.trim()) return false;
//   return !isNaN(strInput);
// }

// let input;
// let arr = [];

// do {
//   input = prompt("Enter number");
//   if (isNumber(input)) {
//     arr[arr.length] = input;
//   }
// } while (isNumber(input));

// let sum = 0;
// for (let el of arr) {
//   sum += el;
// }

// console.log(sum);

// Lab 5
// const arr = [2, 3, 5, 7, 11];
// function squareArr(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = Math.pow(arr[i], 2);
//   }
//   for (let el of arr) {
//     newArr[newArr.length] = el ** 2;
//   }
//   return newArr;
// }
// console.log(squareArr(arr));
// console.log(arr);

// Lab 6
const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];
const summary = [];
// for (let i = 0; i < sales.length; i++) {
//   let netPrice = sales[i].price * (1 - sales[i].discount || 1);
//   summary[i] = { netPrice };
// }
for (let item of sales) {
  summary[summary.length] = { netPrice: item.price * (1 - item.discount || 1) };
}
console.log(summary);
