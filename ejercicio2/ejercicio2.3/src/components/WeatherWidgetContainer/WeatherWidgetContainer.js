import React, { useState } from 'react';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import './WeatherWidgetContainer.css';

const weatherListData = [
  { day: 1, weather: 'sunny' },
  { day: 2, weather: 'cloudy' },
  { day: 3, weather: 'rainy' },
  { day: 4, weather: 'cloudy' },
  { day: 5, weather: 'sunny' },
  { day: 6, weather: 'sunny' },
  { day: 7, weather: 'rainy' },
]

export default function WeatherWidgetContainer() {

  const [weatherList] = useState(weatherListData);

  return (
    <div className='weatherWidgetContainer'>
      <WeatherInfo weatherList={weatherList}/>
    </div>
  )
}