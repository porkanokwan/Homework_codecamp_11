import React from "react";
import ReactDOM from 'react-dom';
// import LabJSX1 from "./Lab_JSX";

function Element() {
    const rootElement = document.getElementById("root")
    const headingElement = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            {style: {color: 'green'}},
            "Resume"
        ),
        React.createElement(
            'h2',
            {className: 'name'},
            'Kanokwan',
            React.createElement(
                'p',
                null,
                "color: blue, height: 163 cm., weight: 47.7, qoute: Tell me and I forget. Teach me and I remember. Involve me and I learn.; Benjamin Franklin"
            ),
            // React.createElement(
            //     "h1",
            //     null,
            //     <LabJSX1 name="kanokwan" />
            // )
        )   
    )
return(
ReactDOM.render(
    headingElement,
    rootElement
)
    // <div>
    //     <p>{headingElement}</p>
    // </div>
)
}

export default Element;
