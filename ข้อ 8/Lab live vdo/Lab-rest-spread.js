// Lab 1
function multiply(...num) {
  let mul = 1;
  for (let n of num) {
    mul *= n;
  }
  return mul;
}

console.log(multiply(1, 2, 10, 4, 3));

// Lab 2
function filterOutOdds(...num) {
  return num.filter((item) => item % 2 === 0);
}

console.log(filterOutOdds(1, 2, 4, 7, 9, 5, 6, 10));

// Lab 3
function mergeObjects(...arr) {
  //   console.log(arr); // [{name: "por", age: 20}, {email: ""}]
  let newObj;
  for (let i = 0; i < arr.length; i++) {
    newObj = { ...arr[0], ...arr[i] };
  }
  return newObj;
}

console.log(
  mergeObjects({ name: "por", age: 20 }, { email: "" }, { address: "CNX" })
);

// Lab 4
const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const merge = [...nums1, ...nums2];
// console.log(merge);
// console.log(nums1);
// console.log(nums2);

const newArr = [];
newArr.push(5, ...nums1, -6, -1, ...nums2);
console.log(newArr);
let total = 0;
for (let num of newArr) {
  total += num;
}
console.log(total);

// Lab 5
function spreader(...array1) {
  const array = [...array1];
  array[3] = array[3] ** 2;
  return array;
}

console.log(spreader(1, 2, 4, 5, 9));

// Lab 6
function user(firstName, lastName, ...hobby) {
  return { firstName, lastName, countHobby: hobby.length };
}

console.log(user("Daphne", "Jones", "reading", "watch a movie", "play golf"));

// Lab 7
function doubleAndReturnArgs(arr, ...num) {
  const expo = num.map((item) => item * 2);
  return [...arr, ...expo];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// expexted result: [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4));
// expexted result: [2, 20, 8]

//  Lab 8
function removeRandom(arr) {
  const newArr = [...arr];
  const idx = Math.trunc(Math.random() * (newArr.length - 0));
  console.log(idx);
  newArr.splice(idx, 1);
  return newArr;
}

console.log(removeRandom([1, 2, 5, 8]));

// Lab 9
function cloneArray(arr) {
  const newArr = [...arr];
  return newArr;
}

console.log(cloneArray([1, 2, 5, 8]));

// Lab 10
function cloneObject(obj) {
  const newObj = { ...obj };
  return newObj;
}

console.log(cloneObject({ name: "Por", age: "23", address: "CNX" }));
