import React from 'react'

function List() {
    let arr1 = ["a", "b", "c", "d", "e"]
    let arrMap = arr1.map( item => <li key={item}>{item}</li>)
  
    console.log(arrMap);

    return(
        <p>{arrMap}</p>
    )
}

export default List;
