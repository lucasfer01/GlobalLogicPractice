import React from 'react';
import PropTypes from 'prop-types';
import './Usuario.css';


Usuario.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    dni: (props, propName, Component) => {
        if(!(propName in props)) return new Error(`Falta la propiedad ${propName}`);

        if(!props[propName].length) {

            return new Error(`La propiedad ${propName} no puede estar vacia`)
        };

        if(props[propName].length > 10) return new Error(`La propiedad ${propName} no puede tener mas de 10 caracteres`);

        if(props[propName].length < 9) return new Error(`La propiedad ${propName} no puede tener menos de 9 caracteres`);

        if(props[propName].length === 10) {
            if(props[propName][2] !== '.' || props[propName][6] !== '.' ) return new Error(`Formato invalido, ${propName} debe ser "XX.XXX.XXX"`)
        }

        if(props[propName].length === 9) {
            if(props[propName][1] !== '.' || props[propName][5] !== '.' ) return new Error(`Formato invalido, ${propName} debe ser "XX.XXX.XXX"`)
        }
    } 
}

Usuario.defaultProps = {
    nombre: 'GlobalLogic',
    edad: 18,
    dni: '0.000.000'
};
  

export default function Usuario({nombre, edad, dni}) {
    return (
        <div className='Usuario__container'>
            <span><strong>Nombre: </strong>{nombre}</span>
            
            <span><strong>Edad: </strong>{edad || ''}</span>

            <span><strong>DNI: </strong>{dni}</span>
        </div>
        )
    }
    

    