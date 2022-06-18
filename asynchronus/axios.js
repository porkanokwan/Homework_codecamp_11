// ประกาศแบบ common js ใช้กับ Node.js
const axios = require('axios');

// function axios.get() นี้ จะ return ค่าเป็น Promise object ทำให้ function นี้จะทำงานแบบ asynchronus ซึ่ง asynchronus จะมีโอกาสทำงานสำเร็จหรือไม่ก็ได้
// ถ้าสำเร็จจะ return resolve พร้อมกับค่าที่ get มาไปเก็บไว้ในตัวแปร promise และถ้าเราจะเอาค่าที่ return จาก function นี้ไปใช้ต้องใช้ในรูปแบบ promise
// const promise = axios.get('https://jsonplaceholder.typicode.com/posts'); // function return ค่าเป็น Promise ทำให้ const promise เป็น promise object
// promise.then( function (response) {
//     console.log(response)
// }).catch( err => { 
//     console.log(err); // ถ้าไม่สำเร็จจะส่ง reject พร้อมกับ err obj มาที่ catch block
// } )
// หรือเขียนแบบนี้ก็ได้ ผลลัพธ์เหมือนกัน
// axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then( function (response) {
//         console.log(response)
//     })
//     .catch( err => {
//         console.log(err)
//     } )

// Async/Await: await ใช้ได้แค่ภายใน function async และใช้ await ได้แค่กับ Promise obj เท่านั้น
// async function f() {
//     return 1;
// }
// console.log(f()); // Promise { 1 }

// async function f1() {
//     try{
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); // await จะสั่งให้รอให้ promise obj ส่ง resolve หรือ reject ให้เสร็จก่อน ถ้าเป็น resolve จะเอาค่าที่ get มา ไปเก็บในตัวแปร res 
//         console.log(res); // บรรทัดนี้จะทำเมื่อบรรทักข้างบนเสร็จแล้ว ดังนั้น await ทำให้การอ่าน code เป็นแบบ synchronus
//         return 1;
//     }catch(err) {
//         console.log(err)
//     }
// };
// console.log(f1());

// เรียกใช้งาน axios วิธีที่ 1
// ขอข้อมูลใน resource posts ทั้งหมด
// axios({ url : 'https://jsonplaceholder.typicode.com/posts', method : 'get'})
// .then( res => {
//     // console.log(res.config);
//     // console.log(res.headers);
//     console.log(res.request);
// })
// .catch(err => console.log(err));

// ขอข้อมูลใน resource posts ที่มี id = 10 การเขียนแบบนี้เป็นการส่ง params ซึ่ง params เปลี่ยนแปลงค่าได้
// axios({ url : 'https://jsonplaceholder.typicode.com/posts/10', method : 'get'})
// .then( res => {
//     // console.log(res.config);
//     // console.log(res.headers);
//     // console.log(res.request);
//     console.log(res);
// })
// .catch(err => console.log(err));

// วิธีที่ 2
// axios('https://jsonplaceholder.typicode.com/posts/10', { method : 'get' })
// .then( res => {
//     // console.log(res.config);
//     // console.log(res.headers);
//     // console.log(res.request);
//     console.log(res);
// })
// .catch(err => console.log(err));

// การ create resource ต้องดูว่า server ที่เอามาใช้ resource เป็นชื่ออะไร ในตัวอย่างใช้ชื่อ posts ดังนั้น จะเป็นการ create resource posts
// axios('https://jsonplaceholder.typicode.com/posts', {
//     // โดยปกติ method: post ต้องส่ง data ที่เราจะ create เข้าไปด้วย ซึ่ง data ที่จะส่งไป เราต้องดูว่ารูปแบบที่ server ต้องการเป็นยังไง แล้วส่งตามแบบที่ server api นั้นต้องการไปแบบถูกต้อง 100% ถ้าส่งต่างจากที่เขารองรับจะ error
//     method: 'post',
//     // ซึ่ง resource ของ server api ของตัวอย่างนี้ รองรับเป็น Obj ที่มี key ชื่อ title, body, userId เท่านั้น
//     data: {
//         title: 'foo',
//         body: 'bar',
//         userId: 1, // userId มันคือ id ของ user หรือคนๆ นึง ซึ่งเป็นตัวแทนของ obj นั้นทั้งก้อน
//       }
// }).then(res => console.log(res.data))
// .catch(err => console.log(err))

// วิธีที่ 3
axios.get('https://jsonplaceholder.typicode.com/users/4', {headers: { "Content-Type": 'application/json' }})
.then(res => console.log(res));

// ถ้าจะส่ง data 
axios.post('https://jsonplaceholder.typicode.com/users/4', {
    title: 'foo',
    body: 'bar',
    userId: 1
}, 
{
    headers: { "Content-Type": 'application/json' }
})