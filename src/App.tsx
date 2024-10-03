import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    setIsRunning(false);
  };

  const stopTimer = () => {
    setIsPaused(false);
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    let timer: number | undefined;
    if (isRunning && !isPaused) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isPaused]);

  return (
    <>
      <div>
        <h1> Stop Watch </h1>
        <div> {time} </div>
        <div>
          {!isRunning && !isPaused && (
            <button onClick={startTimer}>Start</button>
          )}
        </div>
        <div>
          {isRunning && !isPaused && (
            <button onClick={pauseTimer}>Pause</button>
          )}
        </div>
        <div>{isRunning && <button onClick={stopTimer}>Stop</button>}</div>
      </div>
    </>
  );
}
