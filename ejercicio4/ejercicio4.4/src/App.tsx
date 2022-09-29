import React from 'react';
import './App.css';
import {Cat, Mouse, Field} from './components';

function App() {
  return (
    <div className="App">
      <h2>Cat</h2>

      <Field render={(style: React.CSSProperties) => <Cat style={style}/>}/>

      <h2>Mouse</h2>

      <Field render={(style: React.CSSProperties) => <Mouse style={style}/>}/>
    </div>
  );
}

export default App;
