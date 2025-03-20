
import { HeartIcon, SparklesIcon } from 'lucide-react';
export function Header() {
  return <header className="w-full py-4 px-6 flex justify-center items-center bg-white bg-opacity-80 backdrop-blur-sm shadow-sm">
      <div className="flex items-center">
        <SparklesIcon className="h-6 w-6 text-rose-500 mr-2" />
        <HeartIcon className="h-6 w-6 text-rose-500 mr-2 animate-pulse" />
        <h1 className="text-2xl font-serif text-rose-700 tracking-wide">
          Meu Amor, Camila
        </h1>
        <HeartIcon className="h-6 w-6 text-rose-500 ml-2 animate-pulse" />
        <SparklesIcon className="h-6 w-6 text-rose-500 ml-2" />
      </div>
    </header>;
}