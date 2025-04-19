import { React, useState, useEffect } from "react";
import moment from "moment";
import "./Countdown.css";

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
  const daysRadius = mapNumber(days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

  if (!seconds) {
    return null;
  }

  return (
    <div className="countdown-div">
      {/* <h1>Countdown</h1> */}
      <div className="countdown-wrapper">
        {days && (
          <div className="countdown-item">
            {/* <SVGCircle radius={daysRadius} /> */}
            {days}
            <span>days</span>
          </div>
        )}
        {hours && (
          <div className="countdown-item">
            {/* <SVGCircle radius={hoursRadius} /> */}
            {hours}
            <span>hours</span>
          </div>
        )}
        {minutes && (
          <div className="countdown-item">
            {/* <SVGCircle radius={minutesRadius} /> */}
            {minutes}
            <span>minutes</span>
          </div>
        )}
        {seconds && (
          <div className="countdown-item">
            {/* <SVGCircle radius={secondsRadius} /> */}
            {seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#583"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

// ReactDOM.render(
// 	<Countdown
// 		timeTillDate="05 26 2019, 6:00 am"
// 		timeFormat="MM DD YYYY, h:mm a"
// 	/>,
// 	document.getElementById('app')
// );

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default Countdown;
