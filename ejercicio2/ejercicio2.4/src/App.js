import './App.css';
import Todo from './Todo/Todo';

function App() {
  return (
    <div className="App">
      <div className='todos-container'>
        <Todo todoName='Realizar ejercicio 2.4' />
        <Todo todoName='Realizar ejercicio 2.5' />
        <Todo todoName='Realizar ejercicio 2.6' />
      </div>
    </div>
  );
}

export default App;
