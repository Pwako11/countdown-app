import React from 'react';
import { useState, useEffect } from 'react';

const ClockTicker = () =>{

    // let timeRemaining; 

    // const fullday = "24:00:00"  

    const init = new Date().toLocaleTimeString('en-GB') 
    const [currentTime, setTime] = useState(init)
    
    const tick = () =>{
        setTime(new Date().toLocaleTimeString('en-GB'))
    }
    

    useEffect(() =>{
        const timeID = setInterval(() => tick (), 1000);
    })

    const element =(
        <div>
            <h1 className ="greeting"> Hello, world! </h1>
            <h2>The current time is {currentTime}.</h2>
        </div>
      )
    
    return (
        <div>
            {element}
            <p>Make the most of your day</p>
        </div>

    )
}
export default ClockTicker;