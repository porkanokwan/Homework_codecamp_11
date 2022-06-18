// console.log('Hello node JS');

// Error handling
// try {
//     const a = 1;
//     a = 20;
//     console.log('Finish try block');
// } catch(err) {
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }

// const a = 1;
// a = 20;

// // การสร้าง Error
// const error = new Error('Custom error');
// console.log(error);
// console.log(error.name);
// console.log(error.message);

// Lab error handling
// let user = {
//     username: 'john',
//     password: '1234',
//     birthDate: '18/71/2000'
// };
// try{
//     // if(user.password.length < 6) {
//     //     throw new Error('Your password must be greater than 6 charactors')
//     // }

//     let date = new Date(user.birthDate);
//     console.log(date)
//     // โดยปกติถ้า format date ถูกจะแปลงเป็นตัวเลขได้
//     // แต่ถ้า format ของ date ไม่ถูกต้องมันจะไม่สามารถ convert date เป็นตัวเลขได้ เพราะมันเป็น Invalid Date (ที่ไม่ใช่ String) ทำให้ isNaN(date) === true
//     if(isNaN(date)) {
//         throw new Error('your birth date is incorrect')
//     }
// } catch(err) {
//     console.log(err)
// }

// JSON
// const student = {
//     name: 'John',
//     age: 27,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null,
//     sayHi: function() {
//         console.log('Hi');
//     },
//     address: undefined
// };

// const str = JSON.stringify(student);
// // ตัด key กับ value ที่ใช้ไม่ได้ออก คือ sayHi: function() {} กับ address: undefined เพราะ JSON ไม่รู้จัก function กับ undefined
// console.log(str)
// console.log(typeof str)

// console.log( JSON.stringify([1,2,3])) // string [1, 2, 3]

// const obj = JSON.parse(str);
// console.log(obj); // object ของ str

// // Lab JSON
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     wife: undefined,
//     getFullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const string = JSON.stringify(person);
// console.log(string);
// const object = JSON.parse(string);
// console.log(object)

// Callback
// let i = 1;
// const intervalId = setInterval(() => console.log(i++), 2000);
// // ใช้ clearInterval() ยกเลิกการทำงานของ setIneterval() ได้
// setTimeout( () => clearInterval(intervalId), 20000);

// import แบบ common js
// const fs = require('fs');
// fs.readFile('user.json', 'utf-8', (err, data) => {
//     // if(err) console.log(err);
//     // console.log(data); // type เป็น JSON string
//     console.log(JSON.parse(data).users);
//     fs.readFile('test.json', 'utf-8', (err1, data1) => {
//         console.log(data)
//         console.log(data1)
//         // การซ้อน callback แบบนี้ไปเรื่อยๆ เรียกว่า Callback Hell ก็คือต้องรอให้ อ่านไฟล์ user.json เสร็จ และ log JSON.parse(data).users เสร็จก่อน ถึงจะอ่านไฟล์ test.json ต่อได้ พออ่านไฟล์ test.json เสร็จ รอ log ให้เสร็จ ถึงจะมาอ่านไฟล์ someFile ได้
//         fs.readFile('somefile', 'utf-8', (err2, data2) => {
//             console.log(data);
//             console.log(data1);
//             console.log(data2);
//         })
//     })
// })
// console.log('Test async'); // log ก่อน readFlie เพราะ log test async เสร็จก่อนเลยขึ้นก่อน

// let sync = fs.readFileSync('test.json', 'utf-8'); // เป็น sync อยู่แล้วไม่ต้องใช้ callback
// console.log(sync); // รออ่านไฟล์เสร็จก่อน ค่อย log
// console.log('Test sync'); // รอให้ log sync เสร็จก่อน ค่อย log Test sync

// Lab callback 1
// setTimeout( () => {
//     console.log('A')
//     setTimeout( () => {
//         console.log('B')
//         setTimeout( () => {
//             console.log('C')
//             setTimeout( () => {
//                 console.log('D')
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);

// Lab callback 2
// fs.readFile('user.json', 'utf-8', (err, data) => {
//     if(err) console.log(err);
//     console.log(data);
// })

