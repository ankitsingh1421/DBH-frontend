import React, { useState } from 'react';
import FacilityFilter from './FacilityFilter';
import VideoGrid from './VideoGrid';
import VideoModal from './VideoModal';
import { useVideoModal } from '../../hooks/useVideoModal';
import { VideoData } from '../../types/yt';
import './facility.css';

const FacilitiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { isOpen, selectedVideo, videos, openModal, closeModal, handleNext, handlePrev } = useVideoModal();

  const facilitiesData: VideoData[] = [
    {
      id: '1',
      title: 'Jee Le Zara Cover Song | Feat. Sanskar Saswat',
      category: 'manufacturing',
      youtubeId: 'm0BAwlQ189E',
      featured: true
    },
    {
      id: '2',
      title: 'Tune Jo Na Kaha - Mesmerizing Cover by Decoding Bollywood Hits Ft. Sanskar Saswat',
      category: 'research',
      youtubeId: 'E5p6oBRmm30',
      featured: true
    },
    {
      id: '3',
      title: 'Yeh Jism | Cover | Feat. Sanskar Saswat | Decoding Bollywood Hits',
      category: 'manufacturing',
      youtubeId: '1eFWZnMNHkk'
    },
    {
      id: '4',
      title: 'Jee Le Zara Cover Song | Feat. Sanskar Saswat',
      category: 'research',
      youtubeId: 'm0BAwlQ189E'
    },
    {
      id: '5',
      title: 'Tadap Tadap | Cover | Decoding Bollywood Hits | Sanskar Saswat | Hum Dil De Chuke Sanam',
      category: 'manufacturing',
      youtubeId: 'LAPRwDscmoo'
    },
    {
      id: '6',
      title: 'Jee Le Zara Cover Song | Feat. Sanskar Saswat',
      category: 'other',
      youtubeId: 'm0BAwlQ189E',
      featured: true
    },
    {
      id: '7',
      title: 'Tadap Tadap | Cover | Decoding Bollywood Hits | Sanskar Saswat | Hum Dil De Chuke Sanam',
      category: 'manufacturing',
      youtubeId: 'LAPRwDscmoo'
    },
    {
      id: '8',
      title: 'Jee Le Zara Cover Song | Feat. Sanskar Saswat',
      category: 'other',
      youtubeId: 'm0BAwlQ189E',
      featured: true
    },
    {
      id: '9',
      title: 'Yeh Jism | Cover | Feat. Sanskar Saswat | Decoding Bollywood Hits',
      category: 'research',
      youtubeId: '1eFWZnMNHkk'
    },
    {
      id: '10',
      title: 'Jee Le Zara Cover Song | Feat. Sanskar Saswat',
      category: 'research',
      youtubeId: 'm0BAwlQ189E'
    },
  ];

  const getFilteredVideos = () => {
    const filtered = activeFilter === 'all'
      ? facilitiesData
      : facilitiesData.filter(video => video.category === activeFilter);

    const featured = filtered.find(v => v.featured) || filtered[0];
    const others = filtered.filter(v => v !== featured);

    return {
      featured,
      others
    };
  };

  const { featured, others } = getFilteredVideos();

  return (
    <section className="facilities-section">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="block">
              Sound <span className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Stories
                </span>
              </span>
            </h1>        
        <p className="facilities-description">
        Discover my soulful collection of musical creations, crafted with passion, precision, and heart. Each performance is a journey—tuned to touch emotions and resonate with every listener
        </p>
        
        <FacilityFilter 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />
        
        <VideoGrid 
          featured={featured}
          videos={others} 
          onVideoClick={openModal} 
        />
        
        <VideoModal 
          isOpen={isOpen} 
          video={selectedVideo}
          videos={videos}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </section>
  );
};

export default FacilitiesSection;