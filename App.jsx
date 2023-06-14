import logo from './logo.svg';
import './App.css';
import Userinput from './Components/Userinput';
import Useroutput from './Components/Useroutput';
import {useState } from 'react';

//syntax to create dynamic state component
const App = () => {
  const [userName, setuserName] = useState('Wande Coal');
  const setNewuserName = (e) => {
    setuserName(e.target.value)
  }

  //input is dynamically bound because function component was used instead of class component

  //syntax to render input and output components on the webpage
  return (
    <div className='wrap'>
      <div className="App">
      <Userinput change = {setNewuserName}/>
      <Useroutput userName = {userName}/>
      </div>
  </div>
    
  );
}

export default App;
