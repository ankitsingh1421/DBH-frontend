// import React, { useState, useRef, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { courses } from './components/Data/course';
// import './styles/course.css';

// const ChapterPlayer = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [selectedVideo, setSelectedVideo] = useState<any>(null);
//     const [progress, setProgress] = useState(0);
//     const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
//     const videoRef = useRef<HTMLVideoElement | null>(null);
//     const [course, setCourse] = useState<any>(null);

//     const [comments, setComments] = useState<any[]>([]);
//     const [commentText, setCommentText] = useState<string>('');
//     const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
//     const [likes, setLikes] = useState<{ [key: string]: number }>({});
//     const [showReplies, setShowReplies] = useState<{ [key: string]: boolean }>({});

//     useEffect(() => {
//         const findCourseById = (id: string) => courses.find((course) => course.id === id);

//         if (id) {
//             const courseData = findCourseById(id);
//             if (courseData) {
//                 setCourse(courseData);
//                 setSelectedVideo(courseData.chapters[0].videos[0]);
//             } else {
//                 navigate('/error');
//             }
//         }
//     }, [id, navigate]);

//     const handleVideoClick = (video: any) => {
//         setSelectedVideo(video);
//         if (videoRef.current) {
//             videoRef.current.load();
//         }
//     };

//     const handleTimeUpdate = () => {
//         if (videoRef.current) {
//             const currentTime = videoRef.current.currentTime;
//             const duration = videoRef.current.duration;
//             const progressPercentage = (currentTime / duration) * 100;
//             setProgress(progressPercentage);
//         }
//     };

//     const toggleChapter = (index: number) => {
//         setExpandedChapter(expandedChapter === index ? null : index);
//     };

//     // Handle adding new comment
//     const addComment = () => {
//         if (commentText.trim() === '') return;
//         const newComment = {
//             id: Date.now().toString(),
//             text: commentText,
//             username: "User_" + Math.floor(Math.random() * 1000), // Temporary username
//             replies: [],
//             likes: 0,
//         };
//         setComments([...comments, newComment]);
//         setCommentText('');
//     };

//     // Handle adding reply to a comment
//     const addReply = (commentId: string) => {
//         if (!replyText[commentId]?.trim()) return;
//         const newReply = {
//             id: Date.now().toString(),
//             text: replyText[commentId],
//             username: "User_" + Math.floor(Math.random() * 1000),
//             likes: 0,
//         };
//         setComments(comments.map(comment => 
//             comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment
//         ));
//         setReplyText({ ...replyText, [commentId]: '' });
//     };

//     // Handle like/unlike a comment
//     const toggleLike = (commentId: string) => {
//         setComments(comments.map(comment => 
//             comment.id === commentId ? { ...comment, likes: (comment.likes || 0) + 1 } : comment
//         ));
//     };

//     if (!course || !selectedVideo) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="flex flex-col md:flex-row h-screen bg-gray-100">
//             {/* Left Side - Chapter List */}
//             <div className="w-full md:w-1/4 bg-white p-4 overflow-y-auto shadow-lg">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Course Chapters</h2>
//                 <ul>
//                     {course.chapters.map((chapter, index) => (
//                         <li key={chapter.id}>
//                             <div
//                                 className="p-4 cursor-pointer bg-gray-200 rounded mb-3"
//                                 onClick={() => toggleChapter(index)}
//                             >
//                                 {chapter.title}
//                             </div>
//                             {expandedChapter === index && (
//                                 <div className="pl-4">
//                                     {chapter.videos.map((video) => (
//                                         <div
//                                             key={video.id}
//                                             className="text-gray-800 hover:bg-gray-300 p-2 cursor-pointer"
//                                             onClick={() => handleVideoClick(video)}
//                                         >
//                                             {video.title}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Right Side - Video Player & Comments */}
//             <div className="w-full md:w-3/4 p-6 bg-gray-50 flex flex-col items-center justify-center">
//                 <h1 className="text-3xl font-semibold mb-4">{selectedVideo.title}</h1>

