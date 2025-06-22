import { React, useState, useEffect } from "react";
import moment from "moment";
import "./Countdown.css";
import { isMobile } from "../constants";

const Countdown = (props) => {
  const [time, setTime] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });

  useEffect(() => {
    let interval = setInterval(() => {
      const { timeTillDate, timeFormat } = props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("DDD");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const { days, hours, minutes, seconds } = time;
  if (!seconds) {
    return null;
  }

  return (
    <div className="countdown-div">
      {/* <h1>Countdown</h1> */}
      <div className="countdown-wrapper">
        {days && (
          <div className="countdown-item">
            {days}
            <span>dias</span>
          </div>
        )}
        {hours && (
          <div className="countdown-item">
            {hours}
            <span>horas</span>
          </div>
        )}
        {minutes && (
          <div className="countdown-item">
            {minutes}
            <span>minutos</span>
          </div>
        )}
        {seconds && (
          <div className="countdown-item">
            {seconds}
            <span>segundos</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
