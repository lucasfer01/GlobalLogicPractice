import { Component } from 'react'
import './Footer.css';
import logo from './assets/globallogic-logo.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer__container'>
        <img style={{width: '250px'}} src={logo} alt='logo'/>

        <div>
            <h2>Ejercicio 3.6</h2>
            <span>Proyecto individual</span>
        </div>
      </div>
    )
  }
}
