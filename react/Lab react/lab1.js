// Lab 1
// const div = React.createElement('div', {id: 'container', style:{margin: '20px', padding: '20px', border: '1px solid black'}}, 
//     React.createElement('h1', {}, 'Hello My Friend'),
//     React.createElement('p', {}, 'Friend List'),
//     React.createElement('ul', {}, 
//         React.createElement('li', {}, 'John'),
//         React.createElement('li', {}, 'Jack'),
//         React.createElement('li', {}, 'Jane'),
//     )
// );
// ReactDOM.render(div, document.getElementById('root'));

// // Lab 2
// const divJsx = (
//     <div>
//         <h1>Hello My Friend</h1>
//         <p>Friend List</p>
//         <ul>
//             <li>John</li>
//             <li>Jack</li>
//             <li>Jane</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(divJsx, document.getElementById('root'));

// Lab JSX 1
// const fullName = 'Kanokwan Dulyapraphant';
// const birthYear = '1999';

// const h1 = (
//     <div>
//         <h1>{fullName}</h1>
//         <p>Age: {20222 - birthYear}</p>
//     </div>
// );
// ReactDOM.render(h1, document.getElementById('root'));

// Lab JSX 2
// const height = 1.65;
// const weight = 50;
// function calcBMI(w, h) {
//     return w/h**2; 
// }

// const h1 = <h1>{calcBMI(weight, height)}</h1>;
// ReactDOM.render(h1, document.getElementById('root'));
// ReactDOM.render(<h1>{calcBMI(weight, height)}</h1>, document.getElementById('root')); // ใส่แบบนี้ก็ได้

// // Lab JSX 3
// const form = (
//     <div>
//         <label htmlFor = 'username'>Username: </label>
//         <input className = 'username' id = 'username' name = 'username' />
//     </div>
// )

// ReactDOM.render(form, document.getElementById('root'));

// Lab JSX 4
// function App() {
//     return (
//         <h1>Welcome to Thailand</h1>
//         <h1>Land of smile</h1>
//     )
// }

// ReactDOM.render(App(), document.getElementById('root')); // ทำงานไม่ได้ เพราะไม่มี root element 

// Lab JSX 5
// function App() {
//     return (
//         <div>
//             <span>Welcome to Thailand</span>
//             <br>
//             <span>I'm 27 years old.</span>
//         </div>
//     )
// }

// ReactDOM.render(App(), document.getElementById('root')); // ทำงานไม่ได้ เพราะ ต้องมี / ปิดใน <br>

// Lab JSX 6
// const data1 = 'String'; // render ได้
// const data2 = 100; // render ได้
// const data3 = true; // render ไม่ได้
// const data4 = null; // render ไม่ได้
// const data5 = undefined; // render ไม่ได้
// const data6 = { name: 'min', age: 25 }; // render ไม่ได้

// ReactDOM.render(data6, document.getElementById('root'));

// Lab component 1
// function Profile() {
//     return (
//         <div>
//             <h1>John Doe</h1>
//             <h2>27</h2>
//         </div>
//     )
// };
// ReactDOM.render(<Profile/>, document.getElementById('root'))

// Lab component 2
// function Car(props) {
//     console.log(props.brand); // * Honda
//     console.log(props.price); // ** 1000000
//     console.log(props.color); // *** undefined
//     return <div>Car</div>;
// }
// ReactDOM.render(<Car bran='Honda' price= '1000000'/>, document.getElementById('root'));

// Lab component 3
function ProductItem(props) {
//     // จะเขียน props ในรูปแบบ Destructuring ก็ได้ หรือจะ Destructuring ใน () ของ function ก็ได้ และใส่ค่า default ได้
    // function ProductItem( {name = 'Unknown', price = '-', description = 'Unknown'}  ) {
    const {name = 'Unknown', price = '-', description = 'Unknown'} = props;
    return (
        // React.Fragment เป็น tag พิเศษที่เป็น root แทน div ได้ และช่วยลดการเพิ่ม tag ที่ไม่จำเป็นเข้ามาใน DOM ถ้าเราใช้ div มันจะเพิ่ม div เข้าไปโดยไม่จำเป็น ดังนั้น การใช้ Fragment จะช่วยลดการเพิ่ม tag ที่ไม่จำเป็นได้
        <React.Fragment> 
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
            {/* หรือจะใช้ spread operator ก็ได้ เช่น */}
            {/* <Pro name = {name} price = {price} description= {description}/>
            <Pro {...props}/> */}
        </React.Fragment>
    );
        /* หรือจะเขียนแบบนี้ก็ได้ */
    // return (
    //     <> 
    //         <h1>{props.name}</h1>
    //         <h2>{props.price}</h2>
    //         <p>{props.description}</p>
    //     </>
    // );
};
ReactDOM.render(<ProductItem name = 'Iphone' price = '30000' description = 'from apple co.' />, document.getElementById('root'));

// Lab component 4
// function ProductItem(props) {
//     // destructuring
//     const { product: {name, price, description} } = props;
//     // return (
//     //     <div>
//     //         <h1>{props.product.name}</h1>
//     //         <h1>{props.product.price}</h1>
//     //         <h1>{props.product.description}</h1>
//     //     </div>
//     // )
//     return (
//         <div>
//             <h1>{name}</h1>
//             <h1>{price}</h1>
//             <h1>{description}</h1>
//         </div>
//     )
// };
// const product = {name : 'Iphone', price : '30000', description : 'from apple co.'};
// ReactDOM.render(<ProductItem product={product} />, document.getElementById('root'));