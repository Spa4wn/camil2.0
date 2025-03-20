
import { HeartIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full py-3 px-6 text-center bg-white bg-opacity-80 backdrop-blur-sm">
      <p className="text-sm text-rose-600 font-light flex items-center justify-center">
        <HeartIcon className="h-4 w-4 mr-2 animate-pulse" />
        Eternamente seu, com todo meu amor
        <HeartIcon className="h-4 w-4 ml-2 animate-pulse" />
      </p>
    </footer>;
}