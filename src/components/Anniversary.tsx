import { useEffect, useState } from 'react';
import { HeartIcon, GiftIcon, CameraIcon, MusicIcon, SparklesIcon, StarIcon, SmileIcon } from 'lucide-react';
export function Anniversary() {
  const [showContent, setShowContent] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    const surpriseTimer = setTimeout(() => {
      setShowSurprise(true);
    }, 2000);
    const photoTimer = setTimeout(() => {
      setShowPhoto(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(surpriseTimer);
      clearTimeout(photoTimer);
    };
  }, []);
  return <div className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
      {showPhoto && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 transform transition-all duration-1000 scale-100 opacity-100">
            <div className="relative">
              <img src="/Imagem_do_WhatsApp_de_2025-03-20_a%28s%29_13.46.54_8afa3235.jpg" alt="Momento especial" className="w-full h-64 object-cover rounded-lg mb-6" />
              <div className="absolute -top-4 -right-4">
                <StarIcon className="h-8 w-8 text-yellow-400 animate-spin" style={{
              animationDuration: '3s'
            }} />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-rose-600 mb-4 text-center">
              Seu Sorriso Ilumina Meu Mundo
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Este sorriso que me encanta todos os dias, essa alegria que
              transborda e contagia... Você é a personificação da felicidade na
              minha vida, Camila.
            </p>
            <div className="flex justify-center">
              <button onClick={() => setShowPhoto(false)} className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors duration-300 flex items-center">
                <HeartIcon className="h-5 w-5 mr-2" />
                Continuar Nossa Celebração
              </button>
            </div>
          </div>
        </div>}
      <div className="text-center mb-12 relative">
        {showSurprise && <div className="absolute inset-0 -z-10">
            {[...Array(20)].map((_, i) => <SparklesIcon key={i} className="absolute animate-ping text-rose-300" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${1 + Math.random() * 3}s`
        }} />)}
          </div>}
        <h1 className="text-4xl md:text-5xl font-serif text-rose-600 mb-4">
          Meu Amor Infinito, Camila!
        </h1>
        <div className="flex justify-center space-x-2 mb-6">
          {[...Array(5)].map((_, i) => <HeartIcon key={i} className="h-6 w-6 text-rose-500 animate-pulse" style={{
          animationDelay: `${i * 0.2}s`
        }} />)}
        </div>
        <p className="text-xl text-gray-700 italic mb-4">
          "Você é a razão do meu sorriso, o motivo das minhas alegrias"
        </p>
        <p className="text-lg text-rose-500">
          Hoje celebramos não apenas uma data, mas todo o amor que construímos
          juntos
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div className="h-48 bg-rose-100 flex items-center justify-center relative">
            <CameraIcon className="h-16 w-16 text-rose-300" />
            <StarIcon className="absolute top-4 right-4 h-6 w-6 text-rose-400 animate-spin" style={{
            animationDuration: '3s'
          }} />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Nossa História de Amor
            </h3>
            <p className="text-gray-600">
              Cada dia ao seu lado é uma nova página de uma história linda que
              estamos escrevendo juntos. Você traz cor e significado para minha
              vida de maneiras que eu nunca imaginei possível.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div className="h-48 bg-pink-100 flex items-center justify-center relative">
            <HeartIcon className="h-16 w-16 text-pink-300" />
            <StarIcon className="absolute top-4 left-4 h-6 w-6 text-rose-400 animate-spin" style={{
            animationDuration: '3s'
          }} />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Razões do Meu Amor
            </h3>
            <p className="text-gray-600">
              Seu coração gentil, sua alma linda, seu jeito único de ser. Você é
              mais do que especial - você é meu sonho realizado, meu presente
              diário.
            </p>
          </div>
        </div>
      </div>
      {showSurprise && <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-rose-100 rounded-lg p-8 shadow-lg text-center mb-12 animate-fade-in">
          <div className="relative">
            <GiftIcon className="h-12 w-12 mx-auto text-rose-500 mb-4 animate-bounce" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <SparklesIcon className="h-8 w-8 text-yellow-400 absolute -top-4 -left-4 animate-ping" />
                <SparklesIcon className="h-8 w-8 text-yellow-400 absolute -top-4 -right-4 animate-ping" />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-serif text-gray-800 mb-4">
            Surpresa Especial Para Você
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Camila, seu sorriso é minha inspiração diária.
            <br />
            <span className="font-semibold text-rose-600">
              Você traz cor e alegria para cada momento que passamos juntos
            </span>
          </p>
          <div className="py-4 px-8 bg-white rounded-full inline-block shadow-lg transform hover:scale-105 transition-transform">
            <p className="text-rose-600 font-medium flex items-center">
              <SmileIcon className="h-5 w-5 mr-2" />
              Você É Minha Felicidade
              <HeartIcon className="h-5 w-5 ml-2 animate-pulse" />
            </p>
          </div>
        </div>}
      <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg text-center mb-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif text-gray-800 mb-6">
            Minha Promessa Eterna
          </h2>
          <p className="text-lg text-gray-700 mb-6 space-y-4">
            <span className="block">
              Prometo te amar mais intensamente a cada amanhecer.
            </span>
            <span className="block">
              Ser não apenas seu parceiro, mas sua fortaleza e porto seguro.
            </span>
            <span className="block">
              Construir um futuro repleto de sorrisos e momentos inesquecíveis.
            </span>
            <span className="block">
              Fazer de cada dia uma nova oportunidade de te fazer feliz.
            </span>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-6 shadow-lg text-center">
        <MusicIcon className="h-6 w-6 mx-auto text-rose-500 mb-2" />
        <p className="italic text-gray-700">
          "Meu coração bate no ritmo do seu amor, numa melodia que só nós dois
          conhecemos."
        </p>
      </div>
    </div>;
}