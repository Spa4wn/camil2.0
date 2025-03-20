import { useEffect, useState } from 'react';
import { LockIcon, CalendarIcon, HeartIcon, SparklesIcon } from 'lucide-react';

export function Countdown({
  currentDate // Adicione a tipagem aqui
}: {
  currentDate: Date; // Define o tipo de `currentDate` como `Date`
}) {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      let targetDate = new Date(now.getFullYear(), 2, 31, 0, 0, 0, 0);
      if (now > targetDate) {
        targetDate = new Date(now.getFullYear() + 1, 2, 31, 0, 0, 0, 0);
      }
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        const milliseconds = difference % 1000;
        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
          milliseconds
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        });
      }
    };

    const timer = setInterval(calculateTimeRemaining, 100);
    calculateTimeRemaining();
    return () => clearInterval(timer);
  }, [currentDate]);

  return (
    <div className="w-full max-w-md p-8 mx-auto text-center">
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-pink-100 rounded-lg blur-md"></div>
          <div className="relative bg-white rounded-lg p-6 shadow-lg">
            <div className="relative">
              <LockIcon className="h-16 w-16 mx-auto text-rose-400 mb-4" />
              <SparklesIcon className="absolute top-0 right-0 h-6 w-6 text-rose-300 animate-pulse" />
              <SparklesIcon className="absolute top-0 left-0 h-6 w-6 text-rose-300 animate-pulse" />
            </div>
            <h2 className="text-2xl font-serif text-gray-800 mb-2">
              Um Segredo de Amor Aguarda
            </h2>
            <p className="text-rose-600">
              Camila, meu amor, à meia-noite do dia 31 uma declaração especial
              está guardada para você
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <CalendarIcon className="h-5 w-5 text-rose-500 mr-2" />
          <h3 className="text-xl text-gray-700">Contagem Para a Meia-Noite</h3>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-pink-50 rounded-lg p-3 relative overflow-hidden hover:bg-pink-100 transition-all duration-300">
            <HeartIcon className="absolute -right-3 -top-3 h-8 w-8 text-rose-200 transform rotate-12" />
            <div className="text-2xl font-bold text-rose-600">
              {timeRemaining.days}
            </div>
            <div className="text-xs text-gray-500">Dias</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-3 relative overflow-hidden hover:bg-pink-100 transition-all duration-300">
            <HeartIcon className="absolute -right-3 -top-3 h-8 w-8 text-rose-200 transform -rotate-12" />
            <div className="text-2xl font-bold text-rose-600">
              {timeRemaining.hours}
            </div>
            <div className="text-xs text-gray-500">Horas</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-3 relative overflow-hidden hover:bg-pink-100 transition-all duration-300">
            <HeartIcon className="absolute -right-3 -top-3 h-8 w-8 text-rose-200 transform rotate-12" />
            <div className="text-2xl font-bold text-rose-600">
              {timeRemaining.minutes}
            </div>
            <div className="text-xs text-gray-500">Minutos</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-3 relative overflow-hidden hover:bg-pink-100 transition-all duration-300">
            <HeartIcon className="absolute -right-3 -top-3 h-8 w-8 text-rose-200 transform -rotate-12" />
            <div className="text-2xl font-bold text-rose-600">
              {timeRemaining.seconds}
            </div>
            <div className="text-xs text-gray-500">Segundos</div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 italic">
            "À meia-noite nosso amor brilhará ainda mais forte..."
          </p>
          <p className="text-sm text-rose-500">
            Cada segundo nos aproxima do nosso momento especial
          </p>
        </div>
      </div>
    </div>
  );
}