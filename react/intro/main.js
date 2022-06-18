// const div = React.createElement('div', {id: 'container', className: 'container'},
//     React.createElement('div', {}, React.createElement('span', {className: 'maon-content'}, 'Main content') ),
//     React.createElement('h1', {}, "Welcome to our React Website"),
//     React.createElement('ul', {},
//         React.createElement('li', {className: 'list-item'}, "List 1"), // <li class = 'list-item> List 1 </li>
//         React.createElement('li', {}, 'List 2'),
//         React.createElement('li', {}, 'List 3')
//     )
// );
// console.log(div)
// console.log(React)

// const user = ['John', 'Jim', 'Jane'];
// const num = 20;
// const classes = 'container ms-0 pt-1'
// const ul = (
//      <ul className={classes}>
//             {/* การแทรกตัวแปรใน JSX ต้องใช้ {} */}
//             <li className = 'list-item'>{user[0]}</li>
//             <li >{user[1]}</li>
//             <li >{user[2]}</li>
//             <li >{'Josh' + ' Mora'}</li>
//             <li >{1 * 10 + 5 +25}</li>
//             <li >{num ** 2}</li>
//             {/* render Array ไปหน้า web ได้โดยนำข้อมูลมาต่อกัน แต่จะไม่ render null, undefined, boolean, obj ไปหน้า web เลย */}
//             <li >{[true, 1, 'John']}</li>
//       </ul>
// )
// ReactDOM.render(ul, document.getElementById('root'));

// const div = (
//     <div id = 'container' className = {classes} style = {{margin: '20px', }}>
//         <div>
//             <span>Main content</span>
//         </div>
//         <h1>Welcome to our React Website</h1>
//         {ul}
//         <label htmlFor = "username">Username: </label>
//         <input id = "username"/>
//     </div>
//     // <div></div> error ทันทีเพราะ พอใส่เข้าไปจะทำให้ div อันนี้เป็น Sibling กับ div id='container' ทำให้ไม่มี root element ใน JSX นี้
// )

// ReactDOM.render(div, document.getElementById('root'));
// console.log(ReactDOM)

// Function Component
// function Header() {
//     return (
//         <div>
//             <div>Logo</div>
//             <div>Menu</div>
//         </div>
//     )
// }
// // สร้าง Component List ที่หน้าตาคล้ายกัน จะได้ไม่ต้องเขียน code ซ้ำๆ กันการเกิด repeat code
// function List(props) {
//     return (
//         <div>
//             <li>
//                 <span>{props.message}</span>
//                 <h6>Author: {props.author}</h6>
//             </li>
//         </div>
//     )
// }

// function Content() {
//     return (
//         <div>
//             <ul>
//                 {/* เอา Component List มา reuse ได้ <List /> === {List()} */}
//                 {List( {message : 'Welcome to Thailand', author : 'John'} )}  {/* เป็นการเรียกใช้ fuction List ที่ส่ง parameter เป็น obj ไปเก็บใน props ตามปกติ ดังนั้น props = { message : 'Welcome to Thailand', author : 'John'} */}

//                 {/* เรียกใช้ Compomemt List แล้ว React จะรวบ attribute ทุกอันให้อยู่ในรูปแบบของ Obj แล้วส่งให้ props obj เก็บ */}
//                 <List message = 'React is easy' author = 'Sam'/> {/* props = { message : 'React is easy' author : 'Sam'} */}
//                 <List />
//                 <List />
//                 <List />
//                 <List />
//         {/* <List message = 'Welcome to Thailand' author = 'John'/> === {List({message : 'Welcome to Thailand', author : 'John'} )} */}
//             </ul>
//         </div>
//     )
// }

// function App() {
//     return <div>
//         {/* ใน Component App มี Component ย่อย เหมือนเอา Component Header กับ Content มาประกอบกัน แล้วเอาไปใส่ใน App */}
//         <Header/>
//         <Content/>
//         <h1>This is a App component</h1>
//         </div>
// }
// ให้เอาค่าที่ return จาก function App ไปใส่ใน tag id=root
// ReactDOM.render(<App />, document.getElementById('root')); // <App /> เป็นการเขียนแบบ JSX ซึ่งการเขียนแบบนี้ มันจะมองว่า function App เป็น Function component

// React ver.18 จะไม่ใช้ ReactDOM.render แล้วจะใช้ createRoot แทน เช่น
// cont root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)

function Avatar(props) {
  return <img className="Avatar" src={props.avatarUrl} alt={props.name} />;
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.avatarUrl} name={props.name} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      {/* <div className="UserInfo"> */}
      <UserInfo avatarUrl={props.avatarUrl} name={props.name} />
      {/* <img className="Avatar" src={props.avatarUrl} alt={props.name} /> */}
      <Avatar avatarUrl={props.avatarUrl} name={props.name} />
      {/* <div className="UserInfo-name">{props.name}</div> */}
      {/* </div> */}
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}
