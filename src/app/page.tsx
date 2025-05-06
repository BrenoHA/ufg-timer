"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date("2025-07-05T23:59:59").getTime();
    // date format: YYYY-MM-DDTHH:MM:SS

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ weeks, days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center p-10 gradient-bg select-none">
      <div className="w-full max-w-3xl text-center cursor-default">
        <Image
          src="/FullLogo.svg"
          alt="Full Logo"
          width={400}
          height={200}
          className="mx-auto mb-8 drop-shadow-lg w-full max-w-[300px] sm:max-w-[400px]"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-white">
          Faltam exatamente
        </h1>

        {/* Weeks Section */}
        <div className="mb-6 flex justify-center">
          <div className="timer-box p-3 sm:p-6 rounded-lg w-[120px] sm:w-[160px] flex flex-col items-center">
            <div className="timer-number text-2xl sm:text-4xl font-bold text-white">
              {timeLeft.weeks}
            </div>
            <div className="text-gray-300 text-xs sm:text-base">Semanas</div>
          </div>
        </div>

        {/* Other Time Units */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          <div className="timer-box p-3 sm:p-6 rounded-lg flex flex-col items-center">
            <div className="timer-number text-2xl sm:text-4xl font-bold text-white">
              {timeLeft.days}
            </div>
            <div className="text-gray-300 text-xs sm:text-base">Dias</div>
          </div>
          <div className="timer-box p-3 sm:p-6 rounded-lg flex flex-col items-center">
            <div className="timer-number text-2xl sm:text-4xl font-bold text-white">
              {timeLeft.hours}
            </div>
            <div className="text-gray-300 text-xs sm:text-base">Horas</div>
          </div>
          <div className="timer-box p-3 sm:p-6 rounded-lg flex flex-col items-center">
            <div className="timer-number text-2xl sm:text-4xl font-bold text-white">
              {timeLeft.minutes}
            </div>
            <div className="text-gray-300 text-xs sm:text-base">Minutos</div>
          </div>
          <div className="timer-box p-3 sm:p-6 rounded-lg flex flex-col items-center">
            <div className="timer-number text-2xl sm:text-4xl font-bold text-white">
              {timeLeft.seconds}
            </div>
            <div className="text-gray-300 text-xs sm:text-base">Segundos</div>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 mt-8">
          Para a felicidade e fim do semestre
        </p>
      </div>
    </main>
  );
}
