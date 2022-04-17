import React, { PureComponent } from 'react';
import Element from './Lab_element';
import LabJSX1 from './Lab_JSX';
import Variable from './Lab_JSX2';
import Lab3 from './Lab-JSX3';
import List from './Lab_list.js';
import './App.css';

function App() {
  return (
    <div className='container'>
        {/* <Element/> */}
        <LabJSX1 name= "kanokwan"/>
        <hr/>
        <Variable/>
        <hr/>
        <Lab3/>
        <hr/>
        <List/>
        <hr/>
    </div>
  )
}

export default App;
