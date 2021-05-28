import React, { useEffect, useState } from "react";

const TimeSection = ({ getTime }) => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setTimeout(() => {
      return setTime(getTime);
    }, 1000);
  }, [time, getTime]);

  return (
    <section className="section section-time">
      <span className="section-time__time">{`${time.hours} : ${time.minutes} : ${time.seconds}`}</span>
    </section>
  );
};

export default TimeSection;
