import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const QuizTimer = ({ timeOut, onTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeOut}
      value={remainingTime}
      className={mode}
    />
  );
};

export default QuizTimer;

QuizTimer.propTypes = {
  timeOut: PropTypes.number,
  onTimeOut: PropTypes.func,
  mode: PropTypes.string,
};
