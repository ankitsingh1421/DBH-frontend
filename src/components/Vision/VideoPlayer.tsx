import { Play } from 'lucide-react';

export function VideoPlayer() {
  return (
    <div
      className="relative w-full h-full bg-gradient-to-br from-yellow-100/10 to-pink-300/10 rounded-2xl overflow-hidden group">
      {/* Video Thumbnail */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-navy-950/50" />

      {/* Play Button */}
      <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30">
          <Play className="w-8 h-8 text-white fill-current" />
        </div>
      </button>
    </div>
  );
}