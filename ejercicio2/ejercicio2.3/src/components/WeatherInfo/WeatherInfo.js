import React, { useState } from 'react'
import WeatherDay from '../WeatherDay/WeatherDay';
import './WeatherInfo.css'

export default function WeatherInfo({ weatherList }) {

    const [selectedDay, setSelectedDay] = useState(null);

    function changeSelectedDay(dayData) {
        setSelectedDay(dayData);
    }

    return (
        <div className='weatherInfoContainer'>
            <WeatherDay key={selectedDay?.day} weatherDay={selectedDay} />

            <div>
                {
                    weatherList.map((weatherDay) => (
                        <WeatherDay key={weatherDay.day} weatherDay={weatherDay} changeSelectedDay={changeSelectedDay} />
                    ))
                }
            </div>
        </div>
    )
}
