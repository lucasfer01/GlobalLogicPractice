import React from 'react';
import './Todo.css';

export default function Todo({todoName}) {
  return (
    <div className='todo-container'>
        <input type='checkbox'/>

        <p>{todoName}</p>
    </div>
  )
}
