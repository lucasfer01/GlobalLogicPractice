import React from 'react';
import TimerView from '../Timer/TimerView';
import './SwitchColorStyle.css';

export default function SwitchColorView({ color, time }) {

    return (
        <div className='container' style={{ backgroundColor: color }}>
            <h1>{color}</h1>

            <TimerView time={time}/>
        </div>
    )
}
