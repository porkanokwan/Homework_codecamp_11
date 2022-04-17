import {Switch, Route} from 'react-router-dom'
import './App.css';
import CreatePikka from './component/CreatePikka';
import SingIn from './component/SignIn';
// import SignUp from './component/signUP';
// import SingUp from './component/SingUp';
import SignUps from './component/SignUp(ant)';

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <SingUp/> */}
      <SignUps/>
      {/* <SingIn/> */}
      <CreatePikka/>
    </div>
  );
}

export default App;