//                 <div className="w-full max-w-4xl">
//                     <video
//                         ref={videoRef}
//                         controls
//                         src={selectedVideo.url}
//                         onTimeUpdate={handleTimeUpdate}
//                         className="w-full h-auto rounded-lg shadow-lg"
//                     >
//                         Your browser does not support the video tag.
//                     </video>

//                     {/* Progress Bar */}
//                     <div className="w-full bg-gray-300 h-4 mt-4 rounded-full overflow-hidden">
//                         <div
//                             className="h-full bg-blue-500"
//                             style={{ width: `${progress}%` }}
//                         ></div>
//                     </div>
//                     <p className="text-gray-600 text-sm mt-2">Progress: {progress.toFixed(2)}%</p>

//                     {/* Comment Section */}
//                     <div className="mt-6 w-full bg-white p-4 rounded-lg shadow-lg">
//                         <h2 className="text-xl font-semibold mb-3">Comments</h2>
//                         <div className="flex items-center space-x-2">
//                             <input
//                                 type="text"
//                                 placeholder="Write a comment..."
//                                 className="flex-grow border rounded p-2"
//                                 value={commentText}
//                                 onChange={(e) => setCommentText(e.target.value)}
//                             />
//                             <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addComment}>
//                                 Post
//                             </button>
//                         </div>

//                         {/* Render Comments */}
//                         <ul className="mt-4 space-y-4">
//                             {comments.map((comment) => (
//                                 <li key={comment.id} className="border-b pb-2">
//                                     <div className="flex justify-between items-center">
//                                         <p><strong>{comment.username}</strong>: {comment.text}</p>
//                                         <button onClick={() => toggleLike(comment.id)} className="text-red-500">
//                                             ❤️ {comment.likes}
//                                         </button>
//                                     </div>
//                                     <button
//                                         className="text-blue-500 text-sm mt-1"
//                                         onClick={() => setShowReplies({ ...showReplies, [comment.id]: !showReplies[comment.id] })}
//                                     >
//                                         Reply
//                                     </button>

//                                     {showReplies[comment.id] && (
//                                         <div className="ml-6 mt-2">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Write a reply..."
//                                                 className="border rounded p-2 w-full"
//                                                 value={replyText[comment.id] || ''}
//                                                 onChange={(e) => setReplyText({ ...replyText, [comment.id]: e.target.value })}
//                                             />
//                                             <button className="bg-green-500 text-white px-3 py-1 rounded mt-1" onClick={() => addReply(comment.id)}>
//                                                 Reply
//                                             </button>
//                                             {comment.replies.map(reply => (
//                                                 <p key={reply.id} className="mt-2"><strong>{reply.username}</strong>: {reply.text}</p>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChapterPlayer;



// import React, { useState, useRef, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { courses } from './components/Data/course';
// import { FiMenu } from "react-icons/fi";
// import './styles/course.css';

