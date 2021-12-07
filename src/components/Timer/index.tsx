import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import fullLogo from '../../../public/FullLogo.svg';

type TimerType = {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// const fullLogo = 'https://i.ibb.co/yXC166Q/FullLogo.png';

const TimerComponent = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2022-04-14T23:59:59`) - +new Date();
    let timeLeft = {} as TimerType;

    if (difference > 0) {
      timeLeft = {
        weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className={styles.container}>
      {/* <span className={styles.title}>UFG Timer</span> */}
      <Image src={fullLogo} alt="Logo" width={250} height={130} />
      {/* <div className={styles.counters}>
        <span className={styles.finalMsg}>Acabou já!</span>
        <span>Vai aproveitar as férias</span>
      </div>
      <img
        className={styles.imgGif}
        src="https://i.pinimg.com/originals/3c/1b/79/3c1b796e422435beccdf379027a468d7.gif"
        alt="gif"
        height="200px"
      /> */}
      <div className={styles.subtitle}>
        <span>Faltam exatamente:</span>
      </div>
      <div className={styles.weekCounter}>
        <span className={styles.numberWeek}>{timeLeft.weeks}</span>
        <span>semanas</span>
      </div>
      <div className={styles.counters}>
        <span className={styles.numberInside}>
          <span>{timeLeft.days}</span>d <span>{timeLeft.hours}</span>h <span>{timeLeft.minutes}</span>
          min <span>{timeLeft.seconds}</span>s
        </span>
      </div>
      <div className={styles.finalText}>
        <span>Para a felicidade e final do semestre</span>
      </div>
    </div>
  );
};

export default TimerComponent;
