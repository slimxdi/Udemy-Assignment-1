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
    setUserInputState(
      {
        users:[
          {username: 'Arachnae', inputcolor:'pink'},
          {username: 'Boringer', inputcolor:'chartreuse'},
          {username: 'Carthule', inputcolor:'aquamarine'}
        ]
      }
    )
  }

  return (
    <div className="App">
      <UserInput></UserInput>
      <button onClick={switchInputStateHandler}>Switch Username and Input Color</button>
      <div style={{backgroundColor: userInputState.users[0].inputcolor}}><UserOutput username={userInputState.users[0].username} inputcolor={userInputState.users[0].inputcolor}></UserOutput></div>
      <div style={{backgroundColor: userInputState.users[1].inputcolor}}><UserOutput username={userInputState.users[1].username} inputcolor={userInputState.users[1].inputcolor}></UserOutput></div>
      <div style={{backgroundColor: userInputState.users[2].inputcolor}}><UserOutput username={userInputState.users[2].username} inputcolor={userInputState.users[2].inputcolor}></UserOutput></div>
    </div>
  );
}

export default App;
