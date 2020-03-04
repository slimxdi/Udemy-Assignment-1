import React, {useState} from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

const App = () => {
  const [userInputState, setUserInputState ] = useState(
    {
        users:[
          {username: 'Ael', inputcolor:'red'},
          {username: 'Bur', inputcolor:'green'},
          {username: 'Cid', inputcolor:'blue'}
        ]
    }
  );

  const switchInputStateHandler = () => {
    userInputState.users[0].inputcolor==='pink'?
    setUserInputState(
      {
        users:[
          {username: 'Arachnae', inputcolor:'red'},
          {username: 'Boringer', inputcolor:'green'},
          {username: userInputState.users[2].username, inputcolor:'blue'}
        ]
      }
    ):
    setUserInputState(
      {
        users:[
          {username: 'Arachnae', inputcolor:'pink'},
          {username: 'Boringer', inputcolor:'chartreuse'},
          {username: userInputState.users[2].username, inputcolor:'aquamarine'}
        ]
      }
    )
  }

  const inputChangedHandler = (event) => {
    event.currentTarget.value !== ""?
      setUserInputState(
        {
          users:[
            {username: 'Bathalrus', inputcolor:'firebrick'},
            {username: 'Corinnagur', inputcolor:'forestgreen'},
            {username: event.target.value, inputcolor:'darkslateblue'}
          ]
        }
      ):
      setUserInputState(
        {
          users:[
            {username: 'Bathalrus', inputcolor:'red'},
            {username: 'Corinnagur', inputcolor:'green'},
            {username: event.target.value, inputcolor:'blue'}
          ]
        }
      )
  }

  return (
    <div className="App">
      <UserInput changed={inputChangedHandler}></UserInput>
      <br/>
      <button onClick={switchInputStateHandler}>Switch Username and Input Color</button>
      <br/>
      <div className="div-rgb"
        style={{backgroundColor: userInputState.users[0].inputcolor}}>
        <UserOutput
          username={userInputState.users[0].username}
          inputcolor={userInputState.users[0].inputcolor}>
        </UserOutput></div>
      <div className="div-rgb"
        style={{backgroundColor: userInputState.users[1].inputcolor}}>
        <UserOutput
          username={userInputState.users[1].username}
          inputcolor={userInputState.users[1].inputcolor}>
        </UserOutput></div>
      <div className="div-rgb"
        style={{backgroundColor: userInputState.users[2].inputcolor}}>
        <UserOutput
          username={userInputState.users[2].username}
          inputcolor={userInputState.users[2].inputcolor}>
        </UserOutput></div>
    </div>
  );
}

export default App;
