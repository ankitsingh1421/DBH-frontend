// import React, { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// export function VideoPlayer() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const video = videoRef.current;
//         if (entry.isIntersecting) {
//           video?.play();
//         } else {
//           video?.pause();
//         }
//       },
//       { threshold: 0.5 } // Adjust the threshold as needed
//     );

//     const videoElement = videoRef.current;
//     if (videoElement) observer.observe(videoElement);

//     return () => {
//       if (videoElement) observer.unobserve(videoElement);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-full rounded-2xl overflow-hidden group  ">
//       <video
//         ref={videoRef}
//         className="w-full h-full object-cover rounded-2xl"
//         controls
//         // Keep the video muted initially
//         preload="metadata"
//       >
//         <source
//           src="WhatsApp Video 2024-12-12 at 21.34.45.mp4" // Demo video URL
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

// export function Vision() {
//   return (
//     // <div className="relative min-h-screen bg-navy-950 overflow-hidden">
//     <div className="relative min-h-screen  overflow-hidden">
//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <div className="space-y-24">
//           {/* Vision Section */}
//           <div className="text-left">
//             <motion.h2
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8"
//             >
//               Vision
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
//             >
//               To create a community of confident musicians who seamlessly integrate the
//               timeless richness of Indian classical music into the dynamic world of
//               Bollywood music.
//             </motion.p>
//           </div>

//           {/* Video Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             style={{ marginLeft: "20%", marginTop: "30px", height: "300px", width: "600px" }}
//             className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
//           >
//             <VideoPlayer />
//           </motion.div>

//           {/* Mission Section - Aligned Left */}
//           <div className="text-right"> {/* Changed from text-right to text-left */}
//             <motion.h2
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8"
//             >
//               Mission

//             </motion.h2>
//             <p className=" text-gray-200 text-xl leading-relaxed mb-16  ">
//               To eradicate singing phobia and empower music lovers by blending Indian
//               classical music with contemporary Bollywood hits through innovative, modern
//               learning methods.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
export function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          video?.play();
        } else {
          video?.pause();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const videoElement = videoRef.current;
    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden group  ">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        controls
        // Keep the video muted initially
        preload="metadata"
      >
        <source
          src="WhatsApp Video 2024-12-12 at 21.34.45.mp4" // Demo video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
export function Vision() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {/* Vision Section */}
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8"
            >
              Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
            >
              To create a community of confident musicians who seamlessly integrate the
              timeless richness of Indian classical music into the dynamic world of
              Bollywood music.
            </motion.p>
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center w-full w-[89%] mx-auto"
          >
            <div
              style={{ marginTop: "30px", height: "300px", width: "600px" }}
              className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
            >
              <VideoPlayer />
            </div>
          </motion.div>

          {/* Mission Section - Aligned Left */}
          <div className="text-right"> {/* Changed from text-right to text-left */}
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8"
            >
              Mission
            </motion.h2>
            <p className=" text-gray-200 text-xl leading-relaxed mb-16  ">
              To eradicate singing phobia and empower music lovers by blending Indian
              classical music with contemporary Bollywood hits through innovative, modern
              learning methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
