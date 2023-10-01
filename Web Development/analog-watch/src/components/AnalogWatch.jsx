import React, { useState, useEffect } from "react";
import './AnalogWatch.css'
function AnalogWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;

  const secondHandStyle = {
    transform: `rotate(${secondDegrees}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${minuteDegrees}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${hourDegrees}deg)`,
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex justify-center items-center border-4 rounded-full h-[350px] w-[350px] border-black">
      <h1 className="text-black text-[150px] top-[240px] absolute m-0 p-0">.</h1>
        <div className="second's-hand h-[350px]" style={secondHandStyle}>
          <div className="border-2 border-red-700 h-[175px] m-0 p-0"></div>
        </div>
        {/* A small change by dhanraj */}
        <div className="minute's-hand h-[300px]" style={minuteHandStyle}>
          <div className="border-2 border-black h-[150px] m-0 p-0"></div>
        </div>
        <div className="hour's-hand h-[240px]" style={hourHandStyle}>
          <div className="border-2 border-black h-[120px] m-0 p-0"></div>
        </div>
      </div>
    </div>
  );
}

export default AnalogWatch;
