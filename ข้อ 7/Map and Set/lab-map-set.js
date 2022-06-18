// Map
// const map = new Map();
// map.set(true, "boolean key"); // [true, "boolean key"]
// map.set("true", "string key"); // ["true", "string key"]
// console.log(map.get(true));
// console.log(map.has(true));
// console.log(map.has("true"));

// console.log(map); // Map(2) {true => 'boolean key', 'true' => 'string key'}
// console.log(map.keys()); // MapIterator {true, 'true'}
// for (let k of map.keys()) {
//   console.log(k); // true, 'true'
// }

// สร้าง Array จาก iterable
// const arrKeys = Array.from(map.keys());
// console.log(arrKeys); // [true, 'true']

// console.log(map.entries());
// for (let e of map.entries()) {
//   console.log(e); // [true, 'boolean key'], ['true', 'string key']
// }

// Set
// const set = new Set();
// set.add(1); // { 1 }
// set.add(2); // { 1, 2 }
// set.add(1); // { 1, 2 }
// console.log(set);
// console.log(set.keys()); // Set {1,2}
// console.log(set.values()); // Set {1,2}
// console.log(set.entries()); // Set {1 => 1, 2 => 2}
// for (let e of set.entries()) {
//   console.log(e); // [1, 1] [2, 2]
// }

// Lab 1
// const map = new Map();
// map.set("name", "Thomas");
// map.set("age", 31);
// console.log(map);
// map.set("name", "Dan"); // แก้ไขค่า
// console.log(map);
// map.delete("age");
// console.log(map);
// console.log(map.has("birthDate"));
// console.log(map.size);
// map.clear();
// console.log(map);

// Lab 2
// const arr = [
//   ["email", "codeisfun@example.com"],
//   ["isActive", true],
// ];
// const map = new Map(arr);
// console.log(map);

// Lab 3
// const set = new Set();
// set.add("Thailand");
// set.add("Japan");
// set.add("Thailand");
// set.add("China");
// set.add("India");
// set.add("Thailand");
// set.add("China");
// set.add("Singapore");
// set.add("Japan");
// console.log(set);
// set.delete("India");
// console.log(set);
// console.log(set.size);
// const arr = Array.from(set);
// console.log(arr);

// Lab 4
const arr = ["Dog", "Giraffe", "Bear"];
const set = new Set(arr);
console.log(set);
console.log(arr);

// Lab 5
const values = [1, 4, 8, 2, 1, 3, 3, 8];

function unique(values) {
  const set = new Set(values);
  const arr = Array.from(set);
  return arr;
}

console.log(unique(values)); // [1, 4, 8, 2, 3]
