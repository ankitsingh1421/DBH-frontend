import { motion } from 'framer-motion';
import './welcome.css'
export function Welcome() {
  return (
    <div className="relative min-h-screen b overflow-hidden flex items-center">
      {/* Gradient Background */}
  {/* Gradient Background */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" /> */}
      
      {/* Glowing Orbs */}
      {/* <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" /> */}
      {/* <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" /> */}
      
      {/* Content */}
      <div 
      className=" gradient-container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Welcome to
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Decoding Bollywood Hits,
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          where we take you on a journey through the world of Bollywood music!
          As the name suggests, we are all about breaking down the magic of
          Bollywood songs to help you understand and appreciate every note,
          lyric, and beat in a simple and engaging way.
        </motion.p>
      </div>
    </div>
  );
}