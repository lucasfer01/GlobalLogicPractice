import './App.css';
import useInput from './useInput';
import Usuario from './Usuario';

function App() {
  const { formState, onChange } = useInput();

  const { nombre, edad, dni } = formState;

  return (
    <div className='App'>
      <div className='App__inputs'>
        <div>
          <label>Nombre</label>

          <input name='nombre' value={nombre} onChange={onChange} />
        </div>

        <div>
          <label>Edad</label>

          <input name='edad' value={edad} onChange={onChange} type={'number'} />
        </div>

        <div>
          <label>DNI</label>

          <input name='dni' value={dni} onChange={onChange} />
        </div>
      </div>

      <Usuario /> {/* Sin Props */}
    </div>
  );
}

export default App;
