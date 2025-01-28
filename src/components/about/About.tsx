// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './About.css';

// const About = () => {
//   useEffect(() => {
//     AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
//   }, []);

//   const teamMembers = [
//     {
//       name: 'Srijan Sakshi',
//       role: 'Operations & Event Management',
//       image: 'sakshi.jpeg',
//     },
//     {
//       name: 'Sanskar Saswat',
//       role: 'Founder',
//       image: 'sanskar.jpeg',
//     },
//     {
//       name: 'Roopkatha Roy',
//       role: 'Co-Founder',
//       image: 'roop.jpeg',
//     },
//     {
//       name: 'Ankit Singh',
//       role: 'Lead Full Stack Engineer ',
//       image: 'ankit.jpeg',
//     },
//   ];

//   return (
//     <div id="about" className="py-20 bg-darkBlue ">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h3 data-aos="fade-up" className="text-5xl font-bold text-white">
//           <span className="text-purple-500 ">Say</span> Hello
//           <span className="text-purple-500 pl-3">To Our Team</span>
//         </h3>
//       </div>

//       {/* Team Members Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-8xl mx-auto " >
//         {teamMembers.map((member, idx) => (
//           <div
//             style={{ height: "350px", width: "200px" }}
//             key={idx}
//             data-aos="fade-up"
//             className=" flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
//           >
//             <h4
//               style={{ marginTop: "-20px", fontSize: "20px" }}
//               className="text-3xl font-semibold text-white mb-2">{member.name}</h4>
//             <img
//               style={{ height: "700px", width: "200px" }}
//               src={member.image}
//               alt={member.name}
//               className="rounded-full w-64 h-64 mb-4 "
//             />
//             <p
//               style={{ marginTop: "-10px", fontSize: "20px" }}
//               className="text-2xl text-gray-200">{member.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;

// import { useEffect, useRef } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './About.css';

// const About = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });

//     const scroll = () => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

//         if (scrollLeft + clientWidth >= scrollWidth) {
//           scrollRef.current.scrollLeft = 0; // Reset to the start
//         } else {
//           scrollRef.current.scrollLeft += 1; // Continue scrolling
//         }
//       }
//     };

//     const interval = setInterval(scroll, 30); // Adjust speed as needed

//     return () => clearInterval(interval);
//   }, []);

//   const teamMembers = [
//     {
//       name: 'Srijan Sakshi',
//       role: 'Operations & Event Management',
//       image: 'sakshi.jpeg',
//     },
//     {
//       name: 'Sanskar Saswat',
//       role: 'Founder',
//       image: 'sanskar.jpeg',
//     },
//     {
//       name: 'Roopkatha Roy',
//       role: 'Co-Founder',
//       image: 'roop.jpeg',
//     },
//     {
//       name: 'Ankit Singh',
//       role: 'Lead Full Stack Engineer',
//       image: 'ankit.jpeg',
//     },
//   ];

//   // Duplicate the team members to create the infinite scrolling effect
//   const scrollingMembers = [...teamMembers, ...teamMembers];

//   return (
//     <div id="about" className="py-20 bg-darkBlue">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h3 data-aos="fade-up" className="text-5xl font-bold text-white">
//           <span className="text-purple-500">Say</span> Hello
//           <span className="text-purple-500 pl-3">To Our Team</span>
//         </h3>
//       </div>

//       {/* Horizontal Scroll Section */}
//       <div
//         ref={scrollRef}
//         className="horizontal-scroll flex space-x-6 overflow-x-auto scrollbar-hide px-8"
//       >
//         {scrollingMembers.map((member, idx) => (
//           <div
//             key={idx}
//             data-aos="fade-up"
//             className="team-card flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
//           >
//             <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
//             <img
//               src={member.image}
//               alt={member.name}
//               className="team-image w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-4"
//             />
//             <p className="text-lg text-gray-200">{member.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './About.css';

// const About = () => {
//   const teamMembers = [
//     {
//       name: 'Srijan Sakshi',
//       role: 'Operations & Event Management',
//       image: 'sakshi.jpeg',
//     },
//     {
//       name: 'Sanskar Saswat',
//       role: 'Founder',
//       image: 'sanskar.jpeg',
//     },
//     {
//       name: 'Roopkatha Roy',
//       role: 'Co-Founder',
//       image: 'roop.jpeg',
//     },
//     {
//       name: 'Ankit Singh',
//       role: 'Lead Full Stack Engineer',
//       image: 'ankit.jpeg',
//     },
//   ];

//   return (
//     <div id="about" className="py-20 bg-darkBlue">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h3 data-aos="fade-up" className="text-5xl font-bold text-white">
//           <span className="text-purple-500">Say</span> Hello
//           <span className="text-purple-500 pl-3">To Our Team</span>
//         </h3>
//       </div>

//       {/* Horizontal Scroll Section */}
//       <div className="horizontal-scroll">
//         {/* Duplicate the team members */}
//         <div className="scroll-content">
//           {teamMembers.map((member, idx) => (
//             <div
//               key={`original-${idx}`}
//               data-aos="fade-up"
//               className="team-card flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
//             >
//               <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="team-image w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-4"
//               />
//               <p className="text-lg text-gray-200">{member.role}</p>
//             </div>
//           ))}

