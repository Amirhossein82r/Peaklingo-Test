import React, { Fragment, useEffect, useState } from "react";

const Clock = () => {
  const [timerDays, setTimerDays] = useState<number>(10);
  const [timerHours, setTimerHours] = useState<number>(10);
  const [timerMinutes, setTimerMinutes] = useState<number>(10);
  const [timerSeconds, setTimerSeconds] = useState<number>(10);
  let interval: any;

  const startTimer = () => {
    const countDownDate = new Date("June 30,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const secends = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(secends);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <Fragment>
      <section className="timer-contianer">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>روز</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>ساعت</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>دقیقه</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>ثانیه</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Clock;