// const ChapterPlayer = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [selectedVideo, setSelectedVideo] = useState<any>(null);
//     const [progress, setProgress] = useState(0);
//     const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
//     const videoRef = useRef<HTMLVideoElement | null>(null);
//     const [course, setCourse] = useState<any>(null);
//     const [comments, setComments] = useState<any[]>([]);
//     const [commentText, setCommentText] = useState<string>('');
//     const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
//     const [showReplies, setShowReplies] = useState<{ [key: string]: boolean }>({});
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     useEffect(() => {
//         const findCourseById = (id: string) => courses.find((course) => course.id === id);
//         if (id) {
//             const courseData = findCourseById(id);
//             if (courseData) {
//                 setCourse(courseData);
//                 setSelectedVideo(courseData.chapters[0].videos[0]);
//             } else {
//                 navigate('/error');
//             }
//         }
//     }, [id, navigate]);

//     const handleVideoClick = (video: any) => {
//         setSelectedVideo(video);
//         if (videoRef.current) {
//             videoRef.current.load();
//         }
//     };

//     const toggleChapter = (index: number) => {
//         setExpandedChapter(expandedChapter === index ? null : index);
//     };

//     const addComment = () => {
//         if (commentText.trim() === '') return;
//         const newComment = {
//             id: Date.now().toString(),
//             text: commentText,
//             username: "User_" + Math.floor(Math.random() * 1000),
//             replies: [],
//         };
//         setComments([...comments, newComment]);
//         setCommentText('');
//     };

//     const addReply = (commentId: string) => {
//         if (!replyText[commentId]?.trim()) return;
//         const newReply = {
//             id: Date.now().toString(),
//             text: replyText[commentId],
//             username: "User_" + Math.floor(Math.random() * 1000),
//         };
//         setComments(comments.map(comment => 
//             comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment
//         ));
//         setReplyText({ ...replyText, [commentId]: '' });
//     };

//     return (
//         <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100 overflow-hidden">
            
//             {/* Mobile Sidebar Button */}
//             <div className="md:hidden bg-white shadow-md p-4 flex justify-between items-center">
//                 <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-2xl">
//                     <FiMenu />
//                 </button>
//                 <h2 className="text-xl font-bold">Course Chapters</h2>
//             </div>

//             {/* Sidebar (Collapsible in Mobile) */}
//             <div className={`absolute md:relative w-64 bg-white p-4 shadow-lg h-full transition-transform duration-300 
//                 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//                 <ul>
//                     {course?.chapters.map((chapter, index) => (
//                         <li key={chapter.id}>
//                             <div
//                                 className="p-4 cursor-pointer bg-gray-200 rounded mb-3"
//                                 onClick={() => toggleChapter(index)}
//                             >
//                                 {chapter.title}
//                             </div>
//                             {expandedChapter === index && (
//                                 <div className="pl-4">
//                                     {chapter.videos.map((video) => (
//                                         <div
//                                             key={video.id}
//                                             className="text-gray-800 hover:bg-gray-300 p-2 cursor-pointer"
//                                             onClick={() => handleVideoClick(video)}
//                                         >
//                                             {video.title}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Main Content (Video & Comments) */}
//             <div className="flex flex-col md:flex-row flex-1 h-full overflow-auto">
                
//                 {/* Video Player */}
//                 <div className="w-full md:w-3/5 p-6">
//                     <h1 className="text-3xl font-semibold mb-4">{selectedVideo?.title}</h1>
//                     <video ref={videoRef} controls src={selectedVideo?.url} className="w-full h-auto rounded-lg shadow-lg">
//                         Your browser does not support the video tag.
//                     </video>
//                     <div className="w-full bg-gray-300 h-4 mt-4 rounded-full overflow-hidden">
//                         <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
//                     </div>
//                 </div>

//                 {/* Comments Section */}
//                 <div className="w-full md:w-2/5 p-6 bg-white shadow-md rounded-lg overflow-y-auto h-full">
//                     <h2 className="text-xl font-semibold mb-3">Comments</h2>
//                     <div className="flex items-center space-x-2 mb-4">
//                         <input
//                             type="text"
//                             placeholder="Write a comment..."
//                             className="flex-grow border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={commentText}
//                             onChange={(e) => setCommentText(e.target.value)}
//                         />
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={addComment}>
//                             Post
//                         </button>
//                     </div>

//                     <ul className="space-y-4">
//                         {comments.map((comment) => (
//                             <li key={comment.id} className="p-3 bg-gray-100 rounded-lg shadow-sm">
//                                 <p className="font-semibold">{comment.username}</p>
//                                 <p className="text-gray-700">{comment.text}</p>
//                                 <button
//                                     className="text-blue-500 text-sm mt-1"
//                                     onClick={() => setShowReplies({ ...showReplies, [comment.id]: !showReplies[comment.id] })}
//                                 >
//                                     Reply
//                                 </button>

//                                 {showReplies[comment.id] && (
//                                     <div className="ml-4 mt-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Write a reply..."
//                                             className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//                                             value={replyText[comment.id] || ''}
//                                             onChange={(e) => setReplyText({ ...replyText, [comment.id]: e.target.value })}
//                                         />
//                                         <button className="bg-green-500 text-white px-3 py-1 rounded mt-1 hover:bg-green-600" onClick={() => addReply(comment.id)}>
//                                             Reply
//                                         </button>
//                                         {comment.replies.map(reply => (
//                                             <p key={reply.id} className="mt-2 pl-4 border-l-2 border-gray-300">
//                                                 <strong>{reply.username}</strong>: {reply.text}
//                                             </p>
//                                         ))}
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChapterPlayer;


// import React, { useState, useRef, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { courses } from './components/Data/course';
// import { FiMenu, FiX, FiMoreVertical } from "react-icons/fi";
// import './chapterplayer.css'
// const ChapterPlayer = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [selectedVideo, setSelectedVideo] = useState<any>(null);
//     const [progress, setProgress] = useState(0);
//     const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
//     const videoRef = useRef<HTMLVideoElement | null>(null);
//     const [course, setCourse] = useState<any>(null);
//     const [comments, setComments] = useState<any[]>([]);
//     const [commentText, setCommentText] = useState<string>('');
//     const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
//     const [showReplies, setShowReplies] = useState<{ [key: string]: boolean }>({});
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [showOptions, setShowOptions] = useState<string | null>(null);

//     useEffect(() => {
//         const findCourseById = (id: string) => courses.find((course) => course.id === id);
//         if (id) {
//             const courseData = findCourseById(id);
//             if (courseData) {
//                 setCourse(courseData);
//                 setSelectedVideo(courseData.chapters[0].videos[0]);
//             } else {
//                 navigate('/error');
//             }
//         }
//     }, [id, navigate]);

//     const handleVideoClick = (video: any) => {
//         setSelectedVideo(video);
//         if (videoRef.current) {
//             videoRef.current.load();
//         }
//     };

//     const toggleChapter = (index: number) => {
//         setExpandedChapter(expandedChapter === index ? null : index);
//     };

//     const addComment = () => {
//         if (commentText.trim() === '') return;
//         const newComment = {
//             id: Date.now().toString(),
//             text: commentText,
//             username: "User_" + Math.floor(Math.random() * 1000),
//             replies: [],
//             timestamp: new Date().toISOString()
//         };
//         setComments([...comments, newComment]);
//         setCommentText('');
//     };

//     const addReply = (commentId: string, parentReplyId?: string) => {
//         if (!replyText[commentId]?.trim()) return;
//         const newReply = {
//             id: Date.now().toString(),
//             text: replyText[commentId],
//             username: "User_" + Math.floor(Math.random() * 1000),
//             parentId: parentReplyId,
//             timestamp: new Date().toISOString(),
//             replies: []
//         };

//         setComments(comments.map(comment => {
//             if (comment.id === commentId) {
//                 return {
//                     ...comment,
//                     replies: [...comment.replies, newReply]
//                 };
//             }
//             return comment;
//         }));

//         setReplyText({ ...replyText, [commentId]: '' });
//         setShowReplies({ ...showReplies, [commentId]: true });
//     };

//     const deleteComment = (commentId: string) => {
//         setComments(comments.filter(comment => comment.id !== commentId));
//         setShowOptions(null);
//     };

//     const deleteReply = (commentId: string, replyId: string) => {
//         setComments(comments.map(comment => {
//             if (comment.id === commentId) {
//                 return {
//                     ...comment,
//                     replies: comment.replies.filter(reply => reply.id !== replyId)
//                 };
//             }
//             return comment;
//         }));
//         setShowOptions(null);
//     };

//     const CommentOptions = ({ commentId, isReply, replyId }: { commentId: string, isReply?: boolean, replyId?: string }) => (
//         <div className="relative inline-block">
//             <button
//                 onClick={() => setShowOptions(showOptions === commentId ? null : commentId)}
//                 className="p-1 hover:bg-gray-200 rounded-full"
//             >
//                 <FiMoreVertical />
//             </button>
//             {showOptions === commentId && (
//                 <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md py-1 z-50">
//                     <button
//                         onClick={() => isReply ? deleteReply(commentId, replyId!) : deleteComment(commentId)}
//                         className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                     >
//                         Delete
//                     </button>
//                 </div>
//             )}
//         </div>
//     );

//     return (
//         <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100 overflow-hidden">
//             {/* Mobile Header */}
//             <div className="md:hidden bg-white shadow-md p-4 flex justify-between items-center z-50">
//                 <button 
//                     onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
//                     className="text-2xl transition-transform duration-300 ease-in-out"
//                 >
//                     {isSidebarOpen ? <FiX /> : <FiMenu />}
//                 </button>
//                 <h2 className="text-xl font-bold">Course Chapters</h2>
//             </div>

//             {/* Sidebar */}
//             <div className={`fixed md:relative w-64 bg-white shadow-lg h-[calc(100%-4rem)] md:h-full transition-all duration-300 ease-in-out z-40
//                 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//                 <div className="p-4 overflow-y-auto h-full">
//                     <ul>
//                         {course?.chapters.map((chapter, index) => (
//                             <li key={chapter.id}>
//                                 <div
//                                     className="p-4 cursor-pointer bg-gray-200 rounded mb-3 hover:bg-gray-300 transition-colors"
//                                     onClick={() => toggleChapter(index)}
//                                 >
//                                     {chapter.title}
//                                 </div>
//                                 {expandedChapter === index && (
//                                     <div className="pl-4">
//                                         {chapter.videos.map((video) => (
//                                             <div
//                                                 key={video.id}
//                                                 className={`text-gray-800 hover:bg-gray-300 p-2 cursor-pointer rounded transition-colors
//                                                     ${selectedVideo?.id === video.id ? 'bg-gray-300' : ''}`}
//                                                 onClick={() => handleVideoClick(video)}
//                                             >
//                                                 {video.title}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 h-full overflow-hidden flex flex-col md:flex-row">
//                 {/* Video Section */}
//                 <div className="w-full md:w-3/5 p-6 overflow-y-auto">
//                     <h1 className="text-3xl font-semibold mb-4">{selectedVideo?.title}</h1>
//                     <div className="relative">
//                         <video 
//                             ref={videoRef} 
//                             controls 
//                             src={selectedVideo?.url} 
//                             className="w-full h-auto rounded-lg shadow-lg"
//                         >
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>
//                     <div className="w-full bg-gray-300 h-4 mt-4 rounded-full overflow-hidden">
//                         <div 
//                             className="h-full bg-blue-500 transition-all duration-300" 
//                             style={{ width: `${progress}%` }}
//                         ></div>
//                     </div>
//                 </div>

//                 {/* Comments Section */}
//                 <div className="w-full md:w-2/5 p-6 bg-white shadow-md overflow-y-auto">
//                     <h2 className="text-xl font-semibold mb-3">Comments</h2>
//                     <div className="flex items-center space-x-2 mb-4">
//                         <input
//                             type="text"
//                             placeholder="Write a comment..."
//                             className="flex-grow border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={commentText}
//                             onChange={(e) => setCommentText(e.target.value)}
//                             onKeyPress={(e) => e.key === 'Enter' && addComment()}
//                         />
//                         <button 
//                             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
//                             onClick={addComment}
//                         >
//                             Post
//                         </button>
//                     </div>

//                     <ul className="space-y-4">
//                         {comments.map((comment) => (
//                             <li key={comment.id} className="p-3 bg-gray-100 rounded-lg shadow-sm">
//                                 <div className="flex justify-between items-start">
//                                     <div>
//                                         <p className="font-semibold">{comment.username}</p>
//                                         <p className="text-gray-700">{comment.text}</p>
//                                     </div>
//                                     <CommentOptions commentId={comment.id} />
//                                 </div>
                                
//                                 <div className="mt-2 flex items-center space-x-4">
//                                     <button
//                                         className="text-blue-500 text-sm hover:text-blue-700 transition-colors"
//                                         onClick={() => setShowReplies({ ...showReplies, [comment.id]: !showReplies[comment.id] })}
//                                     >
//                                         {showReplies[comment.id] ? 'Hide Replies' : 'Reply'}
//                                     </button>
//                                 </div>

//                                 {showReplies[comment.id] && (
//                                     <div className="ml-4 mt-2 space-y-2">
//                                         <div className="flex items-center space-x-2">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Write a reply..."
//                                                 className="flex-grow border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                                 value={replyText[comment.id] || ''}
//                                                 onChange={(e) => setReplyText({ ...replyText, [comment.id]: e.target.value })}
//                                                 onKeyPress={(e) => e.key === 'Enter' && addReply(comment.id)}
//                                             />
//                                             <button 
//                                                 className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
//                                                 onClick={() => addReply(comment.id)}
//                                             >
//                                                 Reply
//                                             </button>
//                                         </div>
                                        
//                                         {comment.replies.map((reply) => (
//                                             <div key={reply.id} className="ml-4 p-2 bg-white rounded border-l-2 border-gray-300">
//                                                 <div className="flex justify-between items-start">
//                                                     <div>
//                                                         <p className="font-semibold">{reply.username}</p>
//                                                         <p className="text-gray-700">{reply.text}</p>
//                                                     </div>
//                                                     <CommentOptions commentId={comment.id} isReply={true} replyId={reply.id} />
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChapterPlayer;




import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from './components/Data/course';
import { FiMenu, FiX, FiMoreVertical } from "react-icons/fi";
import './styles/course.css';
import { Navbar } from './components/Navbar/Navbar';

const ChapterPlayer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedVideo, setSelectedVideo] = useState<any>(null);
    const [progress, setProgress] = useState(0);
    const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [course, setCourse] = useState<any>(null);
    const [comments, setComments] = useState<any[]>([]);
    const [commentText, setCommentText] = useState<string>('');
    const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
    const [showReplies, setShowReplies] = useState<{ [key: string]: boolean }>({});
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showOptions, setShowOptions] = useState<string | null>(null);

    useEffect(() => {
        const findCourseById = (id: string) => courses.find((course) => course.id === id);
        if (id) {
            const courseData = findCourseById(id);
            if (courseData) {
                setCourse(courseData);
                setSelectedVideo(courseData.chapters[0].videos[0]);
            } else {
                navigate('/error');
            }
        }
    }, [id, navigate]);

    const handleVideoClick = (video: any) => {
        setSelectedVideo(video);
        if (videoRef.current) {
            videoRef.current.load();
        }
    };

    const toggleChapter = (index: number) => {
        setExpandedChapter(expandedChapter === index ? null : index);
    };

    const addComment = () => {
        if (commentText.trim() === '') return;
        const newComment = {
            id: Date.now().toString(),
            text: commentText,
            username: "User_" + Math.floor(Math.random() * 1000),
            replies: [],
            timestamp: new Date().toISOString()
        };
        setComments([...comments, newComment]);
        setCommentText('');
    };

    const addReply = (commentId: string, parentReplyId?: string) => {
        if (!replyText[commentId]?.trim()) return;
        const newReply = {
            id: Date.now().toString(),
            text: replyText[commentId],
            username: "User_" + Math.floor(Math.random() * 1000),
            parentId: parentReplyId,
            timestamp: new Date().toISOString(),
            replies: []
        };

        setComments(comments.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    replies: [...comment.replies, newReply]
                };
            }
            return comment;
        }));

        setReplyText({ ...replyText, [commentId]: '' });
        setShowReplies({ ...showReplies, [commentId]: true });
    };

    const deleteComment = (commentId: string) => {
        setComments(comments.filter(comment => comment.id !== commentId));
        setShowOptions(null);
    };

    const deleteReply = (commentId: string, replyId: string) => {
        setComments(comments.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    replies: comment.replies.filter(reply => reply.id !== replyId)
                };
            }
            return comment;
        }));
        setShowOptions(null);
    };

    const CommentOptions = ({ commentId, isReply, replyId }: { commentId: string, isReply?: boolean, replyId?: string }) => (
        <div className="relative inline-block">
            <button
                onClick={() => setShowOptions(showOptions === commentId ? null : commentId)}
                className="p-1 hover:bg-gray-200 rounded-full"
            >
                <FiMoreVertical />
            </button>
            {showOptions === commentId && (
                <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md py-1 z-50">
                    <button
                        onClick={() => isReply ? deleteReply(commentId, replyId!) : deleteComment(commentId)}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
            <Navbar/>
            {/* Mobile Header */}
            <div className="md:hidden bg-white shadow-md p-4 flex justify-between items-center z-50">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                    className="text-2xl transition-transform duration-300 ease-in-out"
                >
                    {isSidebarOpen ? <FiX /> : <FiMenu />}
                </button>
                <h2 className="text-xl font-bold">Course Chapters</h2>
            </div>

            {/* Sidebar */}
            
            <div className={`fixed md:sticky top-0 w-64 bg-white shadow-lg h-[calc(100%-4rem)] md:h-screen transition-all duration-300 ease-in-out z-40 overflow-y-auto
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                    <h2 className="text-xl font-bold">Course Chapters</h2>
                <div className="p-4">
                    <ul>
                        {course?.chapters.map((chapter, index) => (
                            <li key={chapter.id}>
                                <div
                                    className="p-4 cursor-pointer bg-gray-200 rounded mb-3 hover:bg-gray-300 transition-colors"
                                    onClick={() => toggleChapter(index)}
                                >
                                    {chapter.title}
                                </div>
                                {expandedChapter === index && (
                                    <div className="pl-4">
                                        {chapter.videos.map((video) => (
                                            <div
                                                key={video.id}
                                                className={`text-gray-800 hover:bg-gray-300 p-2 cursor-pointer rounded transition-colors
                                                    ${selectedVideo?.id === video.id ? 'bg-gray-300' : ''}`}
                                                onClick={() => handleVideoClick(video)}
                                            >
                                                {video.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content */}
                     

            <div className="flex-1 md:overflow-y-auto">
                {/* Video Section */}
                <div className="w-full p-6">
                    <h1 className="text-3xl font-semibold mb-4">{selectedVideo?.title}</h1>
                    <div className="relative">
                        <video 
                            ref={videoRef} 
                            controls 
                            src={selectedVideo?.url} 
                            className="w-full h-auto rounded-lg shadow-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="w-full bg-gray-300 h-4 mt-4 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-blue-500 transition-all duration-300" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="w-full p-6 bg-white shadow-md">
                    <h2 className="text-xl font-semibold mb-3">Comments</h2>
                    <div className="flex items-center space-x-2 mb-4">
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            className="flex-grow border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addComment()}
                        />
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            onClick={addComment}
                        >
                            Post
                        </button>
                    </div>

                    <ul className="space-y-4">
                        {comments.map((comment) => (
                            <li key={comment.id} className="p-3 bg-gray-100 rounded-lg shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold">{comment.username}</p>
                                        <p className="text-gray-700">{comment.text}</p>
                                    </div>
                                    <CommentOptions commentId={comment.id} />
                                </div>
                                
                                <div className="mt-2 flex items-center space-x-4">
                                    <button
                                        className="text-blue-500 text-sm hover:text-blue-700 transition-colors"
                                        onClick={() => setShowReplies({ ...showReplies, [comment.id]: !showReplies[comment.id] })}
                                    >
                                        {showReplies[comment.id] ? 'Hide Replies' : 'Reply'}
                                    </button>
                                </div>

                                {showReplies[comment.id] && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="text"
                                                placeholder="Write a reply..."
                                                className="flex-grow border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={replyText[comment.id] || ''}
                                                onChange={(e) => setReplyText({ ...replyText, [comment.id]: e.target.value })}
                                                onKeyPress={(e) => e.key === 'Enter' && addReply(comment.id)}
                                            />
                                            <button 
                                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
                                                onClick={() => addReply(comment.id)}
                                            >
                                                Reply
                                            </button>
                                        </div>
                                        
                                        {comment.replies.map((reply) => (
                                            <div key={reply.id} className="ml-4 p-2 bg-white rounded border-l-2 border-gray-300">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-semibold">{reply.username}</p>
                                                        <p className="text-gray-700">{reply.text}</p>
                                                    </div>
                                                    <CommentOptions commentId={comment.id} isReply={true} replyId={reply.id} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChapterPlayer;