import React from 'react'
import { useParams } from 'react-router-dom';
import './Detail.css';

export default function Detail() {

    const { dni, name, age } = useParams();

    return (
        <div className='Detail__container'>
            <h1>La parametros recibidos son: </h1>

            <h2>Nombre: {name}</h2>
            
            <h2>Edad: {age}</h2>
            
            <h2>DNI: {dni}</h2>
        </div>
    )
}