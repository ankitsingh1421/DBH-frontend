import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Lock, LockIcon, Play } from 'lucide-react';
import { SignedOut, SignInButton, useUser } from '@clerk/clerk-react';
import { ToastContainer, toast } from "react-toastify"; // Import toast functions
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
import Notification from './components/notification-ui/Notification';
interface Video {
    id: string;
    title: string;
    url: string;
}

interface Chapter {
    id: string;
    title: string;
    videos: Video[];
}

interface ChapterListProps {
    chapters: Chapter[];
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters , buy}) => {
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
    const [showNoti , setshowNoti] = useState(false);
    const navigate = useNavigate();

    const { user, isSignedIn } = useUser();

    // Toggle the visibility of chapter content
    const toggleChapter = (index: number) => {
        setExpandedChapter(expandedChapter === index ? null : index);
    };

    // Navigate to the ChapterPlayer page with the selected video
    const handleWatchClick = (videoUrl: string, chapterId: string) => {
        navigate(`/course/play/${chapterId}`, { state: { videoUrl } });
    };


    return (
        <div className="space-y-4">
            {chapters.map((chapter, index) => (
                <div key={chapter.id} className=" bg-navy-950 text-black overflow-hidden border-b border-gray-300">
                    <div
                        className="flex justify-between items-center text-white p-4 cursor-pointer"
                        onClick={() => toggleChapter(index)}
                    >
                        <h3 className="text-lg font-medium">
                            {chapter.id}. {chapter.title}
                        </h3>
                        <ChevronDown
                            className={`w-5 h-5 transform transition-transform ${expandedChapter === index ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
  {/* notification div */}
  {showNoti && (
  <div
    className="fixed inset-0 flex items-end justify-center z-50"
    onClick={() => setshowNoti(false)} // Close when clicking outside
  >
    <div
      className="absolute bottom-10 rounded-md shadow-lg"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <Notification
        type="info"
        message="video start soon "
        onClose={() => setshowNoti(false)}
      />
    </div>
  </div>
)}
                    {/* Show chapter videos if expanded */}
                    {expandedChapter === index && (
                        <div className="p-4 space-y-2">
                            {chapter.videos.map((video) => (
                                <div
                                    key={video.id}
                                    className="flex items-center justify-between p-2 hover:bg-blue-950 text-white rounded"
                                >
                                    <span className="flex items-center">
                                        <Play className="w-4 h-4 text-purple-500 mr-2" />
                                        {video.title}
                                    </span>
                                    {isSignedIn ? (
    <button
        className="hidden lg:block text-purple-500 hover:text-purple-700"
        onClick={() => {
            if (!buy) {
                toast.warning("Please purchase the course first!");
                return;
            }
            handleWatchClick(video.url, chapter.id); 
        }}
    >
        Watch
    </button>
) : (
    <SignedOut>
        <SignInButton mode="modal">
            <button className="text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                <LockIcon />
            </button>
        </SignInButton>
    </SignedOut>
)}

                                    <img
                                        height={"100px"}
                                        width={"100px"}
                                        src="/comindTag-removebg-preview.png"
                                        alt="Thumbnail"
                                    />

                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

        </div>
        
    );
};

export default ChapterList;
