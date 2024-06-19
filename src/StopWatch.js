import React, { useState, useEffect } from "react";
import styles from "./StopWatch.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [running]);

  const handleStop = () => setRunning(false);
  const handleStart = () => setRunning(true);
  const resetTime = () => setTime(0);

  return (
    <div className={styles.top_parent}>
      <div className={styles.first_child}>
        <h1 className={styles.timer}>
          {new Date(time).toISOString().slice(14, 22)}
        </h1>

        <div className={styles.btn_parent}>
          <button
            className={`${styles.btn} ${styles.start_btn}`}
            disabled={running ? true : false}
            onClick={handleStart}
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className={`${styles.btn} ${styles.stop_btn}`}
            disabled={!running ? true : false}
          >
            Pause
          </button>
          <button
            onClick={resetTime}
            className={`${styles.btn} ${styles.reset_btn}`}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
