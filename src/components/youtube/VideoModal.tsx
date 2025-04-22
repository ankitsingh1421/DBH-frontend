import React, { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { VideoData } from "../../types/yt";

interface VideoModalProps {
  isOpen: boolean;
  video: VideoData | null;
  videos: VideoData[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  video,
  videos,
  onClose,
  onNext,
  onPrev,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>
      <button
        onClick={onClose}
        className="absolute top-5 right-2 sm:top-50 sm:right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-all hover:bg-gray-400"
        aria-label="Close modal"
      >
        <X size={20} />
      </button>

      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-4xl rounded-lg bg-white shadow-xl animate-fade-in"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          ></iframe>

          {videos.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-90 text-gray-800 shadow-lg transition-all hover:bg-white"
                aria-label="Previous video"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-90 text-gray-800 shadow-lg transition-all hover:bg-white"
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="p-4 bg-gray-800">
          <h3 className="text-xl font-semibold  text-gray-400">
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
