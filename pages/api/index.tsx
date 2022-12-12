export default function handler(req, res) {
  type TimerType = {
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  const difference = +new Date(`2023-02-28T23:59:59`) - +new Date(); //YYYY-MM-DD
  let timeLeft = {} as TimerType;

  if (difference > 0) {
    timeLeft = {
      weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  res.status(200).json({ timeLeft: timeLeft });
}
