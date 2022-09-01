import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor() {
        super();

        this.state = { title: 'Ejercicio 2.2' }
    }

    render() {
        return (
            <header className='container-header'>
                <h1>{this.state.title}</h1>
            </header>
        )
    }
}