//           {/* Duplicate for seamless effect */}
//           {teamMembers.map((member, idx) => (
//             <div
//               key={`duplicate-${idx}`}
//               className="team-card flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
//             >
//               <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="team-image w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-4"
//               />
//               <p className="text-lg text-gray-200">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './About.css';

// const About = () => {
//   const teamMembers = [
//     {
//       name: 'Srijan Sakshi',
//       role: 'Operations & Event Management',
//       image: 'sakshi.jpeg',
//     },
//     {
//       name: 'Sanskar Saswat',
//       role: 'Founder',
//       image: 'sanskar.jpeg',
//     },
//     {
//       name: 'Roopkatha Roy',
//       role: 'Co-Founder',
//       image: 'roop.jpeg',
//     },
//     {
//       name: 'Ankit Singh',
//       role: 'Lead Full Stack Engineer',
//       image: 'ankit.jpeg',
//     },
//   ];

//   return (
//     <div id="about" className="py-20 bg-darkBlue">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h3 data-aos="fade-up" className="text-5xl font-bold text-white">
//           <span className="text-purple-500">Say</span> Hello
//           <span className="text-purple-500 pl-3">To Our Team</span>
//         </h3>
//       </div>

//       {/* Horizontal Scroll Section */}
//       <div className="horizontal-scroll">
//         {/* Duplicate the team members */}
//         <div className="scroll-content">
//           {teamMembers.map((member, idx) => (
//             <div
//               key={`original-${idx}`}
//               data-aos="fade-up"
//               className="team-card flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
//             >
//               <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="team-image w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-4"
//               />
//               <p className="text-lg text-gray-200">{member.role}</p>
//             </div>
//           ))}

//           {/* Duplicate for seamless effect */}
//           {teamMembers.map((member, idx) => (
//             <div
//               key={`duplicate-${idx}`}
//               className="team-card flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
//             >
//               <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="team-image w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-4"
//               />
//               <p className="text-lg text-gray-200">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth <= 800);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isTouching = useRef(false); // Ref to track whether the user is touching the screen
  const animationFrameId = useRef(null); // Ref for animation ID to manage requests






  useEffect(() => {
    AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
  }, []);

  const teamMembers = [
    { name: 'Srijan Sakshi', role: 'Vice-Presedent Operations & Event Marketing ', image: 'sakshi.jpeg' },
    { name: 'Sanskar Saswat', role: 'Co-Founder ', image: 'sanskar.jpeg' },
    { name: 'Roopkatha Roy', role: 'Co-Founder', image: 'roop.jpeg' },
    { name: 'Ankit Singh', role: 'Chief Technology Officer', image: 'ankit.jpeg' },
  ];

  const cloneContent = () => {
    const container = scrollRef.current;
    if (container && container.innerHTML && container.childElementCount === teamMembers.length) {
      container.innerHTML += container.innerHTML; // Clone content only once
    }
  };

  const startAutoScroll = () => {
    const container = scrollRef.current;

    const smoothScroll = () => {
      if (!isTouching.current && container) {
        container.scrollLeft += 1.5; // Adjust scroll speed as necessary

        // Reset scroll position when halfway through the content
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId.current = requestAnimationFrame(smoothScroll);
    };

    animationFrameId.current = requestAnimationFrame(smoothScroll);
  };

  const stopAutoScroll = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  useEffect(() => {
    if (screenWidth) {
      cloneContent(); // Clone content only when screenWidth is true
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    // Cleanup on unmount
    return () => {
      stopAutoScroll();
    };
  }, [screenWidth]); // Trigger scroll behavior based on screenWidth

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle touch events to stop and resume scrolling
  useEffect(() => {
    const handleTouchStart = () => {
      isTouching.current = true; // Stop auto-scrolling
    };

    const handleTouchEnd = () => {
      isTouching.current = false; // Resume auto-scrolling
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
    }

    // Cleanup touch event listeners on unmount
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <>
      {!screenWidth ? (
        <div id="about" className="py-20 bg-darkBlue ">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h3 data-aos="fade-up" className="text-5xl font-bold text-white">
              <span className="text-purple-500 ">From</span> <span className="text-purple-500 pl-3"> Our </span>
              Founders
              <span className="text-purple-500 pl-3"> Desk </span>
            </h3>
          </div>

          {/* Team Members Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-8xl mx-auto ">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                className=" flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
              >
                <h4 className="text-3xl font-semibold text-white mb-2">{member.name}</h4>
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-64 h-64 mb-4 "
                />
                <p className="text-2xl text-gray-200">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div id="about" className="py-20 bg-darkBlue">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h3 data-aos="fade-up" className="text-5xl font-bold text-white">
              <span className="text-purple-500">Say</span> Hello
              <span className="text-purple-500 pl-3">To Our Team</span>
            </h3>
          </div>

          {/* Team Members Section */}
          <div
            ref={scrollRef}
            className="team-container flex overflow-x-auto no-scrollbar px-8 max-w-full mx-auto gap-6"
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                className="min-w-[250px] flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
              >
                <h4 className="text-3xl font-semibold text-white mb-2">{member.name}</h4>
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-40 h-40 mb-4"
                />
                <p className="text-2xl text-gray-200">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default About;