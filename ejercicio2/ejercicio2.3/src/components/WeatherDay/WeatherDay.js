import React from 'react';
import './WeatherDay.css';

const dayList = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

export default function WeatherDay({ weatherDay, changeSelectedDay, key }) {

    function handleOnChange() {
        changeSelectedDay(weatherDay);
    }

    if (weatherDay) {
        return (
            <div key={key} className='weatherDayContainer' onClick={handleOnChange}>
                <h2>{dayList[weatherDay.day - 1]}</h2>

                <img src={`/images/${weatherDay.weather}.png`} alt='weather' />

                <span>{weatherDay.weather}</span>
            </div>
        )
    }
}
