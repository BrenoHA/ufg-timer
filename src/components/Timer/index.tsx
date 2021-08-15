import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { format } from 'date-fns';

// const [missingWeeks, setMissingWeeks] = useState<number>();
// const [missingDays, setMissingDays] = useState<number>();
// const [missingHours, setMissingHours] = useState<number>();
// const [missingMinutes, setMissingMinutes] = useState<number>();
// const [missingSeconds, setMissingSeconds] = useState<number>();

const TimerComponent = () => {
  const finalDate = +new Date('2021-11-11T23:59:59');

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [missingDate, setMissingDate] = useState<Date>();
  const [missingDateTime, setMissingDateTime] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // const formatDate = (date: Date): string => {
  //   if (date === null || date === undefined) {
  //     return '';
  //   }
  //   const date_formated = format(new Date(date), 'dd/MM/yyyy HH:mm');
  //   return date_formated;
  // };

  const changeCurrentDate = () => {
    setTimeout(() => {
      setCurrentDate(new Date());
    }, 1000);
  };

  const changeMissingDate = () => {
    setMissingDate(new Date(finalDate - +new Date(currentDate)));
  };

  // console.log(missingDate);

  useEffect(() => {
    changeCurrentDate();
    changeMissingDate();
  }, [currentDate]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>UFG Timer</span>

      <div className={styles.subtitle}>
        <span>Faltam exatamente:</span>
      </div>

      <div className={styles.weekCounter}>
        <span className={styles.numberWeek}>12</span>
        <span>semanas</span>
      </div>

      <div className={styles.counters}>
        <span className={styles.numberInside}>
          <span>123</span>d <span>12</span>h <span>54</span>
          min <span>11</span>s
        </span>
      </div>

      <div className={styles.finalText}>
        <span>Para a felicidade e final do semestre</span>
      </div>

      {/* <div> missing{formatDate(missingDate)}</div>
      <div> missing{new Date(missingDate).toLocaleString()}</div> */}
      <div> final{new Date(finalDate).toLocaleString()}</div>
      <div> current{new Date(currentDate).toLocaleString()}</div>
    </div>
  );
};

export default TimerComponent;
