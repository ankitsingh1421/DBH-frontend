import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import { Quote } from 'lucide-react';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth <= 800);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isTouching = useRef(false);
  const animationFrameId = useRef(null);

  useEffect(() => {
    AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
  }, []);

  const teamMembers = [
    { 
      name: 'Sanskar Saswat', 
      role: 'Co-Founder',
      image: 'sanskar.jpeg',
      quote: 'Building a vision that transforms ideas into reality. Every day brings new opportunities vision that transforms ideas into reality. Every day brings new opportunities  vision that transforms ideas into reality. Every day brings new opportunities to innovate and grow together.'
    },
    { 
      name: 'Roopkatha Roy', 
      role: 'Co-Founder',
      image: 'roop.jpeg',
      quote: 'Dedicated to creating an inclusive platform where Building a vision that transforms ideas into reality. Every day brings new opportunities Building a vision that transforms ideas into reality. Every day brings new opportunities creativity meets opportunity. Our journey is just beginning.'
    },
  ];

  return (
    <>
      {!screenWidth ? (
        <div id="about" className="py-20 ">
          <div className="text-center mb-16">
            <h3 data-aos="fade-up" className="text-4xl font-bold text-white">
              <span className="text-purple-500">From Our </span> Founders' 
              <span className="text-purple-500 pl-3">Desk</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-8 max-w-7xl mx-auto ">
            {teamMembers.map((member, idx) => (
              <div
              key={idx}
              data-aos="fade-up"
              className="rounded-2xl p-8 shadow-xl relative"
              style={{ backgroundColor: 'rgba(14, 14, 78, 0.5)' }} // Adjusts the transparency to 50%
            >
                <div className="flex flex-col md:flex-row items-center gap-6 transform transition-transform hover:scale-105">
                  {/* <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-32 h-32 object-cover border-4 border-purple-500"
                    />
                  </div> */}
                  <div className="flex-1">
                  <FaQuoteLeft className="w-6 h-6 mr-2" />
                    <p className="text-white text-lg mb-6 italic">
                      {member.quote}
                    </p>
                    <div className="text-right border-t pt-4 mt-4 w-full" >
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
  {member.name}
</h4>
                      <p className="text-purple-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div id="about" className="py-20 ">
          <div className="text-center mb-10">
            <h3 data-aos="fade-up" className="text-4xl font-bold text-white">
              <span className="text-purple-500">From</span> Our
              <span className="text-purple-500 pl-3">Founders' Desk</span>
            </h3>
          </div>

          <div
            ref={scrollRef}
            className="team-container flex overflow-x-auto no-scrollbar px-8 max-w-full mx-auto gap-6"
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                className="min-w-[300px] bg-white rounded-2xl p-6 shadow-xl bg-darkBlue"
                style={{ backgroundColor: 'rgba(14, 14, 78, 0.5)' }}
              >
                <div className="flex flex-col items-center">
                  {/* <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-24 h-24 mb-4 border-4 border-purple-500"
                  /> */}
                  
                  <p className="text-white text-base mb-6 italic text-center">
                   <FaQuoteLeft style={{color:"black"}}/> {member.quote}
                  </p>
                  <div className="text-center border-t pt-4 mt-4 w-full">
                    <h4 className="text-xl font-bold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">{member.name}</h4>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default About;


// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './About.css';
// import { Quote } from 'lucide-react';

// const About = () => {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth <= 800);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const isTouching = useRef(false);
//   const animationFrameId = useRef(null);

//   useEffect(() => {
//     AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
//   }, []);

//   const teamMembers = [
//     { 
//       name: 'Srijan Sakshi', 
//       role: 'Vice-Presedent Operations & Event Marketing',
//       image: 'sakshi.jpeg',
//       quote: 'Leading operations and event marketing with passion and innovation.'
//     },
//     { 
//       name: 'Sanskar Saswat', 
//       role: 'Co-Founder',
//       image: 'sanskar.jpeg',
//       quote: 'Building a vision that transforms ideas into reality.'
//     },
//     { 
//       name: 'Roopkatha Roy', 
//       role: 'Co-Founder',
//       image: 'roop.jpeg',
//       quote: 'Creating an inclusive platform where creativity meets opportunity.'
//     },
//     { 
//       name: 'Ankit Singh', 
//       role: 'Chief Technology Officer',
//       image: 'ankit.jpeg',
//       quote: 'Driving technological excellence and innovation forward.'
//     },
//   ];

//   const cloneContent = () => {
//     const container = scrollRef.current;
//     if (container && container.innerHTML && container.childElementCount === teamMembers.length) {
//       container.innerHTML += container.innerHTML;
//     }
//   };

//   const startAutoScroll = () => {
//     const container = scrollRef.current;

//     const smoothScroll = () => {
//       if (!isTouching.current && container) {
//         container.scrollLeft += 1;

//         if (container.scrollLeft >= container.scrollWidth / 2) {
//           container.scrollLeft = 0;
//         }
//       }
//       animationFrameId.current = requestAnimationFrame(smoothScroll);
//     };

//     animationFrameId.current = requestAnimationFrame(smoothScroll);
//   };

//   const stopAutoScroll = () => {
//     if (animationFrameId.current) {
//       cancelAnimationFrame(animationFrameId.current);
//       animationFrameId.current = null;
//     }
//   };

//   useEffect(() => {
//     if (screenWidth) {
//       cloneContent();
//       startAutoScroll();
//     } else {
//       stopAutoScroll();
//     }

//     return () => {
//       stopAutoScroll();
//     };
//   }, [screenWidth]);

//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(window.innerWidth <= 800);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleTouchStart = () => {
//       isTouching.current = true;
//     };

//     const handleTouchEnd = () => {
//       isTouching.current = false;
//     };

//     const container = scrollRef.current;
//     if (container) {
//       container.addEventListener('touchstart', handleTouchStart);
//       container.addEventListener('touchend', handleTouchEnd);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('touchstart', handleTouchStart);
//         container.removeEventListener('touchend', handleTouchEnd);
//       }
//     };
//   }, []);

//   return (
//     <>
//       {!screenWidth ? (
//         <div id="about" className="py-16 bg-darkBlue">
//           <div className="text-center mb-12">
//             <h3 data-aos="fade-up" className="text-4xl font-bold text-white">
//               <span className="text-purple-500">From</span> Our
//               <span className="text-purple-500 pl-3">Founders' Desk</span>
//             </h3>
//           </div>

//           <div className="grid grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
//             {teamMembers.map((member, idx) => (
//               <div
//                 key={idx}
//                 data-aos="fade-up"
//                 className="bg-white rounded-xl p-4 shadow-lg"
//               >
//                 <div className="flex flex-col items-center">
//                   <Quote className="text-purple-500 w-6 h-6 mb-3" />
                
//                   <p className="text-gray-700 text-sm mb-4 italic text-center">
//                     {member.quote}
//                   </p>
//                   <div className="text-center border-t pt-3 mt-2 w-full">
//                     <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
//                     <p className="text-purple-600 text-sm font-medium">{member.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div id="about" className="py-16 bg-darkBlue">
//           <div className="text-center mb-10">
//             <h3 data-aos="fade-up" className="text-4xl font-bold text-white">
//               <span className="text-purple-500">From</span> Our
//               <span className="text-purple-500 pl-3">Founders' Desk</span>
//             </h3>
//           </div>

//           <div
//             ref={scrollRef}
//             className="team-container no-scrollbar px-4"
//           >
//             {teamMembers.map((member, idx) => (
//               <div
//                 key={idx}
//                 data-aos="fade-up"
//                 className="min-w-[240px] bg-white rounded-xl p-4 shadow-lg"
//               >
//                 <div className="flex flex-col items-center">
//                   <Quote className="text-purple-500 w-6 h-6 mb-3" />
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="rounded-full w-20 h-20 object-cover border-2 border-purple-500 mb-3"
//                   />
//                   <p className="text-gray-700 text-sm mb-4 italic text-center">
//                     {member.quote}
//                   </p>
//                   <div className="text-center border-t pt-3 mt-2 w-full">
//                     <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
//                     <p className="text-purple-600 text-sm font-medium">{member.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default About;