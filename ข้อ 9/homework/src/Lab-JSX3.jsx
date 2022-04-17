import React from "react";

export default function Lab3() {
    let arr1 = ["a", "b", "c", "d", "e"];
    let arr2 = [<p>a</p>, <p>b</p>, <p>c</p>, <p>d</p>, <p>e</p>]
    let element = ' ';

    for (let item = 0; item < arr1.length; item++) {
      element += arr1[item];
    }
    console.log(element);

    let element2 = arr2.map( i =>  i);

    let element3 = arr1.map( item => <p>{item}</p>)
    
    
    return(
        <div>
            <p>arr1: {element}</p>
            <p>arr2: {element2}</p>
            <p>arr1 แสดงผลแบบ arr2: {element3}</p>
        </div>
    )
}
