import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import './mycourse.css';

function Waiting() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 relative">
      {/* Home Link */}
      <div className="absolute top-4 left-4">
        <a 
          href="#" 
          onClick={() => navigate('/')} 
          className="text-blue-300 hover:text-blue-400 transition-colors duration-200 uppercase text-xs md:text-sm tracking-wider"
        >
          HOME
        </a>
      </div>

      <div className="text-center w-full max-w-3xl px-6">
        {/* Main Text */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wider drop-shadow-2xl">
          Page is UNDER
        </h1>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-12 tracking-wider drop-shadow-2xl">
          CONSTRUCTION
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-8">
          Site Nearly Ready
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto h-2 bg-gray-700 rounded-full overflow-hidden mb-8">
          <div 
            className="h-full bg-blue-400 transition-all duration-200 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Back to Home Button */}
        <button className="button mx-auto flex items-center justify-center gap-2"
          onClick={() => navigate('/')}
        >
          <Home size={18} /> Back to Home Page
        </button>
      </div>

      {/* Percentage Labels */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-between w-full max-w-md px-4 text-xs sm:text-sm">
        <span className="text-gray-500">0%</span>
        <span className="text-gray-500">100%</span>
      </div>
    </div>
  );
}

export default Waiting;
