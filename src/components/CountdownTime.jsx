import React, { memo } from "react";
import Countdown from "react-countdown";

const CountdownTime = () => {
  const renderer = ({ minutes, seconds }) => {
    return (
      <div className=" d-flex align-items-center">
        <div className="countdown-column">
          <div className="countdown-number">{minutes}</div>
        </div>
        <div style={{ fontSize: "3rem", fontWeight: "bold" }}>:</div>

        <div className="countdown-column">
          <div className="countdown-number">{seconds}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Countdown date={Date.now() + 8 * 60 * 1000} renderer={renderer} />
    </div>
  );
};

export default memo(CountdownTime);
