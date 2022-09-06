import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState<string>('Estado original');
  const [divText, setDivText] = useState<string>('');

  function handleClick() {
    setState('El estado se cambió correctamente');
  }

  function handleMouseEnter() {
    setDivText('inside!');
  }

  function handleMouseLeave() {
    setDivText('');
  }

  return (
    <div className="App">
      <div className='app-button-container'>
        <button onClick={handleClick}>Click me!</button>

        <span>{state}</span>
      </div>

      <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='app-div-container'>
        <span>Soy un div!</span>
      </div>

      <div className='app-div-container'>
        <span>{divText}</span>
      </div>
    </div>
  );
}

export default App;