import React, { useEffect, useState } from 'react'
import SwitchColorView from './SwitchColorView';

export default function SwitchColorLogic() {

  const [color_state, set_color_state] = useState('red');

  const [seconds, set_seconds] = useState(5);


  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (seconds > 0) {
        set_seconds(seconds - 1);

      }

      if (seconds - 1 === 0) {
        set_color_state('green');
        
        clearInterval(sampleInterval);
      }

    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });


  return (
    <SwitchColorView color={color_state} time={seconds} />
  )
}
