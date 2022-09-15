import './App.css';
import { TestComponent } from './components/TestComponent/TestComponent';
import WithRounded from './components/WithRounded/WithRounded';

const WithRoundedComponent = WithRounded(TestComponent);

function App() {
  return (
    <div className="App">
      <WithRoundedComponent text='Hola' rounded/>

      <WithRoundedComponent text='Mundo!'/>
    </div>
  );
}

export default App;
