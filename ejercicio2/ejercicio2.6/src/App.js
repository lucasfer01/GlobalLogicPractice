import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Radium from './components/RadiumComponent/RadiumComponent';
import StyledComponents from './components/StyledComponents/StyledComponents';
import WixStyleReact from './components/MaterialUi/MaterialUi';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>ejercicio 2.6</h1>

        <ul>
          <li>
            <NavLink to='/material-ui' className={({ isActive }) => (isActive ? "nav-active" : "no-active")}>
              Material UI
            </NavLink>
          </li>
          <li>
            <NavLink to='/styled-components' className={({ isActive }) => (isActive ? "nav-active" : "no-active")}>
              StyledComponents
            </NavLink>
          </li>
          <li>
            <NavLink to='/radium' className={({ isActive }) => (isActive ? "nav-active" : "no-active")}>
              Radium
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='material-ui' element={<WixStyleReact />} />
        <Route path='styled-components' element={<StyledComponents />} />
        <Route path='radium' element={<Radium />} />
      </Routes>
    </div>
  );
}

export default App;
