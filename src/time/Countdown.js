import { React, useState, useEffect } from "react";
import moment from "moment";
import "./Countdown.css";
import { makeItSnow } from "../layout/easterEgg";

const timeTillDate = "10 04 2025, 15:00";
const timeFormat = "MM DD YYYY, h:mm";

const Countdown = () => {
  const [time, setTime] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
    diff: 10, // random
  });

  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("DDD");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      setTime({ days, hours, minutes, seconds, diff: then.diff(now) });
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  useEffect(() => {
    if (time.diff <= 0 && !start) {
      makeItSnow();
      setStart(true);
    }
  }, [time.diff, start]);

  const { days, hours, minutes, seconds } = time;
  if (!seconds) {
    return null;
  }

  return (
    <>
      {start ? null : (
        <div className="countdown-div">
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
      )}
    </>
  );
};

export default Countdown;
