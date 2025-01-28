// // Updated Internship.js
// import React, { useEffect } from 'react';
// import InternData from '../components/Data/Coursedata.json'
// import InternshipCards from './InternshipCards';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Internship.css';

// const Internship = () => {
//   useEffect(() => {
//     AOS.init({ easing: 'ease-in-shine', duration: 800, delay: 0 });
//   }, []);

//   return (
//     <>
//       <div className='intern-container mt-20' id='courses'>
//         <header className='content-center text-center ml-6 mr-6 rounded-lg' data-aos='fade-up'>
//           <div className='text-6xl font-bold flex justify-center text-white'>
//             Our <div className='text-purple-500 pl-4'>Courses</div>
//           </div>
//         </header>
//         <div className="intern-training-info flex justify-center gap-8 pt-8 pb-8 ml-6 mr-6 rounded-lg">
//           {/* <div className='p-6 bg-gradient-to-r from-purple-400 to-orange-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'> */}
//             {/* <p className='text-white text-center text-2xl font-semibold'>Offline Courses</p> */}
//           {/* </div> */}
//         </div>

//         <div className="intern-card-container">
//           {InternData.map((data) => (
//             <InternshipCards key={data.id} img={data.img} title={data.title} description={data.description} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Internship;






import React, { useEffect } from 'react';
import InternData from '../components/Data/Coursedata.json'; // Make sure the path is correct
import InternshipCards from './InternshipCards';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Internship.css';

const Internship = () => {
  useEffect(() => {
    AOS.init({ easing: 'ease-in-shine', duration: 800, delay: 0 });
  }, []);

  return (
    <>
      <div className='intern-container mt-20' id='courses'>
        <header className='content-center text-center ml-6 mr-6 rounded-lg' data-aos='fade-up'>
          <div className='text-6xl font-bold flex justify-center text-white'>
            Our <div className='text-purple-500 pl-4'>Courses</div>
          </div>
        </header>
        <div className="intern-card-container">
          {InternData.map((data) => (
            <InternshipCards
              key={data.id}
              course={data} // Pass the entire 'data' object here
              onClick={(course) => console.log(course)} // Add onClick handler for each card
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Internship;

