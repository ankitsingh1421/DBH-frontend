import { useState } from 'react';
import { VideoData } from '../types/yt';

export const useVideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (video: VideoData, allVideos: VideoData[]) => {
    setSelectedVideo(video);
    setVideos(allVideos);
    setCurrentIndex(allVideos.findIndex(v => v.id === video.id));
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo(null);
    setVideos([]);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
    setSelectedVideo(videos[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(prevIndex);
    setSelectedVideo(videos[prevIndex]);
  };

  return {
    isOpen,
    selectedVideo,
    videos,
    openModal,
    closeModal,
    handleNext,
    handlePrev
  };
};