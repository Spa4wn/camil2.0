import { useEffect, useState } from 'react';
import { Anniversary } from './components/Anniversary';
import { Countdown } from './components/Countdown';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
export function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isAnniversaryDay, setIsAnniversaryDay] = useState(false);
  useEffect(() => {
    // Update every 100ms for smooth transition at midnight
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      // Check if it's March 31st
      const isAnniversary = now.getMonth() === 2 && now.getDate() === 31;
      setIsAnniversaryDay(isAnniversary);
    }, 100);
    // Initial check
    const now = new Date();
    setIsAnniversaryDay(now.getMonth() === 2 && now.getDate() === 31);
    return () => clearInterval(timer);
  }, []);
  return <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Header />
      <main className="flex-grow flex items-center justify-center w-full">
        {isAnniversaryDay ? <Anniversary /> : <Countdown currentDate={currentDate} />}
      </main>
      <Footer />
    </div>;
}