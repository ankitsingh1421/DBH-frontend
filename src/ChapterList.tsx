// import React from 'react';
// import { Chapter } from './components/Data/course';
// import { ChevronDown, Play } from 'lucide-react';

// interface ChapterListProps {
//     chapters: Chapter[];
//     activeChapter: number;
//     onChapterClick: (index: number) => void;
//     onVideoClick: (videoUrl: string, title: string) => void;
// }

// const ChapterList: React.FC<ChapterListProps> = ({
//     chapters,
//     activeChapter,
//     onChapterClick,
//     onVideoClick
// }) => {
//     return (
//         <div className="space-y-4">
//             {chapters.map((chapter, index) => (
//                 <div key={chapter.id} className="border rounded-lg overflow-hidden">
//                     <div
//                         className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100"
//                         onClick={() => onChapterClick(index)}
//                     >
//                         <h3 className="text-lg font-medium">
//                             {chapter.id}. {chapter.title}
//                         </h3>
//                         <ChevronDown className={`w-5 h-5 transform transition-transform ${activeChapter === index ? 'rotate-180' : ''
//                             }`} />
//                     </div>
//                     {activeChapter === index && (
//                         <div className="p-4 space-y-2">
//                             {chapter.videos.map((video) => (
//                                 <div
//                                     key={video.id}
//                                     className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
//                                 >
//                                     <span className="flex items-center">
//                                         <Play className="w-4 h-4 text-purple-500 mr-2" />
//                                         {video.title}
//                                     </span>
//                                     <button
//                                         className="text-purple-500 hover:text-purple-700"
//                                         onClick={() => onVideoClick(video.url, video.title)}
//                                     >
//                                         Watch
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChapterList;

// import React, { useState } from 'react';
// import { Chapter } from './components/Data/course'; // Ensure you have the correct import
// import { ChevronDown, Play } from 'lucide-react';

// interface ChapterListProps {
//     chapters: Chapter[];
//     activeChapter: number;
//     onChapterClick: (index: number) => void;
//     onVideoClick: (videoUrl: string, title: string) => void;
// }

// const ChapterList: React.FC<ChapterListProps> = ({
//     chapters,
//     activeChapter,
//     onChapterClick,
//     onVideoClick
// }) => {
//     // State to track which chapter is expanded
//     const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

//     // Toggle the visibility of chapter content
//     const toggleChapter = (index: number) => {
//         if (expandedChapter === index) {
//             // If the chapter is already expanded, collapse it
//             setExpandedChapter(null);
//         } else {
//             // Otherwise, expand the clicked chapter
//             setExpandedChapter(index);
//         }
//     };

//     return (
//         <div className="space-y-4">
//             {chapters.map((chapter, index) => (
//                 <div key={chapter.id} className="border rounded-lg bg-navy-950 text-black overflow-hidden">
//                     <div
//                         className="flex justify-between items-center text-white p-4 cursor-pointer"
//                         onClick={() => toggleChapter(index)}  // Toggle onClick
//                     >
//                         <h3 className="text-lg font-medium">
//                             {chapter.id}. {chapter.title}
//                         </h3>
//                         <ChevronDown
//                             className={`w-5 h-5 transform transition-transform ${expandedChapter === index ? 'rotate-180' : ''}`}
//                         />
//                     </div>

//                     {/* Show chapter videos if it's the active chapter and expanded */}
//                     {expandedChapter === index && (
//                         <div className="p-4 space-y-2">
//                             {chapter.videos.map((video) => (
//                                 <div
//                                     key={video.id}
//                                     className="flex items-center justify-between p-2 hover:bg-blue-950 text-white rounded"
//                                 >
//                                     <span className="flex items-center">
//                                         <Play className="w-4 h-4 text-purple-500 mr-2" />
//                                         {video.title}
//                                     </span>
//                                     <button
//                                         className="hidden lg:block text-purple-500 hover:text-purple-700"
//                                         onClick={() => onVideoClick(video.url, video.title)}
//                                     >
//                                         Watch
//                                     </button>
//                                     <img
//                                         height={"100px"}
//                                         width={"100px"}
//                                         src='/comindTag-removebg-preview.png'
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChapterList;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Lock, LockIcon, Play } from 'lucide-react';
import { SignedOut, SignInButton, useUser } from '@clerk/clerk-react';
import { ToastContainer, toast } from "react-toastify"; // Import toast functions
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
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

const ChapterList: React.FC<ChapterListProps> = ({ chapters }) => {
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
    const navigate = useNavigate();

    const { user, isSignedIn } = useUser();


    // Toggle the visibility of chapter content
    const toggleChapter = (index: number) => {
        setExpandedChapter(expandedChapter === index ? null : index);
    };

    // Navigate to the ChapterPlayer page with the selected video
    const handleWatchClick = (videoUrl: string, chapterId: string) => {
        navigate(`/course/play/1`, { state: { videoUrl } });

        // navigate(`/course/play/${chapterId}`, { state: { videoUrl } });
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
                                    {isSignedIn ?
                                        <button
                                            className="hidden lg:block text-purple-500 hover:text-purple-700"
                                            // onClick={() => handleWatchClick(video.url, chapter.id)}
                                            onClick={() => {
                                                toast.info("videos start soon ");
                                            }}
                                        >
                                            Watch
                                        </button> :
                                        <button
                                            className="hidden lg:block text-purple-500 hover:text-purple-700"

                                        >
                                            <SignedOut>
                                                <SignInButton mode="modal">
                                                    <button className=" text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                                                        <LockIcon />
                                                    </button>
                                                </SignInButton>
                                            </SignedOut>
                                        </button>}
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
