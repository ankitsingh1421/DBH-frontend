import React from 'react';
import { VideoData } from '../../types/yt';
import { Plus } from 'lucide-react';

interface VideoGridProps {
  featured: VideoData;
  videos: VideoData[];
  onVideoClick: (video: VideoData, allVideos: VideoData[]) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ featured, videos, onVideoClick }) => {
  const allVideos = [featured, ...videos];
  
  return (
    <div className="video-grid">
      <div 
        className="video-card video-card-featured"
        onClick={() => onVideoClick(featured, allVideos)}
      >
        <div className="video-thumbnail">
          <img 
            src={`https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg`} 
            alt={featured.title}
          />
        </div>
        <div className="video-play-button">
          <div className="play-icon play-icon-large">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        </div>
        <div className="video-title">
          <h3 className="text-lg font-semibold">{featured.title}</h3>
        </div>
      </div>
      
      {videos.length > 0 && (
        <div 
          className="video-card"
          onClick={() => onVideoClick(videos[0], allVideos)}
        >
          <div className="video-thumbnail">
            <img 
              src={`https://img.youtube.com/vi/${videos[0].youtubeId}/mqdefault.jpg`} 
              alt={videos[0].title}
            />
          </div>
          <div className="video-play-button">
            <div className="play-icon play-icon-small">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
          <div className="video-title">
            <h3 className="text-sm font-medium">{videos[0].title}</h3>
          </div>
        </div>
      )}

{videos.length > 1 && (
  <div 
    className="video-card cursor-pointer relative"
    onClick={() => onVideoClick(videos[1], allVideos)}
  >
    <div className="video-thumbnail">
      <img 
        src={`https://img.youtube.com/vi/${videos[1].youtubeId}/mqdefault.jpg`} 
        alt={`More videos thumbnail`}
        className="w-full h-auto object-cover"
      />
    </div>
    
    {/* Overlay for "+X more videos" */}
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white rounded-md">
      <div className="more-icon mb-1">
        <Plus size={24} />
      </div>
      <p className="font-semibold">+{videos.length - 2} more videos</p>
    </div>
  </div>
)}

    </div>
  );
};

export default VideoGrid;