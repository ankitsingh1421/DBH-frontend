// import React, { useRef, useState } from "react";

// const YouTubeVideos: React.FC = () => {
//     // Correct embed video URLs
//     const videoUrls = [
//         "https://www.youtube.com/embed/m0BAwlQ189E",
//         "https://www.youtube.com/embed/E5p6oBRmm30",
//         "https://www.youtube.com/embed/1eFWZnMNHkk",
//         "https://www.youtube.com/embed/LAPRwDscmoo",
//     ];

//     // Reference for the scrollable container
//     const scrollContainerRef = useRef<HTMLDivElement>(null);

//     // State to handle dragging
//     const [isDragging, setIsDragging] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeft, setScrollLeft] = useState(0);

//     // Mouse and Touch Event Handlers
//     const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//         setIsDragging(true);
//         setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
//         setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
//     };

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//         if (!isDragging) return;
//         e.preventDefault();
//         const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
//         const walk = (x - startX) * 2; // Adjust scroll sensitivity
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollLeft = scrollLeft - walk;
//         }
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     const handleMouseLeave = () => {
//         setIsDragging(false);
//     };

//     return (
//         <div className="flex flex-col items-center p-6 min-h-screen ">
//             {/* Heading */}
//             <div className="text-6xl font-bold flex justify-center text-white mb-8" style={{ marginTop: "100px" }}>
//                 Our <div className="text-purple-500 pl-4">Work</div>
//             </div>

//             {/* Horizontal Scroll Section */}
//             <div
//                 ref={scrollContainerRef}
//                 className="relative w-full max-w-5xl flex gap-8 overflow-x-auto scrollbar-hide p-4  rounded-lg"
//                 style={{ scrollBehavior: "smooth", cursor: isDragging ? "grabbing" : "grab" }}
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 {/* Video Cards */}
//                 {videoUrls.map((videoUrl, index) => (
//                     <div
//                         key={index}
//                         className="min-w-[300px] md:min-w-[600px] bg-white shadow-lg rounded-lg overflow-hidden"
//                         style={{ height: "400px" }}
//                     >
//                         <iframe
//                             style={{ height: "400px" }}
//                             className="w-full h-64"
//                             src={videoUrl}
//                             title={`YouTube Video ${index}`}
//                             allowFullScreen
//                         ></iframe>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default YouTubeVideos;



// // import React, { useRef, useState } from "react";

// // const YouTubeVideos: React.FC = () => {
// //     const videoUrls = [
// //         "https://www.youtube.com/embed/m0BAwlQ189E",
// //         "https://www.youtube.com/embed/E5p6oBRmm30",
// //         "https://www.youtube.com/embed/1eFWZnMNHkk",
// //         "https://www.youtube.com/embed/LAPRwDscmoo",
// //     ];

// //     const scrollContainerRef = useRef<HTMLDivElement>(null);
// //     const [isDragging, setIsDragging] = useState(false);
// //     const [startX, setStartX] = useState(0);
// //     const [scrollLeft, setScrollLeft] = useState(0);

// //     const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
// //         setIsDragging(true);
// //         setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
// //         setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
// //     };

// //     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
// //         if (!isDragging) return;
// //         e.preventDefault();
// //         const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
// //         const walk = (x - startX) * 2;
// //         if (scrollContainerRef.current) {
// //             scrollContainerRef.current.scrollLeft = scrollLeft - walk;
// //         }
// //     };

// //     const handleMouseUp = () => setIsDragging(false);
// //     const handleMouseLeave = () => setIsDragging(false);

// //     return (
// //         <div
// //             className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500"
// //         >
// //             {/* Heading */}
// //             <div
// //                 className="text-6xl font-extrabold text-center text-white mb-10"
// //                 style={{ marginTop: "100px" }}
// //             >
// //                 Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-500">Work</span>
// //             </div>

// //             {/* Horizontal Scroll Section */}
// //             <div
// //                 ref={scrollContainerRef}
// //                 className="relative w-full max-w-6xl flex gap-8 overflow-x-auto scrollbar-hide p-6 rounded-lg bg-white/30 shadow-md"
// //                 style={{
// //                     scrollBehavior: "smooth",
// //                     cursor: isDragging ? "grabbing" : "grab",
// //                 }}
// //                 onMouseDown={handleMouseDown}
// //                 onMouseMove={handleMouseMove}
// //                 onMouseUp={handleMouseUp}
// //                 onMouseLeave={handleMouseLeave}
// //             >
// //                 {/* Video Cards */}
// //                 {videoUrls.map((videoUrl, index) => (
// //                     <div
// //                         key={index}
// //                         className="min-w-[300px] md:min-w-[450px] bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
// //                         style={{ height: "400px" }}
// //                     >
// //                         <iframe
// //                             className="w-full h-full"
// //                             src={videoUrl}
// //                             title={`YouTube Video ${index}`}
// //                             allowFullScreen
// //                             aria-label={`YouTube Video ${index}`}
// //                         ></iframe>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default YouTubeVideos;

import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const YouTubeVideos: React.FC = () => {
  // Correct embed video URLs
  const videoUrls = [
    "https://www.youtube.com/embed/m0BAwlQ189E",
    "https://www.youtube.com/embed/E5p6oBRmm30",
    "https://www.youtube.com/embed/1eFWZnMNHkk",
    "https://www.youtube.com/embed/LAPRwDscmoo",
  ];

  // Reference for the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to the next set of videos
  const handleNext = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollLeft += containerWidth; // Scroll by container width
    }
  };

  // Scroll to the previous set of videos
  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollLeft -= containerWidth; // Scroll by container width
    }
  };

  return (
    <div
    className="flex flex-col items-center p-6 min-h-screen">
      {/* Heading */}
      <div
        className="text-6xl font-bold flex justify-center text-white mb-8"
        style={{ marginTop: "100px" }}
      >
        Our <div className="text-purple-500 pl-4">Work</div>
      </div>

      {/* Navigation Buttons */}
      <div
      
      className="flex items-center justify-between w-full max-w-5xl mb-4">
        <button
          onClick={handlePrev}
          style={{marginLeft:"-100px", marginBottom:"-500px"}}
          className=" top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
          >
                  <FaArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
           style={{marginRight:"-100px", marginBottom:"-500px"}}
          className="  top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
        >
        <FaArrowRight size={24} />

        </button>
      </div>

      {/* Horizontal Scroll Section */}
      
      <div
        ref={scrollContainerRef}
        className="relative w-full max-w-5xl flex gap-8 overflow-x-auto scrollbar-hide p-4 rounded-lg"
        style={{ scrollBehavior: "smooth" }}
      >
        
        {/* Video Cards */}
        {videoUrls.map((videoUrl, index) => (
          <div
            key={index}
            style={{width:"800px",height:"500px"}}
            className="w-[100%] sm:w-[50%] h-[300px] md:h-[400px] bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0"
          >
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={`YouTube Video ${index}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
