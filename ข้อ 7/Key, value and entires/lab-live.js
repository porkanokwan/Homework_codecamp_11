// Object
let obj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const key = Object.keys(obj);
console.log(key); //  ['firstName', 'lastName', 'age']
const values = Object.values(obj);
console.log(values); // ['John', 'Doe', 30]
const entries = Object.entries(obj);
console.log(entries); // [ ['firstName', 'John'], ['lastName', 'Doe'], ['age', 30] ]

// Lab 1
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Object.keys
let sum = 0;
for (let i of Object.keys(salaries)) {
  sum += salaries[i];
}
console.log(sum);
//  Object.values
let sumValue = 0;
for (let value of Object.values(salaries)) {
  sumValue += value;
}
console.log(sumValue);
// Object.entries
let sumEn = 0;
for (let entries of Object.entries(salaries)) {
  sumEn += entries[1];
}
console.log(sumEn);

// Lab 2
function checkEmptyObj(obj) {
  //   const emp = Object.entries(obj);
  //   console.log(emp[0]);
  //   if (emp[0] === undefined && emp[1] === undefined) return true;
  //   return false;
  return Object.keys(obj).length === 0;
}
console.log(checkEmptyObj({}));
