import React from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserInput></UserInput>
      <UserOutput username="Ael"></UserOutput>
      <UserOutput username="Bur"></UserOutput>
      <UserOutput username="Cid"></UserOutput>
    </div>
  );
}

export default App;
