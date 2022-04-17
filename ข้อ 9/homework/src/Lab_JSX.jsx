import React from "react";

function LabJSX1(props) {
    const myComponent = {
        One: function One() {
            return <div>Hello!!</div>
        },
        Two: function Two(props) {
            return <div>{props.name}</div>
        },
        Three: function Three() {
            return React.createElement(
                "h1",
                {className: "Three"},
                "First JSX"
            )
        }
    }
    
    return (
        <div>
            {myComponent.One()}
            {myComponent.Two(props)}
            {myComponent.Three()}
        </div>
    
    )
}

export default LabJSX1;