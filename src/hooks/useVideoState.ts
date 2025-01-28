import { useState } from 'react';

interface VideoState {
  url: string;
  title: string;
}

export const useVideoState = (initialTitle: string = 'Select a video to start learning') => {
  const [videoState, setVideoState] = useState<VideoState>({
    url: '',
    title: initialTitle
  });

  const updateVideo = (url: string, title: string) => {
    setVideoState({ url, title });
  };

  return {
    videoState,
    updateVideo
  };
};