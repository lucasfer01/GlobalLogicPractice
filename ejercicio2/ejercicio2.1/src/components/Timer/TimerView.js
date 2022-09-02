import React from 'react';
import './TimerStyle.css';

export default function TimerView({time}) {
  return (
    <h2 className='timer'>{time}</h2>
  )
}