// การเขียน/สร้าง Promise (เมื่อสร้างเสร็จ promise obj จะเป็น async ทันที)
// const promise = new Promise( (resolve, reject) => {
//     // อันนี้ยังไม่มี error เกิดขึ้น เจอ resolve ก่อน จะส่ง resolve แล้วจะไม่สนใจ reject แต่ถ้ามี error เมื่อไหร่มันจะส่ง reject ทันที
//     resolve('Done');
//     reject(new Error('Promise error')); // reject จะส่งแบบ Error obj
// })

// ทั้งหมดเป็นการทำงานแบบ async ทั้งหมด
// const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => resolve('done'), 5000); // ครบ 5 วินาที จะเปลี่ยน state เป็น fullfilled เพราะส่ง resolve และมี result เป็น done
// });
// console.log(promise); // ขึ้น Promise { <pending> } (ค.หมายคือ Promise obj มี state เป็น pending) ก่อน เพราะ เสร็จก่อน
// setTimeout( () => console.log(promise), 7000); // ครบ 7 วินาที ขึ้น Promise { 'done' } (ค.หมายคือ Promise obj มี result เป็น done)

// const random = Math.floor(Math.random() * 10)
// console.log(random);
// const promise_num = new Promise( (resolve, reject) => {
//     if(random % 2 === 0) {
//         // setTimeout( () => resolve('Even number'), 5000);
//         setTimeout( () => resolve(random), 5000);
//     }else {
//         setTimeout( () => reject('Odd number'), 5000);
//     }
// });
// console.log(promise_num); // ขึ้น Promise { <pending> } (ค.หมายคือ Promise obj มี state เป็น pending) ก่อน เพราะ เสร็จก่อน
// setTimeout( () => console.log(promise_num), 7000); ใช้แล้ว Error เป็นเพราะ Node ver ที่โหลดมาต้องใช้ .catch ในการ handling reject

// การใช้ then วิธีที่ 1
// promise_num.then(
//     // ส่ง resolve จะเข้า function res
//     res => {
//         console.log('Full filled');
//         console.log(res);
//     },
//     // ส่ง reject จะเข้า function err
//     err => {
//         console.log('Rejected');
//         console.log(err);
//     }
// )
// วิธีที่ 2 ไม่เขียน function จัดการ err ใน then แต่ใช้ .catch แทน
// promise_num.then(res => console.log(res))
// .catch(err => {
//     console.log(promise_num);
//     console.log(err);
// })
// .finally( () => {
//     console.log('Do in finally');
// })

// Promise chain
// promise_num
// .then( value => {
//     console.log('first ' + value)
//     return value * 2;
// })
// .then( value => {
//     console.log('second ' + value);
//     throw new Error('Intentional throw error'); // สร้าง error
//     return value * 3;
// })
// .then( value => {
//     console.log('third ' + value)
//     return value * 4;
// })
// .catch( err => {
//     console.log(err); // พอเจอ error จะหยุดทำงาน และส่งมาทำงานที่ catch
// })

// const fs = require('fs');
// fs.readFile('a.json', 'utf-8', (err, data) => {
//     fs.readFile('b.json', 'utf-8', (err1, data1) => {
//         console.log(data * data1)
//     })
// })

// built in library ที่ทำให้การอ่าน/เขียนไฟล์จะ return ในรูปแบบ promise
const fs = require("fs/promises");
// // fs.readFile('a.json', 'utf-8') return มาเป็น promise ทำให้ใช้ .then ได้เลย
// fs.readFile('a.json', 'utf-8').then( res1 => {
//     fs.readFile('b.json', 'utf-8').then( res2 => console.log(res1 * res2))
// })

// Promise.all จะ return เป็น promise และส่ง resolve เป็น Array ['3', '5'] ให้ result เก็บ
// const result = Promise.all([
//     fs.readFile('a.json', 'utf-8'),
//     fs.readFile('b.json', 'utf-8')
// ]);

// result เลยใช้ .then() ได้
// result.then( res => {
//     console.log(res[0] * res[1]);
// }).catch(err => console.log('Reject from Promise.all ' + err))

// Async/Await
const cal = async () => {
  try {
    const a = await fs.readFile("a.json", "utf-8");
    const b = await fs.readFile("b.json", "utf-8");
    console.log(a * b);
  } catch (err) {
    console.log(err);
  }
};
cal();
