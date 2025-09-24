import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [targetDate] = useState(
    new Date().getTime() + 30 * 24 * 60 * 60 * 1000
  );

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r  text-black px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-bounce">
          🚀 Coming Soon
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We’re working hard to launch something amazing. Stay tuned!
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-6">
          {Object.keys(timeLeft).map((unit) => (
            <div key={unit} className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-4xl font-bold">{timeLeft[unit]}</span>
              <div className="uppercase text-xs">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
