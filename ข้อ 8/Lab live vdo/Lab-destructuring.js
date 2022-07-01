// Lab 1
// let [first, second, third] = ["Maya", "Marisa", "Chi"];
// console.log(first); // "Maya"
// console.log(second); // "Marisa"
// console.log(third); // "Chi"

// Lab 2
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
// ];
// console.log(raindrops); // "Raindrops on roses"
// console.log(whiskers); // "whiskers on kittens"
// console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens"]

// Lab 3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [10, 30, 20]

// Lab 4
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

// Lab 5
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// Lab 6
// function getUserData({ firstName, favoriteColor = "green" }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); // Your name is Alejandro and you like purple
// console.log(getUserData({ firstName: "Melissa" })); // Your name is Melissa and you like green
// console.log(getUserData({})); // Your name is undefined and you like green

// Lab 7
// let guest = "Jane";
// let admin = "Pete";
// [guest, admin] = ["Pete", "Jane"];
// console.log(guest);
// console.log(admin);

// Lab 8
// function checkAge({ firstName, lastName, age }) {
//   if (age > 18) return `Hi, ${firstName} ${lastName}`;
//   return "You're not access to sign in";
// }

// console.log(checkAge({ firstName: "Simon", lastName: "Roger", age: 21 }));

// Lab 9
// let user = {
//   name: "John",
//   years: 27,
// };

// let { name, years: age, isAdmin = true } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);

// Lab 10
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalaries(salaries) {
  let topSalaryName;
  let maxSalary = 0;
  for (let [key, value] of Object.entries(salaries)) {
    if (value > maxSalary) {
      maxSalary = value;
      topSalaryName = key;
    }
  }

  // if (!topSalaryName) {
  //   return null;
  // }
  return topSalaryName ?? null;
}

console.log(topSalaries(salaries));

// Lab 11
// let arr = [1, [2, [[[3, 4], 5], 6]]];

// let [a, [b, [[[c, d], e], f]]] = arr;
// console.log(a);

// Lab 12
// const obj = { prop: 5, prop2: 10 };

// let { prop: a, prop2: b } = obj;
// console.log(a);
// console.log(b);

// Lab 13
// let a, b;
// {a, b} = {a: 1, b: 2}
// Error เพราะ ใน {} เป็น block scope พอใส่ a, b เปล่าๆ โดยที่ไม่มี let/const จะ error

// Lab 14
// const [, , , a, b] = [1, 2, 3];

// console.log(a); // undefined
// console.log(b); // undefined

// Lab 15
// const q = { prop: 5, prop2: [10, 100] };

// let {
//   prop: x,
//   prop2: [, y],
// } = q;
// console.log(x);
// console.log(y);

// Lab 16
const q = {
  prop: "Hello",
  prop2: {
    prop2: {
      nested: ["a", "b", "c"],
    },
  },
};

let {
  prop: x,
  prop2: {
    prop2: {
      nested: [, y],
    },
  },
} = q;
console.log(x);
console.log(y);

// Lab 17
const names = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jack", lastName: "Dann" },
  { firstName: "Joe", lastName: "Dunne" },
];

for (let { firstName, lastName } of names) {
  console.log(`${firstName} ${lastName}`);
}

// Lab 18
const users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 },
];

for (let { user, age = "unknown" } of users) {
  console.log(`${user} ${age}`);
}
